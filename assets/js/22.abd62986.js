(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{592:function(a,s,t){"use strict";t.r(s);var e=t(55),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"centos7でlaravel開発を始める"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7でlaravel開発を始める"}},[a._v("#")]),a._v(" CentOS7でLaravel開発を始める")]),a._v(" "),t("p",[a._v("ララベルって聞いたことあるなと思ったらあれですね魔法少女ララベルですね")]),a._v(" "),t("p",[a._v("以下簡単な覚え書きですのでGoogle検索のヒントにでもしてください")]),a._v(" "),t("h2",{attrs:{id:"使ったもの"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使ったもの"}},[a._v("#")]),a._v(" 使ったもの")]),a._v(" "),t("ul",[t("li",[a._v("vagrant")]),a._v(" "),t("li",[a._v("CentOS7")]),a._v(" "),t("li",[a._v("PHP7")]),a._v(" "),t("li",[a._v("Laravel5")])]),a._v(" "),t("p",[a._v("取り敢えずvagrantでCentOS7を立ち上げてPHP7をインストール"),t("br"),a._v("\n　全体的にスーパーユーザーでやっております")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" epel-release\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" php\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --enablerepo"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("remi,remi-php70 php php-devel php-mbstring php-pdo php-gd\n\n")])])]),t("p",[a._v("composerが必要そうだったのでそれも")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sS https://getcomposer.org/installer "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" php\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" composer.phar /usr/local/bin/composer\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" global require "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"laravel/installer=~1.1"')]),a._v("\n\n")])])]),t("p",[a._v("composerを使ってlaravelプロジェクトを作成")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pwd /var/www")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" create-project laravel/laravel sample --prefer-dist\n\n")])])]),t("p",[a._v("取り敢えず今回はsampleという名前でプロジェクトを作成します"),t("br"),a._v("\n　/var/www/sampleというフォルダができるのでそこに移動"),t("br"),a._v("\n　この辺はhttpd.confとか適当に設定します。URLRewriteまわりもさくさくと書いてしまいましょう")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pwd /var/www/sample")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n\n")])])]),t("h2",{attrs:{id:"！！！エラー発生！！！"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#！！！エラー発生！！！"}},[a._v("#")]),a._v(" ！！！エラー発生！！！")]),a._v(" "),t("h3",{attrs:{id:"phpunit-phpunit-3-7-9-requires-ext-dom-the-requested-php-extension-dom-is-missing-from-your-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpunit-phpunit-3-7-9-requires-ext-dom-the-requested-php-extension-dom-is-missing-from-your-system"}},[a._v("#")]),a._v(" phpunit/phpunit 3.7.9 requires ext-dom * -> the requested PHP extension dom is missing from your system.")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://blue-goheimochi.hatenablog.com/entry/2013/07/24/composer%E3%81%A7PHPUnit%E3%81%8C%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84",target:"_blank",rel:"noopener noreferrer"}},[a._v("composerでPHPUnitがインストールできない"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("これ私の方ではまだ解決してないです。php.iniにextensionも書いたのになぜ。"),t("br"),a._v("\n　composer.jsonからエラー行(PHPUnit)だけ取り除いて無理矢理動かしました。"),t("br"),a._v("\n　はい次。")]),a._v(" "),t("h3",{attrs:{id:"ブラウザからindex-phpが表示できない"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ブラウザからindex-phpが表示できない"}},[a._v("#")]),a._v(" ブラウザからindex.phpが表示できない")]),a._v(" "),t("p",[a._v("参考:"),t("a",{attrs:{href:"http://momoiro-tj.hateblo.jp/entry/2016/01/12/221657",target:"_blank",rel:"noopener noreferrer"}},[a._v("laravel5のインストールで、ファイルパーミッションエラー"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("/var/log/httpd/error_log曰く、パーミッションが無いとのことだったのでこれを設定")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pwd /var/www/sample")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" -R "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" bootstrap\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" -R "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" storage\n\n")])])]),t("p",[a._v("まだ動かない。何。"),t("br"),a._v("\n　こういうときの犯人はSELinuxですので(断定)早々に殺しておきましょう")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\nsetenforce "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n\n")])])]),t("p",[a._v("さてやっとApacheエラーでもChromeエラーでもなくララベルらしきエラー画面が見えました。"),t("br"),a._v(" "),t("img",{attrs:{src:"/blog/assets/img/b17eca74-70ee-0a1b-e96c-8203a808070f.png",alt:"スクリーンショット 2016-10-05 17.48.45.png",title:"スクリーンショット 2016-10-05 17.48.45.png"}})]),a._v(" "),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),t("p",[a._v("これは"),t("a",{attrs:{href:"https://github.com/laravel/framework/issues/9080",target:"_blank",rel:"noopener noreferrer"}},[a._v("github"),t("OutboundLink")],1),a._v("に答えがありました。ありがとうgithub愛してるよgithub")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pwd /var/www/sample")]),a._v("\nphp artisan key:generate\nphp artisan config:clear\n\n")])])]),t("p",[t("img",{attrs:{src:"/blog/assets/img/0f4949c3-3bd9-f211-4aff-2809c374d440.png",alt:"kobito.1475657825.794071.png",title:"kobito.1475657825.794071.png"}})]),a._v(" "),t("p",[a._v("やったーララベルのトップが見えました―！")])])}),[],!1,null,null,null);s.default=r.exports}}]);