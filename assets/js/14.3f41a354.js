(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{260:function(e,r,n){"use strict";n.r(r);var a=n(28),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("ヽ(´@ω@｀)ﾉ")]),e._v(" "),n("h2",{attrs:{id:"ログイン機能の作成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ログイン機能の作成"}},[e._v("#")]),e._v(" ログイン機能の作成")]),e._v(" "),n("p",[e._v("RSSから読みたい記事をストックする機能を入れたかったので、ログインを実装します。"),n("br"),e._v("\n参照:"),n("a",{attrs:{href:"http://docs.monaca.mobi/cur/ja/reference/javascript/cloud/user/",target:"_blank",rel:"noopener noreferrer"}},[e._v("monaca公式リファレンス"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"画面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画面"}},[e._v("#")]),e._v(" 画面")]),e._v(" "),n("p",[n("img",{attrs:{src:"/../.vuepress/public/assets/img/7e6cd89d-6678-0e15-7eb9-3e302381c87f.png",alt:"ログイン画面.png",title:"ログイン画面.png"}})]),e._v(" "),n("p",[e._v("ユーザーIDとパスワードを入れて新規登録押せば自動で登録されてログインまでできてしまうザル。")]),e._v(" "),n("h3",{attrs:{id:"ソースコード"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ソースコード"}},[e._v("#")]),e._v(" ソースコード")]),e._v(" "),n("div",{staticClass:"language-login.js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$("#regist").click(function(){\n        var username=$("#username").val();\n        var password=$("#password").val();\n        monaca.cloud.User.validate(username).done(function(result){\n            monaca.cloud.User.register(username, password).done(function(result){\n               console.log("Hello, " + result.user._username);\n               location.href="#Index";\n            }).fail(function(err)\n            {\n               console.log("Err#" + err.code +": " + err.message);\n            });\n        }).fail(function(err){\n            alert("validation failued !!");\n        });\n    });\n\n    $("#login").click(function(){\n        var username=$("#username").val();\n        var password=$("#password").val();\n        monaca.cloud.User.login(username, password).done(function(result){\n           console.log("Hello again, " + result.user._username);\n           location.href="#Index";\n        })\n        .fail(function(err)\n        {\n           console.log("Err#" + err.code +": " + err.message);\n        });\n        \n    }); \n')])])]),n("p",[n("code",[e._v('$("#regist")')]),e._v("と"),n("code",[e._v('$("#login")')]),e._v("がそれぞれ登録ボタン、ログインボタンと対応します。"),n("br"),e._v(" "),n("code",[e._v('$("#username")')]),e._v("と"),n("code",[e._v('$("#password")')]),e._v("はテキストボックスです。"),n("br"),e._v("\nログインができ次第、location.hrefでページ遷移をしています。")]),e._v(" "),n("p",[e._v("ここで私はハマったのですが、どうやら別のhtmlに遷移するとセッションが切れてしまうようで、ログイン状態を維持できなくなりました。"),n("br"),e._v("\n上記事項を避けるために"),n("a",{attrs:{href:"http://jquerymobile.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jQueryMobile"),n("OutboundLink")],1),e._v("を導入し、ひとつのhtmlで複数ページを作成しています。")]),e._v(" "),n("h3",{attrs:{id:"設定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#設定"}},[e._v("#")]),e._v(" 設定")]),e._v(" "),n("p",[e._v("monaca cloud側の設定は画面左メニュー>クラウド>左上歯車マークより「バックエンド設定」>ユーザー認証"),n("br"),e._v("\nユーザー名の最短文字数、パスワードの最短文字数はここから設定します。")]),e._v(" "),n("p",[e._v("KobitoとQiitaで表示違うのなんとかならんのかな(´@ω@｀)")])])}),[],!1,null,null,null);r.default=s.exports}}]);