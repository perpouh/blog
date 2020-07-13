---
description: 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎⑤'
tags:
  - python
date: '2019-03-08'
---
# ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎⑤
[前回](https://perpouh.github.io/blog/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎④.html)の続きから行きます。  
キングプロテアちゃんは土方さんが倒してくれました。出るんだな1ターン200万ダメージ……  
  
## 名前空間とスコープ  
  
Pythonにも名前空間というものがあります。が、ちょっと読んだ感じ特殊です。  
  
```bash
>>> fluit = "orange"
>>> def test1():
...   print(fluit)
... 
>>> test1()
orange
```  
  
はい。  
で、  
  
```bash
>>> def test2():
...   fluit = "strawberry"
...   print(fluit)
... 
>>> test2()
strawberry
>>> print(fluit)
orange
```  
  
はい。この時点でちょっと「おや？」となりました。グローバル変数にアクセスできてるのかできてないのかどっち？という感じになります。  
そんでこう。  
  
```bash
>>> fluit = "orange"
>>> def test3():
...   print(fluit)
...   fluit="strawberry"
...   print(fluit)
... 
>>> test3()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 2, in test3
UnboundLocalError: local variable 'fluit' referenced before assignment
```  
  
ええ……？  
と思ったのですが、これを読み解くには以下の情報が必要です。  
  
 - メソッドはグローバル変数を参照できます(test1)。  
 - メソッドはグローバル変数を上書きできません(test2)。  
 - メソッドはグローバル変数と同名のローカル変数を持つことができます(test2)。  
  
ポイントはtest1の時点で、グローバル変数を暗黙的に呼んでいるというところです。  
test3についても、メソッド一行目で暗黙的にグローバルのfluit変数が読み込まれています。  
で、なぜか2行目でもグローバルの方を書き換えに行ってエラーが発生するということ　らしい　です（あやふや）。  
  
できないならローカル変数作ったらええやんけと思うんですが、まあグローバル変数にアクセスするときは `global` つけようねということで収めるのがいいっぽい。  
  
```bash
>>> fluit = "orange"
>>> def test3():
...   global fluit
...   print(fluit)
...   fluit="strawberry"
...   print(fluit)
... 
>>> test3()
orange
strawberry
```  
  
ちょっとこの宣言（メソッド一行目）気に食わないけど、そもそもグローバル変数とローカル変数で名前がかぶるのがバッドプラクティスっぽいのでそのへんはアレでアレしましょう。んーでもなーthisとかselfに慣れちゃってるのでキモいっちゃキモい……。  
  
## 名前の中の\_と\__  
  
> 先頭と末尾が2個のアンダースコアになっている名前は、Pythonが使う変数として予約されている。（中略）このパターンが選ばれたのは、アプリケーションデベロッパーが自分の変数のためにこのような名前を選ぶことはまずないだろうと思われたからだ。  
  
どうかな……（感想）  
  
以前[サンプルでanswerというメソッドを扱った時](https://perpouh.github.io/blog/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③.html#%E4%B8%80%E4%BA%BA%E5%89%8D%E3%81%AE%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE%E9%96%A2%E6%95%B0)、実はdocstringを書き込んでいました。  
  
```python
def answer():
  '''
  これO'Railly本のサンプルそのままなんですけど名前がanswerで答えが42なのわらう。
  銀河ヒッチハイクガイドだ
  '''
  print(42)
```  
  
これを前提に`answer.__doc__`を出力してやると、以下のようになります。  
  
```bash
>>> answer.__doc__
"\n  これO'Railly本のサンプルそのままなんですけど名前がanswerで答えが42なのわらう。\n  銀河ヒッチハイクガイドだ\n  "
```  
  
これどうなんだろうな、エラーログ出力くらいにしか使わない気がするのだけど。  
  
## エラー処理とtry、except  
  
> するか、しないかだ。お試しはない。  ――Yoda  
  
Yodaってアレかしらスターウォーズ？　見ていないのでわからないですけど。  
  
```
try:
  code
except Exception as name:
  code
```  
  
の形式を取ります。べつだん奇矯でもないですね。  
組み込み例外の一覧はドキュメントを見るのが早そう：[PythonDoc](https://docs.python.org/ja/3/library/exceptions.html)  
  
### 独自例外クラス  
  
Pythonでももちろん独自例外を実装することができます。  
  
```
class OriginalException(Exception):
  pass
```  
  
で、あとは  
  
```
raise OriginalException(引数)
```  
  
するだけ。クラス定義に括弧があるのは珍しいですね。括弧の中が親クラスということらしいです。  
カンマで区切って複数指定することで多重継承もできるらしいですが、多重継承じたいにあんまり馴染みがないのでどうだろうか。Swiftとかも書くので慣れた方がいいのだろうとは思います。  
  
[Pythonの多重継承の際の初期化とメゾットについて - Qiita](https://qiita.com/sey323/items/0d3217601b10708819ee)  
  
まあこのへんはおいおいやっていきましょう。  
  
で、次はNumPyに進む予定でしたが、ちらっと読んでみたところ、これ線形代数を先にやった方がいいのでは？となったので線形代数に行きます。私の数学の知識は数ⅡBで止まっています（微積とベクトルがギリ）。大丈夫だろうか。  
