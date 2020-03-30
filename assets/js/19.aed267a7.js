(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{265:function(r,e,t){"use strict";t.r(e);var n=t(28),a=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"rubyに手を付ける"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubyに手を付ける"}},[r._v("#")]),r._v(" Rubyに手を付ける")]),r._v(" "),t("p",[r._v("最終更新日:2017年10月25日")]),r._v(" "),t("h1",{attrs:{id:"rubyに手を付ける-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubyに手を付ける-2"}},[r._v("#")]),r._v(" Rubyに手を付ける")]),r._v(" "),t("p",[r._v("Rubyに手を付けます。環境は以下の通り。")]),r._v(" "),t("ul",[t("li",[r._v("Linux6系")]),r._v(" "),t("li",[r._v("Nginx\n"),t("ul",[t("li",[r._v("Unicorn")])])]),r._v(" "),t("li",[r._v("Ruby on Rails")])]),r._v(" "),t("p",[r._v("を目指して作っていきまっしょい。")]),r._v(" "),t("p",[r._v("中の人の右往左往をリアルタイム気味にお届けします。")]),r._v(" "),t("h2",{attrs:{id:"nginxのインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginxのインストール"}},[r._v("#")]),r._v(" nginxのインストール")]),r._v(" "),t("p",[r._v("えんじんえっくす。")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("# rpm -Uvh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm\n# yum install nginx\n\n")])])]),t("p",[r._v("設定ファイルを見たところホームディレクトリは"),t("code",[r._v("/usr/share/nginx/html")]),r._v("であるらしい。気持ち悪い。"),t("code",[r._v("/var/www/html")]),r._v("に書き換えてしまいたい。でもnginx的にはこっちが普通かしら…ぶつぶつ…")]),r._v(" "),t("h2",{attrs:{id:"postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[r._v("#")]),r._v(" PostgreSQL")]),r._v(" "),t("p",[r._v("/tmp/unicorn.sock")]),r._v(" "),t("p",[r._v("バージョンはこのへんから選んだらよろしい→"),t("a",{attrs:{href:"https://yum.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Postgresyumリポジトリ"),t("OutboundLink")],1)]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n# wget https://yum.postgresql.org/9.6/redhat/rhel-6.5-x86_64/pgdg-centos96-9.6-3.noarch.rpm\n# rpm -ivh pgdg-centos96-9.6-3.noarch.rpm\n# yum install postgresql96-server postgresql96-devel postgresql96-contrib\n# service postgresql-9.6 initdb\n# service postgresql-9.6 start\n\n")])])]),t("p",[r._v("どうでもいいけどPostgre、毎回こんなこと(↓)になるのでサービスとデーモンとコマンドのスペルを揃えてほしい……(´・ω・｀)")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n   15  service postgresql start\n   16  service postgresql96 start\n   17  service postgre start\n   18  service psql start\n   19  service postgresql-9.6 start\n\n")])])]),t("h2",{attrs:{id:"ruby"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruby"}},[r._v("#")]),r._v(" Ruby")]),r._v(" "),t("h3",{attrs:{id:"rbenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rbenv"}},[r._v("#")]),r._v(" rbenv")]),r._v(" "),t("p",[r._v("rbenvはしばらく「あーるべんぶ」って読んでたんですけど"),t("a",{attrs:{href:"http://yomikata.org",target:"_blank",rel:"noopener noreferrer"}},[r._v("YOMIKATA - ちょっと読み方決めようぜ"),t("OutboundLink")],1),r._v("で「るびーえんぶ」って読み方を知ったらそっちの方が良いなって思った（感想）"),t("br"),r._v("\nあーるべんぶだとvとb間違えるしね…")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\ngit clone https://github.com/sstephenson/rbenv.git ~/.rbenv\necho 'export PATH=\"$HOME/.rbenv/bin:$PATH\"' >> ~/.bash_profile\necho 'eval \"$(rbenv init -)\"' >> ~/.bash_profile\nsource ~/.bash_profile\ngit clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build\ncd ~/.rbenv/plugins/ruby-build\nsudo ./install.sh\n\n")])])]),t("h3",{attrs:{id:"ruby-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruby-2"}},[r._v("#")]),r._v(" Ruby")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n# rbenv install 2.4.2\n\n")])])]),t("p",[r._v("むっ")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\nDownloading ruby-2.4.2.tar.bz2...\n-> https://cache.ruby-lang.org/pub/ruby/2.4/ruby-2.4.2.tar.bz2\nerror: failed to download ruby-2.4.2.tar.bz2\n\nBUILD FAILED (CentOS release 6.5 (Final) using ruby-build 20170914-5-gf41e847)\n\n")])])]),t("p",[r._v("エラーが出ました。検索したらcurlのバージョンが古いとかだったのでまとめて"),t("code",[r._v("yum update")]),r._v("したら直りました。引数なし。何かが悪かったんだろう（大雑把）")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n# rbenv rehash #refreshかと思ったら違った\n# rbenv global 2.4.2\n\n")])])]),t("h2",{attrs:{id:"rails"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rails"}},[r._v("#")]),r._v(" Rails")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n# gem install rails\n# rails new app\n\n")])])]),t("p",[r._v("こともなし。"),t("br"),r._v("\n※PATH通しておかないと次回ログイン時に泡を吹きますのでパスは通しておきましょう(遺言)")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n# vi config/unicorn.rb\n# bundle exec unicorn_rails -c config/unicorn.rb -E production -D\n\n\n")])])]),t("p",[r._v("unicorn.rbはここを参照(日本語です)："),t("a",{attrs:{href:"https://github.com/herokaijp/devcenter/wiki/Rails-unicorn",target:"_blank",rel:"noopener noreferrer"}},[r._v("Rails Unicorn -github"),t("OutboundLink")],1)]),r._v(" "),t("h3",{attrs:{id:"エラー"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#エラー"}},[r._v("#")]),r._v(" エラー")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n[2017-10-24T06:19:15.050377 #31018]  INFO -- : Refreshing Gem list\nbundler: failed to load command: unicorn_rails (/usr/share/nginx/html/vendor/bundle/ruby/2.4.0/bin/unicorn_rails)\nBundler::GemRequireError: There was an error while trying to load the gem 'uglifier'.\nGem Load Error is: Could not find a JavaScript runtime. See https://github.com/rails/execjs for a list of available runtimes.\nBacktrace for gem load error is:(以下省略)\n\n")])])]),t("p",[r._v("JavaScriptのランタイムって何？と思ったらnodejsぽい。最近のJSはこれだから……")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n# curl -sL https://rpm.nodesource.com/setup_6.x | sudo bash -\n# yum install nodejs\n# bundle exec unicorn_rails -c config/unicorn.rb -E development -D\n\n")])])]),t("p",[r._v("ん、おっけ。"),t("br"),r._v("\n状態の確認は以下の感じ")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("\n[root@localhost html]# ps -ef | grep unicorn | grep -v grep\nroot      8802     1  0 04:56 ?        00:00:01 unicorn_rails master -c config/unicorn.rb -E development -D -l0.0.0.0:8080                                                           \nroot      8811  8802  0 04:56 ?        00:00:00 unicorn_rails worker[0] -c config/unicorn.rb -E development -D -l0.0.0.0:8080                                                        \nroot      8814  8802  0 04:56 ?        00:00:00 unicorn_rails worker[1] -c config/unicorn.rb -E development -D -l0.0.0.0:8080                                                        \nroot      8816  8802  0 04:56 ?        00:00:00 unicorn_rails worker[2] -c config/unicorn.rb -E development -D -l0.0.0.0:8080  \n\n")])])]),t("h2",{attrs:{id:"_403-forbidden？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden？"}},[r._v("#")]),r._v(" 403 forbidden？")]),r._v(" "),t("p",[r._v("これで良かんべと思ってブラウザでドキュメントルート見てみたら403forbidden。ｱｰﾊｲﾊｲchow…と思ったけどnginxのユーザーって何？"),t("br"),r._v("\nってところで調べてたらたどり着いたのがこれ："),t("a",{attrs:{href:"https://teratail.com/questions/22072",target:"_blank",rel:"noopener noreferrer"}},[r._v("nginxを起動後ブラウザ上で403 forbidden - teratail"),t("OutboundLink")],1),r._v("だったんだけど、書き換えたら今度はnginxそのものが立ち上がらなくなってしまった。")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('\n# service nginx start\nStarting nginx: nginx: [warn] conflicting server name "localhost" on 0.0.0.0:80, ignored\n                                                           [  OK  ]\n[root@localhost nginx]# nginx: [emerg] open() "/run/nginx.pid" failed (2: No such file or directory)\n\n')])])]),t("p",[r._v("findコマンドを使ってnginx.pidを探したんだけども見つからず。設定間違いじゃないなーと思って/runを見てみたら、/runごと無かった。"),t("br"),r._v("\nmkdirしたらちゃんとpidファイルを吐けるようになり、サーバーも立ち上がった。")]),r._v(" "),t("p",[t("strong",[r._v("直ってはいない。")])]),r._v(" "),t("p",[r._v("ユーザー設定もした。"),t("br"),r._v("\n参考："),t("a",{attrs:{href:"http://www.uetyi.com/server-const/entry-1337.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("nginxの自動起動の設定と起動ユーザの設定 - Linuxで自宅サーバ構築（新森からの雑記）"),t("OutboundLink")],1),t("br"),r._v("\nまだ直っていない。")]),r._v(" "),t("h3",{attrs:{id:"衝撃の事実。index-htmlが無い。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#衝撃の事実。index-htmlが無い。"}},[r._v("#")]),r._v(" 衝撃の事実。index.htmlが無い。")]),r._v(" "),t("p",[r._v("そりゃそうだ。さっきRails入れたもの。"),t("br"),r._v("\nでもそれなら404じゃないん…？(/public/422.htmlとか見たら普通に見えた)"),t("br"),r._v("\nどのタイミングで直っていたのか、そもそも最初から問題など無かったのか……Rails入れた後の画面表示確認ってどこですんの…？")]),r._v(" "),t("h3",{attrs:{id:"と思ったらうにこーんのポートが8080……。orz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#と思ったらうにこーんのポートが8080……。orz"}},[r._v("#")]),r._v(" と思ったらうにこーんのポートが8080……。orz")]),r._v(" "),t("p",[r._v("apacheの感覚が抜けなくて右往左往してしまう。この他にもログの吐き出しやらGemの書き換えやら何やらほぼ丸一日試行錯誤しています。"),t("strong",[r._v("くっ殺せ。")])]),r._v(" "),t("h2",{attrs:{id:"git登録"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git登録"}},[r._v("#")]),r._v(" git登録")]),r._v(" "),t("p",[t("code",[r._v("git clone")]),r._v("は空のディレクトリにしかできないし"),t("code",[r._v("rails new app")]),r._v("とかどうせえっちゅうんじゃと思ったんですけど、"),t("code",[r._v("rails new app")]),r._v("したアプリケーションには予め"),t("code",[r._v(".git")]),r._v("が含まれていたので"),t("code",[r._v("git remote add origin {url}")]),r._v("で解決しました。"),t("br"),r._v("\n今回はvagrantにgitを立ててvagrant内のWebServerにauto deployしますので毎日がエブリデイ、"),t("code",[r._v("git remote add origin /opt/git/hoge.git")]),r._v("としました。手順が正しい自信はいまいち無い。動けばよかろうなのだ。"),t("br"),r._v("\n取り敢えずホストマシンにcloneしてソースを書いていきます。")]),r._v(" "),t("h3",{attrs:{id:"vagrantのgitにホストマシンから接続する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vagrantのgitにホストマシンから接続する"}},[r._v("#")]),r._v(" Vagrantのgitにホストマシンから接続する")]),r._v(" "),t("p",[r._v("本筋に無関係なんですけどちょいちょい忘れるのでセルフメモ。"),t("br"),r._v(" "),t("code",[r._v("ssh://vagrant@192.168.33.10/opt/git/hoge.git")])]),r._v(" "),t("p",[r._v("まだエラー画面しか見えてないけど取り敢えず設定は終わりー。さあやっと本題だ…")])])}),[],!1,null,null,null);e.default=a.exports}}]);