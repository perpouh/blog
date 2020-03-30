# Qiitaの記事をVuepressに移管しました

@mima_ita さんの記事 [Qiitaの記事をGitHubに移行する - Qiita](https://qiita.com/mima_ita/items/ec33706c20f11a95516a) を読んで、もう一歩進めてみたくなったので書きます。  
サルベージ後→GitHub Pages+VuePressで公開するお話です。  
なお目的が元記事とはちょっとズレたところにあるのでPR出していません。

## Vuepressの準備

既にあるので割愛します。公式の手順に従ってください。

## qiita_exporterの準備

[Qiitaの記事をGitHubに移行する](https://qiita.com/mima_ita/items/ec33706c20f11a95516a)を参考に行ってください。  
アクセストークン取得の際は `read_qiita` と `write_qiita` のふたつにチェックを入れました。

あと、元のコードのままだと私の環境では動かなかったので、ファイル先頭に

```python
# -*- coding: utf-8 -*-
# %%
```

を入れました。このあたりって環境によるのかしらん？

## 画像ファイル保存先の変更

画像は `image` ではなく `.vuepress/public/assets/img` に保存したいのでパスを書き換えます。  
表示は `/blog/assets/img/` になります(vuepressの設定にもよる)  
あんまりハードコードしたくない気はするんですけど、何回も使う種類のスクリプトじゃないし別にいいかあと思ってガリガリ書いています。

```diff
    if not os.path.exists(dst):
        os.mkdir(dst)
-   if not os.path.exists(dst + '/image'):
-       os.mkdir(dst + '/image')
```

```diff
def fix_image(dst_folder, line):
    """Qiitaのサーバーの画像ファイルから自分のリポジトリのファイルを表示するように修正する."""
    images = re.findall(r'https://qiita-image-store.+?\.(?:png|gif|jpeg|jpg)', line)
    if not images:
        return line
    for url in images:
        name = url.split("/")[-1]
-        download(url, dst_folder + '/image/' + name)
+        download(url, dst_folder + '/../.vuepress/public/assets/img/' + name)
        ix = line.find(url)

-        line = line.replace(url, '/image/' + name)
+        line = line.replace(url, '/blog/assets/img/' + name)
    return line
```

タイトルと日付を本文に含めたかったので以下を追加。

```diff
    for i in items:
        text = fix_markdown(github_url, dst, i['body'], dict_title)
        with open(dst + '/' + i['title'] + '.md', 'w', encoding='utf-8') as md_file:
            md_file.write("#" + i['title'] + "\n")
+           md_file.write("最終更新日:" + datetime.strptime(i['updated_at'], '%Y-%m-%dT%H:%M:%S+09:00').strftime('%Y年%m月%d日') + "\n\n")
+           md_file.write(text)
```

ファイルが取れたのでここで一旦ビルドしてみて、大丈夫そうだということを確認しました。  
URLが日本語なのだけちょっと気に食わないけどまあ、気にしない方向で。この先なんか不具合があったら直しましょう。

## サイドバーにリンクを作成する

記事への動線が無いのでリンクを作ります。  
本当はコマンド一個でぺろっとやりたいけどまあこの程度のコピペは許容としますか……

```python
import os
if __name__ == '__main__':
  filelist = os.listdir('../blog/qiita')
  for item in filelist:
    # 末尾3文字(.md)を取り除く
    print("['qiita/"+item[-4::-1][-1::-1]+"', '"+item[-4::-1][-1::-1]+"']")
```
こんなのが出ます。
```
['qiita/macでgit管理をはじめる', 'macでgit管理をはじめる'],
...
```

.DS_Storeまで入ってきてしまったのでそれは手作業で取り除きました。  
これを `.vuepress/config.js` にコピペします。

## Qiitaに引っ越し記事を投稿する

しようと思ったんですけど、小心者なのでAPI絡みで失敗するのが怖すぎて（特に更新系は……）胃が痛くなったのでやめました。そのうち手動で書くかもしれません。  
何しろめちゃくちゃにメンタルが弱いんだ……