(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{602:function(t,r,e){"use strict";e.r(r);var a=e(55),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"macでgit管理をはじめる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macでgit管理をはじめる"}},[t._v("#")]),t._v(" macでgit管理をはじめる")]),t._v(" "),e("p",[t._v("win:"),e("a",{attrs:{href:"http://qiita.com/perpouh/items/cfeedab539227ccbc66d",target:"_blank",rel:"noopener noreferrer"}},[t._v("winでgit管理をはじめる"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("※git自体の説明は"),e("a",{attrs:{href:"http://www.backlog.jp/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("サルでもわかるgit入門"),e("OutboundLink")],1),t._v("様にて。この記事では実際の手順についてのみ解説します。")]),t._v(" "),e("h2",{attrs:{id:"手順"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手順"}},[t._v("#")]),t._v(" 手順")]),t._v(" "),e("ul",[e("li",[t._v("管理ソフトの準備")]),t._v(" "),e("li",[t._v("リポジトリの準備\n"),e("ul",[e("li",[t._v("リポジトリの作成")]),t._v(" "),e("li",[t._v("ファーストコミット")])])]),t._v(" "),e("li",[t._v("その後の作業の流れ")])]),t._v(" "),e("h2",{attrs:{id:"管理ソフトの準備"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管理ソフトの準備"}},[t._v("#")]),t._v(" 管理ソフトの準備")]),t._v(" "),e("p",[t._v("無料ソフト"),e("a",{attrs:{href:"https://www.atlassian.com/ja/software/sourcetree/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("SourceTree"),e("OutboundLink")],1),t._v("を使います。"),e("br"),t._v("\nダウンロード、インストールは適宜。")]),t._v(" "),e("h2",{attrs:{id:"リポジトリの準備"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#リポジトリの準備"}},[t._v("#")]),t._v(" リポジトリの準備")]),t._v(" "),e("p",[t._v("無料でプライベートリポジトリを作成できるbitbucketを使っていきますヽ(´@ω@｀)ﾉ"),e("br"),t._v("\ngithubもいいと思うんですけど、あっちはお金を払わないとプライベートリポジトリが作成できなくて"),e("br"),t._v("\nソースコードが全世界に向けて公開されちゃうので、例えば会社とかでソース管理するときはbitbucketだったりします。")]),t._v(" "),e("p",[t._v("金払え。")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("a",{attrs:{href:"https://bitbucket.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bitbucket.org"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("上記にアカウントを取得します。"),e("br"),t._v("\nアカウントを取得するとダッシュボードにログイン出来る状態になります。"),e("br"),t._v(" "),e("img",{attrs:{src:"/blog/assets/img/9216ace2-2458-3723-f79c-4ca2bdb8eb42.png",alt:"スクリーンショット 2015-01-28 17.03.37.png",title:"スクリーンショット 2015-01-28 17.03.37.png"}})]),t._v(" "),e("h3",{attrs:{id:"リポジトリの作成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#リポジトリの作成"}},[t._v("#")]),t._v(" リポジトリの作成")]),t._v(" "),e("p",[t._v("ヘッダーのCreateからリポジトリを作っていきます。"),e("br"),t._v("\nNameにプロジェクト名、Descriptionにはプロジェクトの説明を入力します。"),e("br"),t._v("\nAccessLevelはそのままアクセス制限、ここにチェックを入れると招待された人間のみ（実際の運用ではアクセス権を与えられた社員のみ）このリポジトリを見ることが出来る状態になります。"),e("br"),t._v("\nForkingはフォーク権限、フォークはプッシュ権限のないクローンみたいなものだと思っていてください。取り敢えずデフォルトのままでいいです。"),e("br"),t._v("\nRepositoryTypeはGitに。Issue trackingとWikiは必要ならチェックしてください。今回は説明しません。"),e("br"),t._v("\nLanguageは扱うプログラム言語を選んでください。今回はPHPを選択します。")]),t._v(" "),e("h3",{attrs:{id:"作業環境へclone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作業環境へclone"}},[t._v("#")]),t._v(" 作業環境へclone")]),t._v(" "),e("p",[t._v("リポジトリができたら、左メニューよりCloneを選択します。"),e("br"),t._v(" "),e("img",{attrs:{src:"/blog/assets/img/82d7934b-e797-a832-3ee3-b5b65d5621b5.png",alt:"スクリーンショット 2015-01-28 17.29.38.png",title:"スクリーンショット 2015-01-28 17.29.38.png"}})]),t._v(" "),e("p",[t._v("するとこんなかんじの吹き出しが出てくると思います。ここからClone in SourceTreeを選択します。"),e("br"),t._v(" "),e("img",{attrs:{src:"/blog/assets/img/b85ebb10-6259-d0b5-cc94-533ca718908b.png",alt:"スクリーンショット 2015-01-28 17.31.02.png",title:"スクリーンショット 2015-01-28 17.31.02.png"}})]),t._v(" "),e("p",[t._v("アプリ起動の確認ダイアログが出ますので、アプリケーションの起動を選択してください。"),e("br"),t._v("\nするとSourceTreeが立ち上がり、ダイアログが出ます。"),e("br"),t._v(" "),e("img",{attrs:{src:"/blog/assets/img/81a03612-0fb6-8b6e-dc84-a21e9613731c.png",alt:"スクリーンショット 2015-01-28 17.32.43.png",title:"スクリーンショット 2015-01-28 17.32.43.png"}})]),t._v(" "),e("p",[t._v("保存先のパスは任意のものに書き換えてください。MAMPを使うPHPプロジェクトであれば/Applocations/MAMP/htdocs/sampleとかになると思います。")]),t._v(" "),e("p",[t._v("!!! この時指定する場所は空のディレクトリでなくてはなりません !!!")]),t._v(" "),e("p",[t._v("すでにプロジェクトファイルが存在しても、そのディレクトリにcloneすることはできません。ご注意ください。")]),t._v(" "),e("h3",{attrs:{id:"ファーストコミット"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ファーストコミット"}},[t._v("#")]),t._v(" ファーストコミット")]),t._v(" "),e("p",[t._v("先ほど作成したディレクトリ(/Applications/MAMP/htdocs/sampleとします)に新規ファイルreadme.mdを作成しました。"),e("br"),t._v(" "),e("img",{attrs:{src:"/blog/assets/img/7257155b-cf4d-0a6b-9386-cc7c0ce49784.png",alt:"スクリーンショット 2015-01-28 17.49.21.png",title:"スクリーンショット 2015-01-28 17.49.21.png"}})]),t._v(" "),e("p",[t._v("作業ツリーのファイル→readme.mdにチェックを入れ、上部Commitボタンを押します。コミットメッセージの入力画面が出ますので、first commitとでも打ち込んで(様式美)、コミットボタンを押します。"),e("br"),t._v("\nコミットが終わったらプッシュします。この時、masterブランチにチェックが入っていないとうまくコミットされませんので、正しくチェックを入れてください。")]),t._v(" "),e("p",[t._v("プッシュができました！(左NAVIGATION→Sourceから確認できます)"),e("br"),t._v(" "),e("img",{attrs:{src:"/blog/assets/img/f3e52f76-19f4-9614-61f9-9b3926b4b70a.png",alt:"スクリーンショット 2015-01-28 17.53.04.png",title:"スクリーンショット 2015-01-28 17.53.04.png"}})]),t._v(" "),e("h2",{attrs:{id:"その後の作業の流れ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#その後の作業の流れ"}},[t._v("#")]),t._v(" その後の作業の流れ")]),t._v(" "),e("p",[t._v("この後は、今の手順と同じくファイル作成→コミット→プッシュ、ファイル編集→コミット→プッシュ、ファイル削除→コミット→プッシュを繰り返すことになります。")]),t._v(" "),e("ul",[e("li",[t._v("コミットは細かく！"),e("br"),t._v("\nコミットを細かく繰り返すことにより、どうしても動かなくなった、しかもCtrl+Zも利かない！みたいなときにちょっと前のコードに戻すことができます。")]),t._v(" "),e("li",[t._v("プッシュはきちんと動作確認してから！"),e("br"),t._v("\nプッシュしてしまうとそのソースコードは一緒に作業している同僚のファイルにも影響してしまいます。")])]),t._v(" "),e("p",[t._v("以上、次はwinの話をします。winではtortoise gitを使用しますヽ(´@ω@｀)ﾉ")])])}),[],!1,null,null,null);r.default=s.exports}}]);