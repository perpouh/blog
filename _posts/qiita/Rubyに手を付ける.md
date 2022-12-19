---
description: 'Rubyに手を付ける'
tags:
date: '2017-10-25'
---
# Rubyに手を付ける
# Rubyに手を付ける  
  
Rubyに手を付けます。環境は以下の通り。  
  
 - Linux6系  
 - Nginx  
 	- Unicorn  
 - Ruby on Rails  
  
 を目指して作っていきまっしょい。  
   
中の人の右往左往をリアルタイム気味にお届けします。  
  
## nginxのインストール  
  
えんじんえっくす。  
  
```
# rpm -Uvh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm
# yum install nginx

```  
  
設定ファイルを見たところホームディレクトリは`/usr/share/nginx/html`であるらしい。気持ち悪い。`/var/www/html`に書き換えてしまいたい。でもnginx的にはこっちが普通かしら…ぶつぶつ…  
  
## PostgreSQL  
/tmp/unicorn.sock  
  
バージョンはこのへんから選んだらよろしい→[Postgresyumリポジトリ](https://yum.postgresql.org/)  
  
```

# wget https://yum.postgresql.org/9.6/redhat/rhel-6.5-x86_64/pgdg-centos96-9.6-3.noarch.rpm
# rpm -ivh pgdg-centos96-9.6-3.noarch.rpm
# yum install postgresql96-server postgresql96-devel postgresql96-contrib
# service postgresql-9.6 initdb
# service postgresql-9.6 start

```  
  
どうでもいいけどPostgre、毎回こんなこと(↓)になるのでサービスとデーモンとコマンドのスペルを揃えてほしい……(´・ω・｀)  
  
```

   15  service postgresql start
   16  service postgresql96 start
   17  service postgre start
   18  service psql start
   19  service postgresql-9.6 start

```  
  
## Ruby  
  
### rbenv  
  
rbenvはしばらく「あーるべんぶ」って読んでたんですけど[YOMIKATA - ちょっと読み方決めようぜ](http://yomikata.org)で「るびーえんぶ」って読み方を知ったらそっちの方が良いなって思った（感想）  
あーるべんぶだとvとb間違えるしね…  
  
```

git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
source ~/.bash_profile
git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
cd ~/.rbenv/plugins/ruby-build
sudo ./install.sh

```  
  
### Ruby  
  
```

# rbenv install 2.4.2

```  
  
むっ  
  
```

Downloading ruby-2.4.2.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.4/ruby-2.4.2.tar.bz2
error: failed to download ruby-2.4.2.tar.bz2

BUILD FAILED (CentOS release 6.5 (Final) using ruby-build 20170914-5-gf41e847)

```  
  
エラーが出ました。検索したらcurlのバージョンが古いとかだったのでまとめて`yum update`したら直りました。引数なし。何かが悪かったんだろう（大雑把）  
  
```

# rbenv rehash #refreshかと思ったら違った
# rbenv global 2.4.2

```  
  
## Rails  
  
```

# gem install rails
# rails new app

```  
  
こともなし。  
※PATH通しておかないと次回ログイン時に泡を吹きますのでパスは通しておきましょう(遺言)  
  
```

# vi config/unicorn.rb
# bundle exec unicorn_rails -c config/unicorn.rb -E production -D


```  
  
unicorn.rbはここを参照(日本語です)：[Rails Unicorn -github](https://github.com/herokaijp/devcenter/wiki/Rails-unicorn)  
  
### エラー  
  
```

[2017-10-24T06:19:15.050377 #31018]  INFO -- : Refreshing Gem list
bundler: failed to load command: unicorn_rails (/usr/share/nginx/html/vendor/bundle/ruby/2.4.0/bin/unicorn_rails)
Bundler::GemRequireError: There was an error while trying to load the gem 'uglifier'.
Gem Load Error is: Could not find a JavaScript runtime. See https://github.com/rails/execjs for a list of available runtimes.
Backtrace for gem load error is:(以下省略)

```  
  
JavaScriptのランタイムって何？と思ったらnodejsぽい。最近のJSはこれだから……  
  
  
  
```

# curl -sL https://rpm.nodesource.com/setup_6.x | sudo bash -
# yum install nodejs
# bundle exec unicorn_rails -c config/unicorn.rb -E development -D

```  
  
ん、おっけ。  
状態の確認は以下の感じ  
  
```

[root@localhost html]# ps -ef | grep unicorn | grep -v grep
root      8802     1  0 04:56 ?        00:00:01 unicorn_rails master -c config/unicorn.rb -E development -D -l0.0.0.0:8080                                                           
root      8811  8802  0 04:56 ?        00:00:00 unicorn_rails worker[0] -c config/unicorn.rb -E development -D -l0.0.0.0:8080                                                        
root      8814  8802  0 04:56 ?        00:00:00 unicorn_rails worker[1] -c config/unicorn.rb -E development -D -l0.0.0.0:8080                                                        
root      8816  8802  0 04:56 ?        00:00:00 unicorn_rails worker[2] -c config/unicorn.rb -E development -D -l0.0.0.0:8080  

```  
  
## 403 forbidden？  
  
これで良かんべと思ってブラウザでドキュメントルート見てみたら403forbidden。ｱｰﾊｲﾊｲchow…と思ったけどnginxのユーザーって何？  
ってところで調べてたらたどり着いたのがこれ：[nginxを起動後ブラウザ上で403 forbidden - teratail](https://teratail.com/questions/22072)だったんだけど、書き換えたら今度はnginxそのものが立ち上がらなくなってしまった。  
  
```

# service nginx start
Starting nginx: nginx: [warn] conflicting server name "localhost" on 0.0.0.0:80, ignored
                                                           [  OK  ]
[root@localhost nginx]# nginx: [emerg] open() "/run/nginx.pid" failed (2: No such file or directory)

```  
  
findコマンドを使ってnginx.pidを探したんだけども見つからず。設定間違いじゃないなーと思って/runを見てみたら、/runごと無かった。  
mkdirしたらちゃんとpidファイルを吐けるようになり、サーバーも立ち上がった。  
  
**直ってはいない。**  
  
ユーザー設定もした。  
参考：[nginxの自動起動の設定と起動ユーザの設定 - Linuxで自宅サーバ構築（新森からの雑記）](http://www.uetyi.com/server-const/entry-1337.html)  
まだ直っていない。  
  
### 衝撃の事実。index.htmlが無い。  
  
そりゃそうだ。さっきRails入れたもの。  
でもそれなら404じゃないん…？(/public/422.htmlとか見たら普通に見えた)  
どのタイミングで直っていたのか、そもそも最初から問題など無かったのか……Rails入れた後の画面表示確認ってどこですんの…？  
  
### と思ったらうにこーんのポートが8080……。orz  
apacheの感覚が抜けなくて右往左往してしまう。この他にもログの吐き出しやらGemの書き換えやら何やらほぼ丸一日試行錯誤しています。**くっ殺せ。**  
  
## git登録  
  
`git clone`は空のディレクトリにしかできないし`rails new app`とかどうせえっちゅうんじゃと思ったんですけど、`rails new app`したアプリケーションには予め`.git`が含まれていたので`git remote add origin {url}`で解決しました。  
今回はvagrantにgitを立ててvagrant内のWebServerにauto deployしますので毎日がエブリデイ、`git remote add origin /opt/git/hoge.git`としました。手順が正しい自信はいまいち無い。動けばよかろうなのだ。  
取り敢えずホストマシンにcloneしてソースを書いていきます。  
  
### Vagrantのgitにホストマシンから接続する  
  
本筋に無関係なんですけどちょいちょい忘れるのでセルフメモ。  
`ssh://vagrant@192.168.33.10/opt/git/hoge.git`  
  
まだエラー画面しか見えてないけど取り敢えず設定は終わりー。さあやっと本題だ…  
