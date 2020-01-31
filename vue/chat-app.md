# README

[9 Projects you can do to become a Frontend Master in 2020 - Medium](https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h)
に触発されて[チャットアプリ](https://www.sitepoint.com/pusher-vue-real-time-chat-app/)を作りました。  
リポジトリはこちら: [perpouh/chat-app-vue](https://github.com/perpouh/chat-app-vue)

※リンクカードはデザイン含め現在作成中です
<link-card url="https://github.com/perpouh/chat-app-vue"/>

大枠は上記記事通りなので割愛するとして、以下やってみた感想とわからなかったところの調査まとめ。

## CSSをJavaScriptから読み込む

`src/main.js` の

```JavaScript
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import './assets/css/ldbtn.min.css'
```

は動かなかったので外した（安直）。  
JavaScriptの中でCSS読み込むってどういうことなんだろう？　と思って今（更）調べたところ、なるほどwebpackの機能……。ということは `vue create` の時点で何か間違えたのかな。まあいいや次回また試しましょう。  
でも調べた感じwebpackじたい微妙っぽいんだよな……パッケージ依存度が上がるのはすきじゃない。  
参考:[なんとなくで理解しないWebpackのCSS周辺 - Qiita](https://qiita.com/terrierscript/items/0574ab1ef358fecb55b9)

BootStrapは[公式サイト](getbootstrap.com)のCDNから読み込んでいます。

それと、`loading.css` `loading-btn.css` についても、今は[loading.io](https://loading.io/button/)の配布方法が変わった？っぽくて、 `ldbtn.min.css` になっています。

## Vuex

<a href="https://vuex.vuejs.org/ja/" target="_blank">
  <figure>
    <img :src="$withBase('/assets/img/vuex.png')" alt="Vuex">
    <figcaption style="text-align: center">画像引用元：Vuex(公式ドキュメント)</figcaption>
  </figure>
</a>

## ...mapState

[Vuex：mapStateの書き方8パターン+11サンプルコード - Qiita](https://qiita.com/suin/items/7331905a45a8ff80d4dd#four-%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%A8%E3%82%B9%E3%83%86%E3%83%BC%E3%83%88%E3%81%AE%E5%85%B1%E5%AD%98)

8パターンもあることに驚き。  
「map」を名詞として見ていたので「mapのState」に見えていたんですけど、さてはこれ動詞だな。「Stateをmapする」ものっぽいな……？  
computedに入ってくるのは「計算の結果としての**値**」っぽいので、`mapState(arr)` の戻り値の配列をコピーして返す感じか。

`mapState(arr)`が何かって言うと
>コンポーネントが複数のストアのステートプロパティやゲッターを必要としているとき、これらすべてにおいて、算出プロパティを宣言することは繰り返しで冗長です。これに対処するため、算出ゲッター関数を生成し、いくつかのキーストロークを省くのに役立つ mapState ヘルパーを使うことができます:  
[mapState  ヘルパー - Vuex公式ドキュメント](https://vuex.vuejs.org/ja/guide/state.html#mapstate-%E3%83%98%E3%83%AB%E3%83%91%E3%83%BC)

……日本語って難しい。いや、言語化そのものの難しさなんだろうこれは。

>マップされた算出プロパティの名前がステートサブツリーの名前と同じ場合は、文字列配列を mapState に渡すこともできます。

とも書かれているので、つまり `mutations.js` で定義されている関数をここで使用できるってことかな。

Login.vueの

```JavaScript
  ...mapState([
    'loading',
    'error'
  ]),
  ...mapGetters([
    'hasError'
  ])
```

は、mutations.jsの

```JavaScript
  setError(state, error){
    state.error = error;
  },
  setLoading(state, loading){
    state.loading = loading;
  },
```

を見に行ってるってことだろう。たぶん。mapGettersでgetterの名称を指定できる、というかこれはエイリアスかな。

スプレッド演算子って何？ということについては  
[【JavaScript】スプレッド構文の便利な使い方まとめ - Qiita](https://qiita.com/Nossa/items/e6f503cbb95c8e6967f8)

JavaScript、メインでないとはいえ軽く十年は書いてるのに未だに苦手意識が抜けない……。場当たりでとりあえず動くようにばかり書いているせいでしょうが。  
`async` `await` あたりも「読めるけど書けない」のレベルからずっと上がってない感じがするので数書いたほうが良さそう。