(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{281:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://perpouh.github.io/blog//qiita/%E3%83%A9%E3%82%B9%E3%83%9C%E3%82%B9%E7%B3%BB%E5%BE%8C%E8%BC%A9%E3%83%92%E3%83%AD%E3%82%A4%E3%83%B3AI%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%83%9C%E3%83%83%E3%83%88%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%9F%E3%81%84%E3%83%BBPython%E3%81%AE%E5%9F%BA%E7%A4%8E%E2%91%A3.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("前回"),a("OutboundLink")],1),t._v("の続きから行きます。"),a("br"),t._v("\nキングプロテアちゃんは土方さんが倒してくれました。出るんだな1ターン200万ダメージ……")]),t._v(" "),a("h2",{attrs:{id:"名前空間とスコープ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名前空間とスコープ"}},[t._v("#")]),t._v(" 名前空間とスコープ")]),t._v(" "),a("p",[t._v("Pythonにも名前空間というものがあります。が、ちょっと読んだ感じ特殊です。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fluit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orange"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" def test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fluit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" test1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norange\n")])])]),a("p",[t._v("はい。"),a("br"),t._v("\nで、")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" def test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   fluit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strawberry"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fluit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" test2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstrawberry\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fluit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norange\n")])])]),a("p",[t._v("はい。この時点でちょっと「おや？」となりました。グローバル変数にアクセスできてるのかできてないのかどっち？という感じになります。"),a("br"),t._v("\nそんでこう。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fluit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orange"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" def test3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fluit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("fluit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strawberry"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fluit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" test3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nTraceback "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),t._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  File "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<stdin>"')]),t._v(", line "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" test3\nUnboundLocalError: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" variable "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fluit'")]),t._v(" referenced before assignment\n")])])]),a("p",[t._v("ええ……？"),a("br"),t._v("\nと思ったのですが、これを読み解くには以下の情報が必要です。")]),t._v(" "),a("ul",[a("li",[t._v("メソッドはグローバル変数を参照できます(test1)。")]),t._v(" "),a("li",[t._v("メソッドはグローバル変数を上書きできません(test2)。")]),t._v(" "),a("li",[t._v("メソッドはグローバル変数と同名のローカル変数を持つことができます(test2)。")])]),t._v(" "),a("p",[t._v("ポイントはtest1の時点で、グローバル変数を暗黙的に呼んでいるというところです。"),a("br"),t._v("\ntest3についても、メソッド一行目で暗黙的にグローバルのfluit変数が読み込まれています。"),a("br"),t._v("\nで、なぜか2行目でもグローバルの方を書き換えに行ってエラーが発生するということ　らしい　です（あやふや）。")]),t._v(" "),a("p",[t._v("できないならローカル変数作ったらええやんけと思うんですが、まあグローバル変数にアクセスするときは "),a("code",[t._v("global")]),t._v(" つけようねということで収めるのがいいっぽい。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fluit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orange"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" def test3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   global fluit\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fluit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("fluit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strawberry"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fluit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" test3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\norange\nstrawberry\n")])])]),a("p",[t._v("ちょっとこの宣言（メソッド一行目）気に食わないけど、そもそもグローバル変数とローカル変数で名前がかぶるのがバッドプラクティスっぽいのでそのへんはアレでアレしましょう。んーでもなーthisとかselfに慣れちゃってるのでキモいっちゃキモい……。")]),t._v(" "),a("h2",{attrs:{id:"名前の中の-と"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名前の中の-と"}},[t._v("#")]),t._v(" 名前の中の_と__")]),t._v(" "),a("blockquote",[a("p",[t._v("先頭と末尾が2個のアンダースコアになっている名前は、Pythonが使う変数として予約されている。（中略）このパターンが選ばれたのは、アプリケーションデベロッパーが自分の変数のためにこのような名前を選ぶことはまずないだろうと思われたからだ。")])]),t._v(" "),a("p",[t._v("どうかな……（感想）")]),t._v(" "),a("p",[t._v("以前"),a("a",{attrs:{href:"https://perpouh.github.io/blog//qiita/%E3%83%A9%E3%82%B9%E3%83%9C%E3%82%B9%E7%B3%BB%E5%BE%8C%E8%BC%A9%E3%83%92%E3%83%AD%E3%82%A4%E3%83%B3AI%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%E3%83%9C%E3%83%83%E3%83%88%E3%82%92%E4%BD%9C%E3%82%8A%E3%81%9F%E3%81%84%E3%83%BBPython%E3%81%AE%E5%9F%BA%E7%A4%8E%E2%91%A2.md#%E4%B8%80%E4%BA%BA%E5%89%8D%E3%81%AE%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE%E9%96%A2%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("サンプルでanswerというメソッドを扱った時"),a("OutboundLink")],1),t._v("、実はdocstringを書き込んでいました。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("answer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n  これO'Railly本のサンプルそのままなんですけど名前がanswerで答えが42なのわらう。\n  銀河ヒッチハイクガイドだ\n  '''")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("これを前提に"),a("code",[t._v("answer.__doc__")]),t._v("を出力してやると、以下のようになります。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" answer.__doc__\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("  これO'Railly本のサンプルそのままなんですけど名前がanswerで答えが42なのわらう。"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("  銀河ヒッチハイクガイドだ"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('  "')]),t._v("\n")])])]),a("p",[t._v("これどうなんだろうな、エラーログ出力くらいにしか使わない気がするのだけど。")]),t._v(" "),a("h2",{attrs:{id:"エラー処理とtry、except"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#エラー処理とtry、except"}},[t._v("#")]),t._v(" エラー処理とtry、except")]),t._v(" "),a("blockquote",[a("p",[t._v("するか、しないかだ。お試しはない。  ――Yoda")])]),t._v(" "),a("p",[t._v("Yodaってアレかしらスターウォーズ？　見ていないのでわからないですけど。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("try:\n  code\nexcept Exception as name:\n  code\n")])])]),a("p",[t._v("の形式を取ります。べつだん奇矯でもないですね。"),a("br"),t._v("\n組み込み例外の一覧はドキュメントを見るのが早そう："),a("a",{attrs:{href:"https://docs.python.org/ja/3/library/exceptions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PythonDoc"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"独自例外クラス"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独自例外クラス"}},[t._v("#")]),t._v(" 独自例外クラス")]),t._v(" "),a("p",[t._v("Pythonでももちろん独自例外を実装することができます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class OriginalException(Exception):\n  pass\n")])])]),a("p",[t._v("で、あとは")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("raise OriginalException(引数)\n")])])]),a("p",[t._v("するだけ。クラス定義に括弧があるのは珍しいですね。括弧の中が親クラスということらしいです。"),a("br"),t._v("\nカンマで区切って複数指定することで多重継承もできるらしいですが、多重継承じたいにあんまり馴染みがないのでどうだろうか。Swiftとかも書くので慣れた方がいいのだろうとは思います。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://qiita.com/sey323/items/0d3217601b10708819ee",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pythonの多重継承の際の初期化とメゾットについて - Qiita"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("まあこのへんはおいおいやっていきましょう。")]),t._v(" "),a("p",[t._v("で、次はNumPyに進む予定でしたが、ちらっと読んでみたところ、これ線形代数を先にやった方がいいのでは？となったので線形代数に行きます。私の数学の知識は数ⅡBで止まっています（微積とベクトルがギリ）。大丈夫だろうか。")])])}),[],!1,null,null,null);s.default=r.exports}}]);