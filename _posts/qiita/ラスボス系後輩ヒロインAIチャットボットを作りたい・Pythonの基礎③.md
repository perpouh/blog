---
description: 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③'
tags:
date: '2019-03-08'
---
# ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③
※この記事はQrunchにもクロス投稿しています。  
[前回](https://perpouh.github.io/blog/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎②.html)の続きから行きます。  
  
コメントは `#` を先頭につける。これはPHPもRubyも昨日書いたVagrantfileも同じなのでよし。  
`#` の名称について、本文に「オクトソープと言うとちょっと不気味な感じだ」、注釈に「あの8本足の緑色の生き物のような。ほら、あなたの後ろにいる」と記述があり、流れ的にクトゥルフか何かかと思っているのですが未履修なのでわからず。背後にいる確率が一番高い8本足は蜘蛛では……？  
（追記：友人に訊ねてみたところ、クトゥルフさん本人では？ との回答を得ました。曰く、「修飾子をうまく翻訳できていないのだと思う」とのこと）  
  
そういえばこの時点でまだコンソール入力なのだけどファイル実行の方法はやらないのかしらと思って先の方パラパラ見てみたところ、見つからなかったのでここに追記しておきます。  
  
## Pythonファイルの実行  
  
```bash
$ python cabocha.py 
なんでも => できる
できる => ラスボス系後輩なのです
ラスボス系後輩なのです => None
```  
  
上記の例は係り受け解析器にBBちゃんのセリフを突っ込んだの図。スクリプトの中身はMeCabとCaboChaです。  
  
<details><summary>別に読まなくていい係り受け解析器の中身</summary><div>  
  
```python
\# -*- coding: utf-8 -*-
import CaboCha
import itertools

def chunk_by(func, col):
    '''
    `func`の要素が正のアイテムで区切る
    '''
    result = []
    for item in col:
        if func(item):
            result.append([])
        else:
            result[len(result) - 1].append(item)
    return result

def has_chunk(token):
    '''
    チャンクがあるかどうか
    チャンクがある場合、その単語が先頭になる
    '''
    return token.chunk is not None

def to_tokens(tree):
    '''
    解析済みの木からトークンを取得する
    '''
    return [tree.token(i) for i in range(0, tree.size())]

def concat_tokens(i, tokens, lasts):
    '''
    単語を意味のある単位にまとめる
    '''
    if i == -1:
        return None
    word = tokens[i].surface
    last_words = [x.surface for x in lasts[i]]
    return word + ''.join(last_words)

raw_string = u'なんでもできるラスボス系後輩なのです'

cp = CaboCha.Parser('-n 0')
tree = cp.parse(raw_string)
tokens = to_tokens(tree)

head_tokens = [token for token in tokens if has_chunk(token)]
lasts = chunk_by(has_chunk, tokens)

links = [x.chunk.link for x in head_tokens]
link_words = [concat_tokens(x, head_tokens, lasts) for x in links]

for (i, to_word) in enumerate(link_words):
    from_word = concat_tokens(i, head_tokens, lasts)
    print("{0} => {1}".format(from_word, to_word))
```  
</div></details>  
  
自分で書いたわけではなく、Python2のコードが公開されてたのをPython3対応コードに書き換えただけです。  
そして今確認したら参考サイト無くなってるっぽいですね。[予想](http://perpouh.net/virtual-girlfriend/128/)当たってやんのわはは。  
  
## 分岐  
  
分岐は `if, elif, else` で管理する。elif。初めてのパターン。  
  
```python
>>> hoge = False
>>> fuga = True
>>> if hoge:
...   print('hoge')
... elif fuga:
...   print('fuga')
... else:
...   print('piyo')
... 
fuga
```  
  
ちなみに `hoge = true` って書いたら怒られてちょっとびっくりしました。  
  
```python
>>> hoge = true
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'true' is not defined
```  
  
本文中の例、「毛皮に包まれてて小さければ猫！小さくなければ熊！毛皮に包まれていなくて小さければ蛇！小さくなければ人間、もしくは禿げた熊」の雑さに笑ってしまった。禿げた熊。  
  
比較演算子はふつう、どっちかって言うと `and` と `or` の方が珍しいように思う。読み下しやすくてすてき。あと  
  
```python
>>> x = 7
>>> 5 < x < 10
True
```  
  
みたいな複数の比較ができるのもとてもよい。いちいち `and` でつなぐのダルいもんな……  
  
## 繰り返し  
  
whileがあり、breakがあり、continueがあり、forがある。eachは無く、for-inがある。  
forとwhileにはelseがある。正常終了された場合（処理途中でbreakされなかった場合）elseに入ってくる。  
  
```python
for gem in gems:
  print(gem)
  break
else:
  print('break!')
```  
  
正常終了したときのみの処理。ちょっとぱっとは思いつかない。不思議だ。  
本文においては「何かを探すためにループを使い、それが見つからなかったときにelseが呼び出されると思えばいい」とあり、うーん。何かを探すのにわざわざループを使う状況……。  
  
### zip()を使った繰り返し  
  
```python
>>> days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
>>> staples = ['Rice', 'Bread', 'Pasta', 'Pizza', 'Burger']
>>> drinks = ['Juice', 'Coffee', 'Tea', 'Milk', 'Water']
>>> fluits = ['Orange', 'Apple', 'Strawberry', 'Banana', 'Peach']
>>> for day, staple, drink, fluit in zip(days, staples, drinks, fluits):
>>>   print("day:" + day + " staple:" + staple + " drink:" + drink + " fluit:" + fluit)
day:Monday staple:Rice drink:Juice fluit:Orange
day:Tuesday staple:Bread drink:Coffee fluit:Apple
day:Wednesday staple:Pasta drink:Tea fluit:Strawberry
day:Thursday staple:Pizza drink:Milk fluit:Banana
day:Friday staple:Burger drink:Water fluit:Peach
```  
  
ああーいいですね。いいですねこれ。`for(int i=0;i<arr.length;i++)` でやるのウザいと思ってたとこです。さすがです。  
  
zipとdictを組み合わせることで小さな日英辞書が出来上がる。  
  
```
>>> japanese = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日']
>>> english = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
>>> dict(zip(japanese, english))
{'月曜日': 'Monday', '火曜日': 'Tuesday', '水曜日': 'Wednesday', '木曜日': 'Thursday', '金曜日': 'Friday'}
```  
  
ちなみにこれ3つ渡したらどうなるかなと思ったら怒られました。  
  
```bash
>>> japanese = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日']
>>> english = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
>>> french = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
>>> dict(zip(japanese, english, french))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: dictionary update sequence element #0 has length 3; 2 is required
```  
  
zipはタプルを生成するもので、dictが引数に取るのは「2要素のシーケンス」なのでそりゃそうですね。  
  
### リスト内包表記  
  
```
[expression for item in iterable]
```  
  
***Σ急にわからなくなった……？！***  
  
……と思ったけどその後のプログラム読んだらわかりました。やはり言葉は難しい。  
  
```python
>>> number_list = [number for number in range(1, 6)]
[1, 2, 3, 4, 5]
```  
  
Railsのアレっぽいですね、mapとか。  
  
```ruby
number_list = Range.new(1, 6).map{ | number | number }
=> [1, 2, 3, 4, 5, 6]
```  
  
ifが付くこともある。  
  
```python
>>> number_list = [number for number in range(1, 6) if number %2 == 0]
[2, 4]
```  
  
```ruby
number_list = Range.new(1, 6).map{ | number | number if number %2 == 0 }
=> [nil, 2, nil, 4, nil, 6]
```  
  
Railsのmapは未だに使いこなせていない感がある……nil……:thinking_face:  
6が入ってくるかどうかも結構大きな違いですね。混乱しそう。  
  
辞書にも集合にも同じく内包表記がありますが、同じなので割愛。  
  
### ジェネレータ内包表記  
  
わからない。わかるけどわからない。書き方はわかったけれど用例がわからない……ので、検索する。  
[Pythonのジェネレーターってなんのためにあるのかをなるべく分かりやすく説明しようと試みた - Qiita](https://qiita.com/keitakurita/items/5a31b902db6adfa45a70)  
  
ふーむ……？シングルトンで管理するみたいなもの……？ちょっと違うか？  
こういうときはサンプル書いてみるのが一番なんで、書いてみましょう。  
  
```python
# -*- coding: utf-8 -*-
def generator_sample(maximum):
  num = 2
  while num < maximum:
    if (not [divisor for divisor in list(range(num - 1, 1, -1)) if num % divisor == 0]):
      yield num 
    num += 1

for prime in generator_sample(100):
  print(prime)
```  
  
引数以下の素数を出力するプログラム。  
<details><summary>結果がこう</summary><div>  
  
```
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
```  
  
</div></details>  
  
んん。「書き方はわかるけど用例はわからない」からあまり進んでいないような……:thinking_face:  
  
## 関数  
  
### 位置引数とキーワード引数  
  
listとtupleだと理解した。割といつも通り。メッセージ式は便利でいいよね。OC以外でメッセージ式って言い方するかはわからないけど。Railsにもキーワード引数がありますね。シンボルはなかなか和解出来なんだ……。  
  
### \*による位置引数のタプル化  
  
午前中リストとかタプルとかやったときにも触れたんですけど、\*を使った位置引数のタプル化で可変長の引数を取ることができます。  
まあでも何が入ってくるかわからないって点では使いどころが微妙かな……セキュリティホールになりそう。少なくともユーザーの入力をこれで受け取るのはやめた方がいいですね（printするだけとかならともかく（それでもscriptタグとか入れられたらつらい  
  
### \*\*によるキーワード引数の辞書化  
  
これも。Railsでいうところの `params.require.permit` みたいにに便利に使えそうですけど、バリデーションちゃんとしないと怖い感じ。なんでも何個でも入るというのはこわいですね……。  
  
### 一人前のオブジェクトとしての関数  
  
関数自体がオブジェクトになります。[可変関数](http://php.net/manual/ja/functions.variable-functions.php)みたいなものかな？　と思ったんですがどうもちょっと違うっぽい。  
  
```python
def answer():
  '''
  これO'Railly本のサンプルそのままなんですけど名前がanswerで答えが42なのわらう。
  銀河ヒッチハイクガイドだ
  '''
  print(42)

def runner(func):
  func()

runner(answer)
runner("answer") # 試す
```  
  
```bash
$ python func.py 
42
Traceback (most recent call last):
  File "func.py", line 24, in <module>
    runner("answer")
  File "func.py", line 21, in runner
    func()
TypeError: 'str' object is not callable
```  
  
ふーむ。私はどうもこのオブジェクト概念が苦手なようで、インスタンス化しないのにオブジェクトというのが未だにちょっと馴染みません。answerが呼び出されるのはrunnerの中の `func()` 時点での話なのだろうけど……オブジェクト……？  
どうでもいいですけどRailsに慣れたせいで引数を取らない関数の()を省く癖がついてしまってちょいちょい怒られる。慣れるものだなあ……  
  
ちょっと記事伸び過ぎたので切ります。次回、関数内関数から。  
