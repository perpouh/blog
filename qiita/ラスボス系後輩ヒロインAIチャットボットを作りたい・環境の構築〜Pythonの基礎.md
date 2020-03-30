# ラスボス系後輩ヒロインAIチャットボットを作りたい・環境の構築〜Pythonの基礎
最終更新日:2019年02月28日

## 前哨戦・VagrantにPython環境を作る  
  
```bash
$ vagrant init
$ vi Vagrantfile
```  
  
[Vagrantfile](https://gist.github.com/perpouh/9af2c825caddcf6236a89fbcf3bc0108)  
※埋め込みもコードシンタックスもできなかったので（<<-SHELLのあたりでおかしくなる）gistのリンクだけ張っておきます。  
  
これで `vagrant up` 一発でpython環境ができるはずだったのですが、pyenvインストールの途中、PATH書き込みのあたりでコケてるっぽくて何だろうな……？　コピペすると動くのでちょっとよくわからない。  
  
でもまあとりあえずpython作業用環境が発生しました。やったね。  
少なくとも今回はフォルダ共有は使わないと思ってそのように設定しました。vbguest調子悪いし。  
  
```bash
$ python --version
Python 3.6.5
```  
  
## 本戦・Python入門  
  
昼休みに本屋に行って[入門Python3](https://www.oreilly.co.jp/books/9784873117386/)買ってきたんですけど想像してた倍くらいの厚みがあってビビりました。500ページオーバー……鈍器……  
  
### 四則演算  
  
|演算子|意味|例|結果|  
|---|---|---|---|  
|+|加算|1 + 2|3|  
|-|減算|1 - 2|-1|  
|\*|乗算|1 \* 2|2|  
|/|浮動小数点数の除算|1 / 2|0.5|  
|//|整数の除算（切り捨て）|1 // 2|0|  
|%|剰余|1 % 2|1|  
|\**|指数|1 \** 2|1|  
  
### 基数  
基本的な基数は10であるが、2, 8, 16なども使用できる。  
  
```
>>> 0b10
2
>>> 0o10
8
>>> 0x10
16
```  
  
この表現なんかすごく久し振りに見た気がすると思って調べ直したところ、Javaすらこの記法ではないからC言語以来じつに十年ぶりの邂逅でした（OCとかC++とか履修してないので）。ぐええ。JavaScriptもこの記法ですけど使った覚えはないな……  
longは無く、intは **任意のサイズ** である。`10**100**2` すら格納できる。強い。  
  
### 文字列の連結  
  
文字列の連結は `+` で行う。ただし **リテラル文字列の場合は並べるだけでも連結できる** 。  
  
```
>>> "Hello" + "World"
'HelloWorld'
>>> "Hello" "World"
'HelloWorld'
```  
※シングルクォートが出力されているのはインタプリタ自動エコーのため。横着して `print()` を使っていないせいです。以下同じ。  
  
さらに `*` 演算子によって **文字列を繰り返すことができる** 。  
  
```
>>> "Ya"*7
'YaYaYaYaYaYaYa'
```  
  
何に使うんだろうこれ……:thinking_face:  
  
### 文字列のスライス  
  
文字列からの文字の抽出はこれもRubyと同じく `[]` を使用する。末尾の表現は `[-1]` となる。  
  
```
>>> str = "入門Python3"
>>> str[1]
'門'
>>> str[-1]
'3'
```  
  
`[start:end:step]` によるスライス  
  
```
>>> str = "入門Python3"
>>> str[1:8:2]
'門yhn'
```  
  
 - `[:]` は文字列の先頭から末尾まですべてを取り出す（やる意味がわからない）  
 - `[start:]` はstartから文字列の末尾までを取り出す。  
 - `[:end]` は文字列の先頭からend **の前** までを取り出す。10と指定した場合9まで。  
 - ステップに負の値を設定すると逆にステップしていく。  
  
```
>>> str = "abcdefghijklmnopqrstuvwxyz"
>>> str[-1::-1]
'zyxwvutsrqponmlkjihgfedcba'
>>> str[-1:0:-1]
'zyxwvutsrqponmlkjihgfedcb'
```  
  
なるほどendの手前までだから逆ステップでaまで遡るにはendを省略することになるのか。  
  
### splitとjoin  
  
このあたりはこともなし。PHPからRubyに行ったときはぎょっとしたけどRubyやってからだと違和感がない。  
  
```
>>> "a,b,c".split(',')
['a', 'b', 'c']
>>> ','.join(['a','b','c'])
'a,b,c'
```  
  
### 大文字と小文字の区別、配置  
```
>>> str = "Come, woo me, woo me, for now I am in a holiday humor."
>>> str.strip('.')
'Come, woo me, woo me, for now I am in a holiday humor'
>>> str.capitalize()
'Come, woo me, woo me, for now i am in a holiday humor.'
>>> str.title()
'Come, Woo Me, Woo Me, For Now I Am In A Holiday Humor.'
>>> str.upper()
'COME, WOO ME, WOO ME, FOR NOW I AM IN A HOLIDAY HUMOR.'
>>> str.lower()
'come, woo me, woo me, for now i am in a holiday humor.'
>>> str.swapcase()
'cOME, WOO ME, WOO ME, FOR NOW i AM IN A HOLIDAY HUMOR.'
```  
文章はシェイクスピア「お気に召すまま(As You Like It)」より。  
ちなみに  
  
```
>>> str = "あいうえお"
>>> str.lower()
'あいうえお'
```  
そりゃそうか。これで「ぁぃぅぇぉ」とか出されたらびっくりするところだった（そもそもそれはlowercaseとは言わない）  
  
二章の終わりまで来たので一旦ここで区切ります。存外伸びてしまった。  
四章のコード構造までは最低限行かなきゃいけないとして、あと二日くらい。ページ数にして100ページ弱なので多少コードいじって遊んでも収まるでしょう。  
Udemyの講座の目次を参考に予定立ててたんですけど、あの講座、44分半で何をどこまでやるつもりだったのか……？  
  
初日感想。Pythonたのしい！好きな言語の好きなところが詰め込んである感。新鮮なのにストレスはない。すごい。手に馴染んだ書式にプラス便利なものが積んであるという感触。  
入門Python3もまず読み物としてとても読みやすい、面白いです。翻訳もいいのだろうな。良きスタートになりました。  
