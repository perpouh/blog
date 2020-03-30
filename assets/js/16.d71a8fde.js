(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{262:function(e,l,o){"use strict";o.r(l);var r=o(28),n=Object(r.a)({},(function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"node-js開発入門-02"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-js開発入門-02"}},[e._v("#")]),e._v(" Node.js開発入門_02")]),e._v(" "),o("p",[e._v("最終更新日:2015年01月30日")]),e._v(" "),o("ul",[o("li",[e._v("nodeのインストール")]),e._v(" "),o("li",[e._v("HelloWorld")]),e._v(" "),o("li",[e._v("ノンブロッキングな処理を書く")])]),e._v(" "),o("h2",{attrs:{id:"nodeのインストール"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodeのインストール"}},[e._v("#")]),e._v(" nodeのインストール")]),e._v(" "),o("p",[e._v("インストールは"),o("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js公式"),o("OutboundLink")],1),e._v("から行ってください。"),o("br"),e._v("\n正しくインストールできると、コマンドラインからnodeコマンドが利用できるようになります。"),o("br"),e._v(" "),o("code",[e._v("node -v")]),e._v("と入力してバージョン情報が返ってくればインストールはOKです。\n※当方Macbookで作業してますのでwinのことはよくわかりません")]),e._v(" "),o("h2",{attrs:{id:"helloworld"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#helloworld"}},[e._v("#")]),e._v(" HelloWorld")]),e._v(" "),o("p",[e._v("早速nodeを書きます。")]),e._v(" "),o("div",{staticClass:"language-hello.js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('console.log("Hello,World!!");  \n')])])]),o("p",[e._v("これだけ。\nあとはコマンドラインから\n"),o("code",[e._v(">node hello.js")]),o("br"),e._v("\nという形で実行してやると、ターミナルにHello,World!!が表示されますヽ(´@ω@｀)ﾉ")]),e._v(" "),o("h2",{attrs:{id:"ノンブロッキングな処理を書く"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ノンブロッキングな処理を書く"}},[e._v("#")]),e._v(" ノンブロッキングな処理を書く")]),e._v(" "),o("p",[e._v("node.jsはスレッドモデル（一つの処理に一つのスレッドを使う）ではなく、イベントループ（一つのスレッドで処理を全て捌く）を用いています。"),o("br"),e._v("\nスレッドモデルとイベントループについての説明は、長くなりそうかつ本旨から外れるので割愛。代表的なところだと、Apacheがスレッドモデルでnginxがイベントループを採用しています。")]),e._v(" "),o("p",[e._v("このイベントループを途中で止めない(forループなどを使うとその処理のために次の動作に移れない(＝ブロックされてしまう))ために、node.jsではコールバック関数を用います。")]),e._v(" "),o("h3",{attrs:{id:"ブロッキングな処理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ブロッキングな処理"}},[e._v("#")]),e._v(" ブロッキングな処理")]),e._v(" "),o("p",[e._v("※日本語がどうとかいう話は取り敢えず今はなしで")]),e._v(" "),o("div",{staticClass:"language-blocking_hello.js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('for(var i=0;i<10;i++){\n  console.log("Hello");\n}\nconsole.log("World");\n')])])]),o("p",[e._v("上記の通りだと、forループが終わるまでWorldが表示されません。これがブロッキングな処理、forループが処理を止めてしまう状態になります。")]),e._v(" "),o("p",[e._v("結果"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nWorld")]),e._v(" "),o("h3",{attrs:{id:"ノンブロッキングな処理"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ノンブロッキングな処理"}},[e._v("#")]),e._v(" ノンブロッキングな処理")]),e._v(" "),o("div",{staticClass:"language-nonblocking_hello.js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('setTimeout(function(){\n   for(var i=0;i<10;i++){\n     console.log("Hello");\n  }\n},0);\nconsole.log("World");\n')])])]),o("p",[e._v("コールバック関数を使って上記の書き方をすると、forループが次の処理を止めずに済みます。")]),e._v(" "),o("p",[e._v("結果"),o("br"),e._v("\nWorld"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello"),o("br"),e._v("\nHello")]),e._v(" "),o("p",[e._v("…なぜ10回Helloを出したかって、Helloの間にWorldが入ってきたら処理順序が見えやすくなるかなと思ったからだったんですが、目論見が外れました。THE無意味。というか認識が間違っているんでしょうか。")]),e._v(" "),o("p",[e._v("今回はここまでヽ(´@ω@｀)ﾉ"),o("br"),e._v("\n作成ファイルはgithubにアップロードしていますので、もしよければ見てみてください。"),o("br"),e._v(" "),o("a",{attrs:{href:"https://github.com/perpouh/node_sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("node_sample - github (架空会社ぱあぷう)"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("しかしドットインストール、一回一回短いのはいいけど早口なのはちょっと聞き取りにくいですね……")])])}),[],!1,null,null,null);l.default=n.exports}}]);