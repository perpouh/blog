(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{602:function(t,e,n){"use strict";n.r(e);var a=n(55),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"monacaアプリからajax通信ができなくてハマった！対処法まとめ"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monacaアプリからajax通信ができなくてハマった！対処法まとめ"}},[t._v("#")]),t._v(" monacaアプリからajax通信ができなくてハマった！対処法まとめ")]),t._v(" "),n("p",[t._v("SEOの記事読んだあとなのでタイトルが胡散臭くなりました")]),t._v(" "),n("h2",{attrs:{id:"状況"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#状況"}},[t._v("#")]),t._v(" 状況")]),t._v(" "),n("div",{staticClass:"language-script.js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n$(function(){\n\t\t$.ajax({\n\t\t\t\ttype:"post",\n\t\t\t\turl:"http://VPSドメイン/driver.json",\n\t\t\t\tdata:{\n\t\t\t\t\t// パラメータ\n\t\t\t\t},\n\t\t\t\tdataType:"jsonp",\n\t\t\t\tsuccess:function(data){\n\t\t\t\t\tconsole.log("succeed");\n\t\t\t\t},error : function(XMLHttpRequest, textStatus, errorThrown) {\n\t\t\t\t\tconsole.log("XMLHttpRequest : " + XMLHttpRequest.status);\n\t\t\t\t\tconsole.log("textStatus : " + textStatus);\n\t\t\t\t\tconsole.log("errorThrown : " + errorThrown.message);\n\t\t\t\t}\n\t\t});\n}\n\n')])])]),n("p",[t._v("はじめはいつも通りAccess-Control-Allow-Originに引っかかったのでｱｰﾊｲﾊｲって思って下記をサーバー側に追加。")]),t._v(" "),n("div",{staticClass:"language-.htaccess extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('Header append Access-Control-Allow-Origin: *\nHeader set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"\n')])])]),n("p",[t._v("これでAndroidは通った。しかしiPhoneが通らない。"),n("br"),t._v("\nエラーは以下のとおり。")]),t._v(" "),n("p",[n("img",{attrs:{src:"/blog/assets/img/9264b1c7-6c29-6784-55e0-a7eb7d6cb2b9.jpeg",alt:"20150531121419.jpg",title:"20150531121419.jpg"}}),n("br"),t._v("\n※220は別件なのでおかまいなく")]),t._v(" "),n("p",[t._v("412番エラー。Precondition Failed(前提条件失敗)。なんじゃいそりゃあ、と思ったんですが、Google先生に尋ねたところ")]),t._v(" "),n("blockquote",[n("p",[t._v("If-Unmodified-Since(クライアントがもっているキャッシュの更新確認)"),n("br"),t._v("\nクライアントがもっているキャッシュ日時がサーバの最終更新日時よりも新しい場合")])]),t._v(" "),n("blockquote",[n("p",[t._v("If-Match(ブラウザがもっているETag値確認)"),n("br"),t._v("\nクライアントがもっているETag値に一致するリソースがサーバに存在しなかった場合")])]),t._v(" "),n("blockquote",[n("p",[t._v("If-None-Match(ブラウザがもっているETag値確認)"),n("br"),t._v("\nクライアントからのリクエストメソッドが「GET」または「HEAD」以外の場合")])]),t._v(" "),n("p",[t._v("とのことだったので、キャッシュ塞げばなんとかなるろーかと判断。")]),t._v(" "),n("h2",{attrs:{id:"対処"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#対処"}},[t._v("#")]),t._v(" 対処")]),t._v(" "),n("p",[t._v("ajaxで対処した。")]),t._v(" "),n("div",{staticClass:"language-script.js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\t\t$.ajax({\n\t\t\t\ttype:"post",\n\t\t\t\turl:"http://VPSドメイン/eventList.json",\n\t\t\t\tdata:{\n\t\t\t\t\t// パラメータ\n\t\t\t\t},\n\t\t\t\tasync : false,\n\t\t\t\tcache : true,\n\t\t\t\tbeforeSend : function(xhr) {\n\t\t\t\t\txhr.setRequestHeader("If-Modified-Since",\n\t\t\t\t\t"Thu, 01 Jun 1970 00:00:00 GMT");\n\t\t\t\t},\n\t\t\t\tdataType:"jsonp",\n\t\t\t\tsuccess:function(data){\n\t\t\t\t\tconsole.log("succeed");\n\t\t\t\t},\n\t\t\t\terror:function(error){\n\t\t\t\t\tconsole.log("error");\n\t\t\t\t}\n\t\t});\n')])])]),n("p",[t._v("これの他、urlの末尾にGETパラメータとしてDate.now()を入れてもうまくいった。")])])}),[],!1,null,null,null);e.default=s.exports}}]);