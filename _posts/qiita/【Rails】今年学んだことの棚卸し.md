---
description: '【Rails】今年学んだことの棚卸し'
tags:
date: '2019-12-27'
---
# 【Rails】今年学んだことの棚卸し
今年はRailsをたくさん書いた年だったのでRailsについて書き留めておきます。  
  
## モデルリレーションにエイリアスを付けたい  
  
UserテーブルはUserテーブルである場合が多い。システムから見てユーザはユーザだからです。ですが、システム内においてユーザはユーザではなく、出品者であり、購入者であり、主催者であり、投稿者であり、フォロワーでありフォロイーです。これを  
  
**contest.rb**  
```rb:contest.rb
class Contest < ApplicationRecord
  belongs_to :organizer, class_name: "User"
end
```  
  
こうする。  
  
**article.rb**  
```rb:article.rb
class Article < ApplicationRecord
  belongs_to :author, class_name: "User"
end
```  
  
こうする。  
  
するとコントローラ側からは  
  
```rb
contest.organizer #←ユーザ
article.author #←ユーザ
```  
  
こうアクセスできる！マーベラス！  
DDDには向かないと言われるRails(要出典)ですが、まあ概念を少し近づけることはできるのかなと。`article.user`よりは`article.author`の方が多少はドメインモデル的かなと。DDDあんま理解してませんけど。何にせよロールは明確な方がよい。  
  
もちろんDB側も`organizer_id`とか`author_id`とかになるので設計者がここ押さえてないと使えませんけどね。リーダブルなコードはリーダブルな設計から生まれてくるものです。コード書けない人間を設計者にするのはやめてほしい。今年は「設計者が多対多リレーションを知らない」という局面に当たりました。転職を検討しています。  
  
[交差テーブルには関連の意味を表す名前をつけよう - Qiita](https://qiita.com/tkawa/items/dc3e313021f32fd91ca6)のコメントで言及した通り、テーブルそれ自体の命名に役割が含まれているなら上記は不要です。  
  
## 同じテーブルを別条件で接続する  
  
こうすると  
  
**article.rb**  
```rb:article.rb
class Article < ApplicationRecord
  has_one :main_image, -> { where main_image: true }, class_name: "Image"
  accepts_nested_attributes_for :main_image
  has_many :sub_images, -> { where main_image: false }, class_name: "Image"
  accepts_nested_attributes_for :sub_images
end
```  
  
**_form.erb**  
```html:_form.erb
  <div class="field">
    <span>メインイメージ（サムネイル用）</span><br />
    <%= form.fields_for :main_image do |image| %>
      <label class="file-label">
        <i class="fas fa-camera"></i>
        <%= image.file_field :path, required: true, accept: 'image/png,image/gif,image/jpeg' %>
      </label>
    <% end %>
  </div>
  <div class="field">
    <label>サブイメージ（3枚まで指定できます）</label><br />
    <%= form.fields_for :sub_images do |image| %>
      <label class="file-label">
        <i class="fas fa-camera"></i>
        <%= image.file_field :path, accept: 'image/png,image/gif,image/jpeg' %>
      </label>
    <% end %>
  </div>
```  
  
こう書ける！！！  
このwhereのところ、`arel_table`とかも動いたので  
  
**blog.rb**  
```rb:blog.rb
class Blog < ApplicationRecord
  # 予約投稿の一覧
  has_many :received_articles, -> { where Article.arel_table[:publish_date].gt(Time.zone.now) }, class_name: "Article"
end
```  
  
こういうことができます。  
システム上一件しか登録できない（登録時バリデーションで弾く）けど裏では複数件持ってて管理側では複数件表示したいみたいなややこしい設計が存在しても、上記使えば`has_one :active`とかできるので私の嫌いな`where({status: :active}).first`を書かずに済みます。イェーイ。  
  
### scope  
  
```rb
  scope :top_10, -> () {
    group('novels.id').order(Arel.sql('COUNT(craps.id) + COUNT(reviews.rate) * 10')).limit(10)
  }
```  
  
引数渡すならこう  
  
```rb
  scope :top_n, -> (n) {
    group('novels.id').order(Arel.sql('COUNT(craps.id) + COUNT(reviews.rate) * 10')).limit(n)
  }

# 呼び出し
  Novel.includes(:tags).left_joins({:chapters => :craps}, :reviews).top_n(10)
```  
  
## N+1問題  
[【Ruby on Rails】N+1問題ってなんだ？](https://qiita.com/massaaaaan/items/4eb770f20e636f7a1361)  
[ActiveRecordのjoinsとpreloadとincludesとeager_loadの違い](https://qiita.com/k0kubun/items/80c5a5494f53bb88dc58)  
  
N+1に対処しつつjoinしたテーブルのカラムで並べ替えたいとかいうときはどうすればいいんだ？　でしばらくハマったものの、なんのことはない、joinとeager_loadは両立できる  
  
```ruby
Novel.includes(:tags).left_joins({chapters: :craps}, :reviews).top_10
```  
  
```sql
SET NAMES utf8,  @@SESSION.sql_mode = CONCAT(CONCAT(@@sql_mode, ',STRICT_ALL_TABLES'), ',NO_AUTO_VALUE_ON_ZERO'),  @@SESSION.sql_auto_is_null = 0, @@SESSION.wait_timeout = 2147483
SELECT  `novels`.* FROM `novels` LEFT OUTER JOIN `chapters` ON `chapters`.`novel_id` = `novels`.`id` LEFT OUTER JOIN `craps` ON `craps`.`chapter_id` = `chapters`.`id` LEFT OUTER JOIN `reviews` ON `reviews`.`novel_id` = `novels`.`id` GROUP BY novels.id ORDER BY COUNT(craps.id) + COUNT(reviews.rate) * 10 LIMIT 10
SELECT `tags_novels`.* FROM `tags_novels` WHERE `tags_novels`.`novel_id` IN (1, 2, 3, 4)
SELECT `tags`.* FROM `tags` WHERE `tags`.`id` IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```  
  
### N+1問題が置きていないかを監視するgem  
[bullet](https://github.com/flyerhzm/bullet)  
  
`config/development.rb` の `Rails.application.configure` 内に以下を追記  
  
```ruby
  config.after_initialize do
    Bullet.enable = true # Bulletプラグインを有効
    Bullet.alert = true # JavaScriptでの通知
    Bullet.bullet_logger = true # log/bullet.logへの出力
    Bullet.console = true # ブラウザのコンソールログに記録
    Bullet.rails_logger = true # Railsログに出力
  end
```  
  
alertはわかりやすくていいけどちょっと鬱陶しいかもしれない。Railsログとコンソールログに出てれば十分な気がする。  
  
## ほか  
  
 - `3.months` あたりの記法に「**正気か？**」という感想しかわかない  
 - 全体的に検索性が悪い。他言語から入った人間が「Railsではどう書くんだ？」と検索して正解にたどり着くのがあまりにも難しい  
    - %記法とか  
    - |=とか  
    - &.とか  
 - `defined?` がnilを返すのはどういう了見なんですかね……？  
