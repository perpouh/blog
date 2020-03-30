＼\お茶の子さいさいささいのさい/／ (引用元:うさぎ強盗には死んでもらう/橘ユマ)  
でも人に説明するのがハイパーめんどくさいのでドキュメント代わり、兼、忘備録。  
  
 - Linux6系  
 - Apatche2.4系  
 - MySQL5.6系  
 - PHP7  
  
を目指して作って行きまっしょい！  
  
#### Apache2.4インストール  
  
```

# cd /etc/yum.repos.d
# wget https://repos.fedorapeople.org/repos/jkaluza/httpd24/epel-httpd24.repo
# yum install --enablerepo=epel-httpd24 httpd24

```  
  
httpd24は入ったけどserviceコマンドで呼び出せなくてめんどうだったので  
  
```
# cd /etc/init.d/
# mv httpd httpd.org
# mv httpd24-httpd httpd
```  
こういう感じの理不尽をやった  
  
#### PHP7インストール  
  
```

# rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
# rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
# yum install --enablerepo=remi,remi-php70 php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt


```  
  
#### MySQL5.6インストール  
  
```

# yum install http://dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm
# yum install mysql-community-devel mysql-community-server


```  
  
#### 息をするのもめんどくさい人向け、コピペで動くチートシート  
  
息をするのもめんどくさい人はこれをコピーしてターミナルに貼り付けたら全部入る（責任は取れない）  
  
```

# Apatche24install
cd /etc/yum.repos.d
wget https://repos.fedorapeople.org/repos/jkaluza/httpd24/epel-httpd24.repo
yum install -y --enablerepo=epel-httpd24 httpd24
cd /etc/init.d/
mv httpd httpd.org
mv httpd24-httpd httpd

# PHP7install
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
yum install -y --enablerepo=remi,remi-php70 php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt

# MySQL5.6install
yum install -y http://dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm
yum install -y mysql-community-devel mysql-community-server

# service
service httpd start
service mysqld start
service iptables stop

# chkconfig
chkconfig httpd on
chkconfig mysqld on
chkconfig iptables off

```  
