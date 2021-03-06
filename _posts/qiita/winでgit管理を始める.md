---
description: 'winでgit管理を始める'
tags:
date: '2015-01-29'
---
# winでgit管理を始める
  
Mac:[Macでgit管理を始める](http://qiita.com/perpouh/items/5b8fd0c9ff05ac385a90)  
  
※git自体の説明は[サルでもわかるgit入門](http://www.backlog.jp/git-guide/)様にて。この記事では実際の手順についてのみ解説します。  
Mac版と記事の一部に重複があります。必要のない部分は読み飛ばしてください。  
  
## 手順  
 - 管理ソフトの準備  
 - リポジトリの準備  
	- リポジトリの作成  
 	- ファーストコミット  
 - その後の作業の流れ  
  
## 管理ソフトの準備  
無料ソフト[TortoiseGit](https://code.google.com/p/tortoisegit/)を使います。  
ダウンロード、インストールは適宜。  
  
## リポジトリの準備  
無料でプライベートリポジトリを作成できるbitbucketを使っていきますヽ(´@ω@｀)ﾉ  
githubもいいと思うんですけど、あっちはお金を払わないとプライベートリポジトリが作成できなくて  
ソースコードが全世界に向けて公開されちゃうので、例えば会社とかでソース管理するときはbitbucketだったりします。  
  
金払え。  
  
-----  
  
[bitbucket.org](https://bitbucket.org/)  
  
上記にアカウントを取得します。  
アカウントを取得するとダッシュボードにログイン出来る状態になります。  
![スクリーンショット 2015-01-28 17.03.37.png](/blog/assets/img/9216ace2-2458-3723-f79c-4ca2bdb8eb42.png "スクリーンショット 2015-01-28 17.03.37.png")  
  
  
### リポジトリの作成  
ヘッダーのCreateからリポジトリを作っていきます。  
Nameにプロジェクト名、Descriptionにはプロジェクトの説明を入力します。  
AccessLevelはそのままアクセス制限、ここにチェックを入れると招待された人間のみ（実際の運用ではアクセス権を与えられた社員のみ）このリポジトリを見ることが出来る状態になります。  
Forkingはフォーク権限、フォークはプッシュ権限のないクローンみたいなものだと思っていてください。取り敢えずデフォルトのままでいいです。  
RepositoryTypeはGitに。Issue trackingとWikiは必要ならチェックしてください。今回は説明しません。  
Languageは扱うプログラム言語を選んでください。今回はPHPを選択します。  
  
### 作業環境へclone  
  
リポジトリができたら、左メニューよりCloneを選択します。  
![スクリーンショット 2015-01-28 17.29.38.png](/blog/assets/img/82d7934b-e797-a832-3ee3-b5b65d5621b5.png "スクリーンショット 2015-01-28 17.29.38.png")  
  
  
するとこんなかんじの吹き出しが出てくると思います。ここから選択されている文字列をコピーします。(コマンド部分は使わず、アドレスのみを使用します)  
![スクリーンショット 2015-01-28 17.31.02.png](/blog/assets/img/b85ebb10-6259-d0b5-cc94-533ca718908b.png "スクリーンショット 2015-01-28 17.31.02.png")  
  
  
windows側で、cloneしたいフォルダを開きます。  
xampp上で作業がしたいなら、C:¥xampp¥htdocsを開いてください。  
TortoiseGitが正しく設定されていた場合、フォルダ上で右クリックすると下図のようにGit clone...というメニューが表示されるはずです。  
![01.png](/blog/assets/img/25919122-182e-5f2e-f02a-33411858366f.png "01.png")  
  
これを選択すると、TortoiseGitのダイアログが開きます。  
![02.png](/blog/assets/img/b5874779-ad6b-332a-e4a7-981bb751adc2.png "02.png")  
  
URLに先ほどコピーしたリポジトリURLを入力してください。ディレクトリは初期状態で問題ありません。上記のようになります（今回はマイドキュメント¥2015年事業にcloneしようとしています）。  
OKを選択し、パスの入力などを行ってcloneが完了します。  
  
![04.png](/blog/assets/img/c9377f59-ecc2-0f60-19d2-8509fc676f63.png "04.png")  
  
※Mac版で使ったのと同じリポジトリを再利用したのでファイルがあります。普通はないです。  
  
  
### ファーストコミット  
  
readme.mdがありますのでこれを編集しましょう。普通はないファイルですので、適当に作るなどしてください。  
編集された未コミットファイルは下図のように表示されます。  
![05.png](/blog/assets/img/66102308-a027-ace2-04e2-c9d503bc9c64.png "05.png")  
  
このフォルダ上で右クリックをすると、メニューにGit Commitが表示されています。これを選択します。  
![06.png](/blog/assets/img/e78788ed-b2a5-97cc-05a6-8f48569abbec.png "06.png")  
  
コミットしたいファイルを選択し、コミットメッセージを記載してOKを押します。コミットが完了するとそのままPushするかどうか訊かれますので、プッシュします。  
  
  
プッシュができました！(左NAVIGATION→Sourceから確認できます)  
![スクリーンショット 2015-01-29 11.06.04.png](/blog/assets/img/c284df82-62ca-dab3-c3da-e3af1b7271c1.png "スクリーンショット 2015-01-29 11.06.04.png")  
  
  
## その後の作業の流れ  
  
この後は、今の手順と同じくファイル作成→コミット→プッシュ、ファイル編集→コミット→プッシュ、ファイル削除→コミット→プッシュを繰り返すことになります。  
  
 - コミットは細かく！  
コミットを細かく繰り返すことにより、どうしても動かなくなった、しかもCtrl+Zも利かない！みたいなときにちょっと前のコードに戻すことができます。  
 - プッシュはきちんと動作確認してから！  
プッシュしてしまうとそのソースコードは一緒に作業している同僚のファイルにも影響してしまいます。  
  
以上！ヽ(´@ω@｀)ﾉ  
  
ブランチとかロールバックとか細かい説明はざっくり省いてしまいましたが、これからgitを始める皆様の参考になれば幸いです。  
