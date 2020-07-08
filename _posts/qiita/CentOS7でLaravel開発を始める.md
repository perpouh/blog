---
description: 'CentOS7でLaravel開発を始める'
tags:
date: '2016-10-05'
---
# CentOS7でLaravel開発を始める
  
　ララベルって聞いたことあるなと思ったらあれですね魔法少女ララベルですね  
  
　以下簡単な覚え書きですのでGoogle検索のヒントにでもしてください  
  
## 使ったもの  
 - vagrant  
 - CentOS7  
 - PHP7  
 - Laravel5  
  
　取り敢えずvagrantでCentOS7を立ち上げてPHP7をインストール  
　全体的にスーパーユーザーでやっております  
  
``` bash
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
rpm -qa | grep php
yum install --enablerepo=remi,remi-php70 php php-devel php-mbstring php-pdo php-gd

```  
  
　composerが必要そうだったのでそれも  
  
``` bash

curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
composer global require "laravel/installer=~1.1"

```  
  
　composerを使ってlaravelプロジェクトを作成  
  
``` bash

# pwd /var/www
composer create-project laravel/laravel sample --prefer-dist

```  
  
　取り敢えず今回はsampleという名前でプロジェクトを作成します  
　/var/www/sampleというフォルダができるのでそこに移動  
　この辺はhttpd.confとか適当に設定します。URLRewriteまわりもさくさくと書いてしまいましょう  
  
``` bash

# pwd /var/www/sample
composer install

```  
  
## ！！！エラー発生！！！  
  
### phpunit/phpunit 3.7.9 requires ext-dom * -> the requested PHP extension dom is missing from your system.  
[composerでPHPUnitがインストールできない](http://blue-goheimochi.hatenablog.com/entry/2013/07/24/composer%E3%81%A7PHPUnit%E3%81%8C%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84)  
  
　これ私の方ではまだ解決してないです。php.iniにextensionも書いたのになぜ。  
　composer.jsonからエラー行(PHPUnit)だけ取り除いて無理矢理動かしました。  
　はい次。  
  
### ブラウザからindex.phpが表示できない  
  
参考:[laravel5のインストールで、ファイルパーミッションエラー](http://momoiro-tj.hateblo.jp/entry/2016/01/12/221657)  
  
　/var/log/httpd/error_log曰く、パーミッションが無いとのことだったのでこれを設定  
  
``` bash

# pwd /var/www/sample
chmod -R 777 bootstrap
chmod -R 777 storage

```  
  
　まだ動かない。何。  
　こういうときの犯人はSELinuxですので(断定)早々に殺しておきましょう  
  
``` bash

setenforce 0

```  
  
　さてやっとApacheエラーでもChromeエラーでもなくララベルらしきエラー画面が見えました。  
![スクリーンショット 2016-10-05 17.48.45.png](/blog/assets/img/b17eca74-70ee-0a1b-e96c-8203a808070f.png "スクリーンショット 2016-10-05 17.48.45.png")  
  
###   
  
　これは[github](https://github.com/laravel/framework/issues/9080)に答えがありました。ありがとうgithub愛してるよgithub  
  
``` bash

# pwd /var/www/sample
php artisan key:generate
php artisan config:clear

```  
  
![kobito.1475657825.794071.png](/blog/assets/img/0f4949c3-3bd9-f211-4aff-2809c374d440.png "kobito.1475657825.794071.png")  
  
　やったーララベルのトップが見えました―！  
