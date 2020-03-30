# DockerにnginxとRailsとVueの環境を作る
最終更新日:2019年12月16日

カレンダーに穴が空いていたので穴埋めに推参しました。飛び込み参加&拙い記事になりますがご容赦くださいませ。  
  
## 想定  
  
最近、XDが便利すぎてjQueryでフロント動かすのがしんどくなってきたので、Vue導入するために勉強をはじめました。  
昨今のjavascriptはjavascriptのくせに（※認識が古い）パッケージ管理とかが必要なくらいファイルが増えて面倒なのでDockerで動かすことにしました。昔はtableチカチカさせるだけみたいな使えない子だったのにな君。  
  
![図](/blog/assets/img/a4b60c6b-b624-dbf5-ea03-c3dff924e420.png)  
  
<del>この図必要か？</del>  
  
RailsでAPIを作り、Vueでそれを参照する想定です。  
Railsなら弊社のエンジニアはだいたい書けるし、デザイナーさんもpug書けるしsass書けるし、結構楽に導入できるんと違う？という<del>甘い</del>見積もりによりこの構成にしました。  
  
## ファイル構成  
  
```
/project
  .docker-compose
  server
    Dockerfile
    Gemfile
    Gemfile.lock
    Rakefile
    app ほか
  client
    Dockerfile
  data
    www
```  
  
`/project/data/www`の下にVueのファイルが入ります。Railsのポートを3000番に、Vueを80番に繋ぐ。  
  
この間は地味な作業なので割愛します。APIとVueコンポーネントをしこしこ書いていきます。  
作業中のやらかし: [Docker上のVueからDocker上のswaggerAPIを叩きたい - teratail](https://teratail.com/questions/227363)  
CORSでもない？404ってなんで？！ブラウザでは開けるのに？！となってteratailに行きましたが、ソースにpostって書いてあっただけでした。getに書き直したら普通にCORSが出た。恥ずか死  
  
## CORS発生  
  
そりゃそうだ。ポート違うもの。  
これを回避しようと調査していると、どうやらnginxを入れてプロキシサーバにしてやるといいらしい。  
  
**docker-compose.yml**  
```yaml:docker-compose.yml
  nginx:
    build: ./nginx
    ports:
      - '9000:9000'
    volumes:
      - ./nginx/server.conf:/etc/nginx/nginx.conf
    links:
      - server
      - client
```  
  
```nginx.conf
  server {
    listen 9000;
    server_name localhost;
    location / {
        proxy_pass  http://server:3000;
        proxy_set_header Host localhost;
        add_header Access-Control-Allow-Origin http://localhost;
        add_header Access-Control-Allow-Methods "POST, GET, PUT, PATCH, DELETE, OPTIONS";
        add_header Access-Control-Allow-Headers "Origin, Authorization, Accept";
        add_header Access-Control-Allow-Credentials true;
    }
  }
```  
  
ということで、VueでRailsのAPIからデータを取得して画面表示ができました！<del>やったねたえちゃん！</del>  
  
この後、CSRFで血の泡を吹くのはまた別のお話……（※未解決）  
兎にも角にもセキュリティはクリアしないと業務に導入できないので今後も頑張ります。接続先IPが固定になればそれでいいような気もしているのですが……インフラ知識は（も）無い……  
  
Q.VueCLIを選んだのが悪いのでは？  
A.erb嫌いだからjQueryついでに爆殺したかったんだよ……  
  
## 作業中お世話になりました  
  
[docker-composeを使ってnginx上でVueアプリケーションを動かす](https://qiita.com/akashixi/items/2ebe9404c64a8854b4e5)  
[docker-composeを使ってVue.jsのプロジェクトを作成して、Dockerで動かしてみた](https://qiita.com/tubutubu_mustard/items/ed8c047540015e2d07fc)  
[vue.jsでウィンドウ読み込み時に関数実行したいときの書き方](https://qiita.com/bo-san/items/85d734fd07ca3703b16b)  
[docker上のnginxから、別のコンテナのwebへリバースプロキシさせる](https://qiita.com/74th/items/3545366f5f66eb70ff85)  
[Nginxによるリバースプロキシの設定方法](https://qiita.com/schwarz471/items/9b44adfbec006eab60b0)  
