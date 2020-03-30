# ラスボス系後輩ヒロインAIチャットボットを作りたい・プロローグ
最終更新日:2019年02月28日

当記事はQrunchにクロス投稿しています。  
  
## 前置き  
保守対応に回されてチケット来ない日は暇なので二度とIE8案件の保守なんかにぶち込まれないで済むように勉強をはじめました（IEを口汚く罵る絵文字）  
とりあえずFGOのCCCイベが楽しかった&BBちゃんが可愛かったのでラスボス系後輩ヒロインAIチャットボット制作を目標に据え置いて作業します。  
何を隠そう「先輩」と呼ばれることにものすごく弱いのだ……（マシュも大好き）  
  
## 本編  
  
予定の目次と、語の定義についてざっと検索してみた結果  
  
 - Pythonの基礎 with [O'Reilly本](https://www.oreilly.co.jp/books/9784873117386/)  
 	- NumPy  
 	- matplotlib（ふたつともO'Reilly本に収録されていることを確認、ラッキィ）  
 - 数学の基礎  
 	- 線形代数  
 	- 微分  
 	- 正規分布  
 	- 交差エントロピーも目を通しておきたいけど[Kares](https://keras.io/ja/)に入ってるっぽいからやらなくてもよい？　保留  
 - ニューラルネットワークの概要  
 - [バックプロパゲーション](https://qiita.com/43x2/items/50b55623c890564f1893#%E8%AA%A4%E5%B7%AE%E9%80%86%E4%BC%9D%E6%92%AD%E6%B3%95%E3%81%AE%E5%B1%8B%E5%8F%B0%E9%AA%A8)の概要  
 - 仮想環境の構築  
 - [JUMAN++](http://nlp.ist.i.kyoto-u.ac.jp/index.php?JUMAN++)入門  
 - シンプルな[RNN(Recurrent Neural Network - 再帰的ニューラルネットワーク)](https://qiita.com/kiminaka/items/87afd4a433dc655d8cfd#rnn-recurrent-neural-network%E3%81%A8%E3%81%AF)の実装  
 - 勾配クリッピング  
 - シンプルな[LSTM(Long Short Term Memory)](https://qiita.com/t_Signull/items/21b82be280b46f467d1b#lstm%E3%81%A8%E3%81%AF)の実装  
 - シンプルな[GRU(Gated Recurrent Unit)](https://deepage.net/deep_learning/2017/05/23/recurrent-neural-networks.html#gru)の実装  
 - LSTM、GRUによる自然言語処理  
  
目次は[Udemy](https://www.udemy.com/ai-nlp-bot/)を参考に作りました。クレカ審査落ちたので受講はできません。調べたらPayPalが銀行口座からの支払いに対応しているようで、本人確認すればPayPal越しに行けそうな感じがあったんですけど、なんか時間かかるっぽいしめんどくさいし保留。デビットカード作ればいいんだろうか……お金周りはめんどうだねえ。  
  
元々形態素解析は[MeCab](http://taku910.github.io/mecab/)でやってたんですけど（Rubyラッパの[natto](https://github.com/buruzaemon/natto)とか係り受け解析機[Cabocha](https://taku910.github.io/cabocha/)とかMeCab周りは食べ物の名前が多い）、この記事 [新形態素解析器JUMAN++を触ってみたけど思ったより高精度でMeCabから乗り換えようかと思った話 - Qiita](https://qiita.com/riverwell/items/438e88427363511e9f28) を読んで、砕けた喋り方のチャットボットならJUMAN++の方が向きそうだなと思ったので乗り替えることに。  
  
目下の明確な問題は **明らかに教師データが足りない** ことなんですけど（FGOからBBちゃんのセリフ全部起こしても足りないだろうし、CCC持ってないし）（実家からVita持ってくればPSストアから買えるっぽい？）まあそのへんは最悪ぐだBB夢小説でも書いてなんとかしましょう（なんとかなるんだろうか？）  
