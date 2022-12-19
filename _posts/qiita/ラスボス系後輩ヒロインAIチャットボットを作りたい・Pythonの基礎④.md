---
description: 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎④'
tags:
  - python
date: '2019-03-08'
---
# ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎④
[前回](https://perpouh.github.io/blog/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③.html)の続きから行きます。具体的に関数内関数から。  
BB/GOはフレンドの始皇帝に倒してもらいました。ありがとうフレンドの始皇帝。  
  
## 関数内関数  
  
関数の中に関数を作ることができます。JavaScriptとかPHPでもできますけど、まあ使った覚えはない……。  
  
```python
def outer(str):
  def inner(str):
    str = "piyo"
    print("inner: " + str)
  print("outer: " + str)
  inner(str)
  print("outer: " + str)

outer("hoge")
inner("fuga")
```  
  
```bash
$ python func.py 
outer: hoge
inner: piyo
outer: hoge
Traceback (most recent call last):
  File "func.py", line 35, in <module>
    inner("fuga")
NameError: name 'inner' is not defined
```  
  
はい。当然関数の外からはアクセスできません（PHPは何故かできるけど）（あれ本当に何のための関数内関数なんだろうか）  
innerメソッドの中でstrを書き換えてもouterメソッドに影響することはありません。  
  
## クロージャ  
  
```python
def outer(str):
  def inner():
    print("inner: " + str)
  return inner

inner = outer("hoge")
inner()
```  
  
```bash
$ python generator.py 
inner: hoge
```  
  
はい。  
引数にメソッドを渡してやることもできます。  
  
```python
def outer(str, func):
  def inner():
    func()
    print("inner: " + str)
  return inner

def closer():
  print("piyo")

inner = outer("hoge", closer)
inner()
```  
  
## 無名関数：ラムダ関数  
ラムダ。Java8のラムダ式からいまいち和解できないでいるのですけど、これはワンライナーくらいの意味で受け取っていいのかしら。ラムダ式もラムダ関数も、ラムダという言葉の意味自体がよくわかりません。AWS Lambda（サーバレス）とか見るに「無」？  
<del>某作品の乱数と書いてラムダと読むキャラもよくわかりません。乱数とラムダ関係なくない？</del>  
  
閑話休題。コードを書きます。  
  
```python
def zipnumber(num, func):
  num = func(num)
  print(num[0:3] + "-" + num[3:7])

numbers = ["123-4567", "12-34567", "1234567", "1-23-4567"]

for number in numbers:
  zipnumber(number, lambda number: number.replace("-", ""))
```  
  
どこにハイフンが入ってるかわからないので一旦ハイフンを取り除きつつ再成形して表示するコード。  
  
```
$ python generator.py 
123-4567
123-4567
123-4567
123-4567
```  
  
lambdaで渡したものをfunc()で実行することに何故かものすごい違和感がある……。うーん。  
  
## ジェネレータ  
ジェネレータは[この前](https://perpouh.github.io/blog/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③.html#%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E5%86%85%E5%8C%85%E8%A1%A8%E8%A8%98)うっかりやってしまったので割愛。ジェネレータ内包表記を理解するためにジェネレータ関数やっちゃってました。  
うーんしかしますますジェネレータ内包表記の使い所はわからない……  
  
## デコレータ  
  
デコレータの説明はインターネットだとこちらがわかりやすかったです。  
[Pythonのデコレータについて - Qiita](https://qiita.com/mtb_beta/items/d257519b018b8cd0cc2e)  
  
```python
def check_role(func):
  def wrapper(*args, **kwargs):
    print("log start")
    func()
    print("log end")
  return wrapper

@check_role
def main_method():
  print("method execute!")

main_method()
```  
  
```bash
$ python decorator.py 
log start
method execute!
log end

```  
  
うおおSpringFrameWorkのあのイケてるアノテーションみたいなことができる……！！神！マジで好きな言語とFWの好きなところが詰まってる！ワー！！  
アノテーションが下（メソッド宣言に近い方）から処理されるってことだけちゃんと留意すれば良さそうです。ひええ好き……  
  
本日は保守対応があったためお勉強はちょっとだけ。残りは名前空間と例外。  
