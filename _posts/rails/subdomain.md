---
description: 'サブドメインでコントローラを振り分ける'
tags:
date: '2020-04-27'
---
# サブドメインでコントローラを振り分ける
https://hogehoge.com/:role/:controller/:action
みたいなURLが嫌になったので
https://role.hogehoge.com/:controller/:action
を目指す。

基本的な参考記事: [Railsでサブドメインに対応させる方法](https://qiita.com/TAKESHI_ONAGA/items/c5fbba776982835f5216)  
でもこのルーティングはまだちょっと不満だったので（コントローラの階層化もしたいしそれぞれのindexも作りたい）以下ちょっとそのあたりを拡充した話になります。

config/environments/development.rb  
※めんどくさかったのでやっていませんが環境変数使うなりなんなりもうちょっといいやり方があると思います

```
# (略)
  config.hosts << "example.com"
  config.hosts << "worker.example.com"
  config.hosts << "admin.example.com"
# (略)
```

routes.rb

```
  constraints subdomain: '' do
    get '/', to: "pages#index"
  end
  constraints subdomain: 'worker' do
    scope module: :worker do # moduleにすることでドメイン後にworkerとか入らずに済む
      get '/', to: "pages#index"
    end
  end
  constraints subdomain: 'admin' do
    scope module: :admin do
      get '/', to: "pages#index"
    end
  end
```

app/controllers/admin/pages_controller.rb

```
class Admin::PagesController < ApplicationController
  layout 'admin' # おまけでレイアウトファイル振り分け
  def index
  end
end 
```

これで http://admin.example.com/:controller/:action ができました！やったね！
