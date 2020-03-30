(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{254:function(t,e,p){"use strict";p.r(e);var a=p(28),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,p=t._self._c||e;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h1",{attrs:{id:"apatche2-4-mysql5-6-php7をcentos6にインストールする"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#apatche2-4-mysql5-6-php7をcentos6にインストールする"}},[t._v("#")]),t._v(" Apatche2.4+MySQL5.6+PHP7をCentOS6にインストールする")]),t._v(" "),p("p",[t._v("最終更新日:2017年10月24日")]),t._v(" "),p("p",[t._v("＼\\お茶の子さいさいささいのさい/／ (引用元:うさぎ強盗には死んでもらう/橘ユマ)"),p("br"),t._v("\nでも人に説明するのがハイパーめんどくさいのでドキュメント代わり、兼、忘備録。")]),t._v(" "),p("ul",[p("li",[t._v("Linux6系")]),t._v(" "),p("li",[t._v("Apatche2.4系")]),t._v(" "),p("li",[t._v("MySQL5.6系")]),t._v(" "),p("li",[t._v("PHP7")])]),t._v(" "),p("p",[t._v("を目指して作って行きまっしょい！")]),t._v(" "),p("h4",{attrs:{id:"apache2-4インストール"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#apache2-4インストール"}},[t._v("#")]),t._v(" Apache2.4インストール")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("\n# cd /etc/yum.repos.d\n# wget https://repos.fedorapeople.org/repos/jkaluza/httpd24/epel-httpd24.repo\n# yum install --enablerepo=epel-httpd24 httpd24\n\n")])])]),p("p",[t._v("httpd24は入ったけどserviceコマンドで呼び出せなくてめんどうだったので")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("# cd /etc/init.d/\n# mv httpd httpd.org\n# mv httpd24-httpd httpd\n")])])]),p("p",[t._v("こういう感じの理不尽をやった")]),t._v(" "),p("h4",{attrs:{id:"php7インストール"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#php7インストール"}},[t._v("#")]),t._v(" PHP7インストール")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("\n# rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm\n# rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm\n# yum install --enablerepo=remi,remi-php70 php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt\n\n\n")])])]),p("h4",{attrs:{id:"mysql5-6インストール"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#mysql5-6インストール"}},[t._v("#")]),t._v(" MySQL5.6インストール")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("\n# yum install http://dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm\n# yum install mysql-community-devel mysql-community-server\n\n\n")])])]),p("h4",{attrs:{id:"息をするのもめんどくさい人向け、コピペで動くチートシート"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#息をするのもめんどくさい人向け、コピペで動くチートシート"}},[t._v("#")]),t._v(" 息をするのもめんどくさい人向け、コピペで動くチートシート")]),t._v(" "),p("p",[t._v("息をするのもめんどくさい人はこれをコピーしてターミナルに貼り付けたら全部入る（責任は取れない）")]),t._v(" "),p("div",{staticClass:"language- extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[t._v("\n# Apatche24install\ncd /etc/yum.repos.d\nwget https://repos.fedorapeople.org/repos/jkaluza/httpd24/epel-httpd24.repo\nyum install -y --enablerepo=epel-httpd24 httpd24\ncd /etc/init.d/\nmv httpd httpd.org\nmv httpd24-httpd httpd\n\n# PHP7install\nrpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm\nrpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm\nyum install -y --enablerepo=remi,remi-php70 php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt\n\n# MySQL5.6install\nyum install -y http://dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm\nyum install -y mysql-community-devel mysql-community-server\n\n# service\nservice httpd start\nservice mysqld start\nservice iptables stop\n\n# chkconfig\nchkconfig httpd on\nchkconfig mysqld on\nchkconfig iptables off\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);