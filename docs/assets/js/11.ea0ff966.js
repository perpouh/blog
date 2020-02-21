(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"readme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[t._v("#")]),t._v(" README")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h",target:"_blank",rel:"noopener noreferrer"}},[t._v("9 Projects you can do to become a Frontend Master in 2020 - Medium"),s("OutboundLink")],1),t._v("\nに触発されて"),s("a",{attrs:{href:"https://www.sitepoint.com/pusher-vue-real-time-chat-app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("チャットアプリ"),s("OutboundLink")],1),t._v("を作りました。"),s("br"),t._v("\nリポジトリはこちら:"),s("br"),t._v(" "),s("link-card",{attrs:{url:"https://github.com/perpouh/chat-app-vue",siteName:"github.com",thumbnail:"https://avatars0.githubusercontent.com/u/8610298?s=400&v=4",title:"perpouh/chat-app-vue",description:"Build a Real-time Chat App with Pusher and Vue.js"}})],1),t._v(" "),s("p",[t._v("大枠は上記記事通りなので割愛するとして、以下やってみた感想とわからなかったところの調査まとめ。")]),t._v(" "),s("h2",{attrs:{id:"cssをjavascriptから読み込む"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cssをjavascriptから読み込む"}},[t._v("#")]),t._v(" CSSをJavaScriptから読み込む")]),t._v(" "),s("p",[s("code",[t._v("src/main.js")]),t._v(" の")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap/dist/css/bootstrap.css'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap-vue/dist/bootstrap-vue.css'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./assets/css/ldbtn.min.css'")]),t._v("\n")])])]),s("p",[t._v("は動かなかったので外した（安直）。"),s("br"),t._v("\nJavaScriptの中でCSS読み込むってどういうことなんだろう？　と思って今（更）調べたところ、なるほどwebpackの機能……。ということは "),s("code",[t._v("vue create")]),t._v(" の時点で何か間違えたのかな。まあいいや次回また試しましょう。"),s("br"),t._v("\nでも調べた感じwebpackじたい微妙っぽいんだよな……パッケージ依存度が上がるのはすきじゃない。"),s("br"),t._v("\n参考:"),s("a",{attrs:{href:"https://qiita.com/terrierscript/items/0574ab1ef358fecb55b9",target:"_blank",rel:"noopener noreferrer"}},[t._v("なんとなくで理解しないWebpackのCSS周辺 - Qiita"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("BootStrapは"),s("a",{attrs:{href:"getbootstrap.com"}},[t._v("公式サイト")]),t._v("のCDNから読み込んでいます。")]),t._v(" "),s("p",[t._v("それと、"),s("code",[t._v("loading.css")]),t._v(" "),s("code",[t._v("loading-btn.css")]),t._v(" についても、今は"),s("a",{attrs:{href:"https://loading.io/button/",target:"_blank",rel:"noopener noreferrer"}},[t._v("loading.io"),s("OutboundLink")],1),t._v("の配布方法が変わった？っぽくて、 "),s("code",[t._v("ldbtn.min.css")]),t._v(" になっています。")]),t._v(" "),s("h2",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),s("a",{attrs:{href:"https://vuex.vuejs.org/ja/",target:"_blank"}},[s("figure",[s("img",{attrs:{src:t.$withBase("/assets/img/vuex.png"),alt:"Vuex"}}),t._v(" "),s("figcaption",{staticStyle:{"text-align":"center"}},[t._v("画像引用元：Vuex(公式ドキュメント)")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Vuex は Vue.js アプリケーションのための 状態管理パターン + ライブラリです。 これは予測可能な方法によってのみ状態の変異を行うというルールを保証し、アプリケーション内の全てのコンポーネントのための集中型のストアとして機能します。 また Vue 公式の開発ツール拡張と連携し、設定なしでタイムトラベルデバッグやステートのスナップショットのエクスポートやインポートのような高度な機能を提供します。")])]),t._v(" "),s("p",[t._v("後半を理解できている自信はありませんが、アプリケーション内の共通ストアだということはわかります。ローカルストレージあたりへのアクセスを行うインターフェイスを提供するパッケージ、というのが私の現在の理解です。ORMてきな。")]),t._v(" "),s("p",[t._v("しかし書いてから調べてみると、今回やったチュートリアルはずいぶん整理されてる（ソースが美しい）ようです。それってどうなんだろう。一回きちんとぐちゃぐちゃのスパゲッティを書いてからリファクタ方法を学んだ方が根本理解につながるのじゃないかしら。あまり賢いやり方でないのは自覚がありますが……。")]),t._v(" "),s("h2",{attrs:{id:"mapstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapstate"}},[t._v("#")]),t._v(" ...mapState")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://qiita.com/suin/items/7331905a45a8ff80d4dd#four-%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%A8%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%81%AE%E5%85%B1%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex：mapStateの書き方8パターン+11サンプルコード - Qiita"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("8パターンもあることに驚き。"),s("br"),t._v("\n「map」を名詞として見ていたので「mapのState」に見えていたんですけど、さてはこれ動詞だな。「Stateをmapする」ものっぽいな……？"),s("br"),t._v("\ncomputedに入ってくるのは「計算の結果としての"),s("strong",[t._v("値")]),t._v("」っぽいので、"),s("code",[t._v("mapState(arr)")]),t._v(" の戻り値の配列をコピーして返す感じか。")]),t._v(" "),s("p",[s("code",[t._v("mapState(arr)")]),t._v("が何かって言うと")]),t._v(" "),s("blockquote",[s("p",[t._v("コンポーネントが複数のストアのステートプロパティやゲッターを必要としているとき、これらすべてにおいて、算出プロパティを宣言することは繰り返しで冗長です。これに対処するため、算出ゲッター関数を生成し、いくつかのキーストロークを省くのに役立つ mapState ヘルパーを使うことができます:"),s("br"),t._v(" "),s("a",{attrs:{href:"https://vuex.vuejs.org/ja/guide/state.html#mapstate-%E3%83%98%E3%83%AB%E3%83%91%E3%83%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("mapState  ヘルパー - Vuex公式ドキュメント"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("……日本語って難しい。いや、言語化そのものの難しさなんだろうこれは。")]),t._v(" "),s("blockquote",[s("p",[t._v("マップされた算出プロパティの名前がステートサブツリーの名前と同じ場合は、文字列配列を mapState に渡すこともできます。")])]),t._v(" "),s("p",[t._v("とも書かれているので、つまり "),s("code",[t._v("mutations.js")]),t._v(" で定義されている関数をここで使用できるってことかな。")]),t._v(" "),s("p",[t._v("Login.vueの")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loading'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapGetters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hasError'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("は、mutations.jsの")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLoading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("を見に行ってるってことだろう。たぶん。mapGettersでgetterの名称を指定できる、というかこれはエイリアスかな。")]),t._v(" "),s("p",[t._v("スプレッド演算子って何？ということについては"),s("br"),t._v(" "),s("a",{attrs:{href:"https://qiita.com/Nossa/items/e6f503cbb95c8e6967f8",target:"_blank",rel:"noopener noreferrer"}},[t._v("【JavaScript】スプレッド構文の便利な使い方まとめ - Qiita"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("JavaScript、メインでないとはいえ軽く十年は書いてるのに未だに苦手意識が抜けない……。場当たりでとりあえず動くようにばかり書いているせいでしょうが。"),s("br"),t._v(" "),s("code",[t._v("async")]),t._v(" "),s("code",[t._v("await")]),t._v(" あたりも「読めるけど書けない」のレベルからずっと上がってない感じがするので数書いたほうが良さそう。")]),t._v(" "),s("h2",{attrs:{id:"まだわかっていないところ-20-01-31"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#まだわかっていないところ-20-01-31"}},[t._v("#")]),t._v(" まだわかっていないところ(20/01/31)")]),t._v(" "),s("ol",[s("li",[t._v("Vueファイルの"),s("code",[t._v("export name")]),t._v("について")])]),t._v(" "),s("p",[s("code",[t._v("UserList.vue")]),t._v("の記述は"),s("code",[t._v("name: 'UserList'")]),t._v("なのに"),s("code",[t._v("MessageForm.vue")]),t._v("の記述は"),s("code",[t._v("name: 'message-form'")]),t._v("であること。"),s("br"),t._v("\nなぜ急にケバブケースになったのか、パスカルケースとケバブケースの間にどのような差異があるのかがわかっていません。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("ソースの良し悪し")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://jp.vuejs.org/v2/style-guide/index.html#%E8%87%AA%E5%B7%B1%E7%B5%82%E4%BA%86%E5%BD%A2%E5%BC%8F%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88-%E5%BC%B7%E3%81%8F%E6%8E%A8%E5%A5%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式"),s("OutboundLink")],1),t._v("によれば、DOMテンプレートの中ではコンポーネントをケバブケースで書けとのこと。となると"),s("code",[t._v("ChatDashboard.vue")]),t._v("の")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chat-dashboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ChatNavbar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    (以下略)\n")])])]),s("p",[t._v("あたりはひょっとしたらアンチケースかしら。「DOMテンプレート」って語がここを指しているのかいまいち自身が持てないのですが、DOMだしテンプレートなのでここのような気がする……？"),s("br"),t._v("\n「文字列テンプレート」は")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>{{title}}</h1>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("みたいなのを指している？ちょっと単語の意味が掴みきれていない感じがします。")])])}),[],!1,null,null,null);a.default=r.exports}}]);