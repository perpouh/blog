---
description: 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎②'
tags:
  - python
date: '2019-03-08'
---
# ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎②
※この記事はQrunchにもクロス投稿しています。  
[前回](https://perpouh.github.io/blog/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・環境の構築〜Pythonの基礎.html)の続きから行きます。  
  
そういえばRubyで `str[n]` を見たときはぎょっとしたんですけど、あれ考えてみればchar[]の扱いをStringに取り込んだだけなのでそんな変な動きでもないですね。char[]の存在自体忘れてたけど……char\*とか懐かしすぎる……  
  
## リストとタプルと辞書と集合  
  
|名前|書式|注釈|  
|---|---|---|  
|リスト|[val]|順番が保証される。重複した値も許可する。上書き可能。|  
|タプル|(val)|順番が保証される。重複した値も許可する。上書きできない。|  
|辞書|{key:val}|順番は保証されない。キーが一意となる。上書き可能。|  
|集合|{val}|順番は保証されない。重複した値は入らない。上書き可能。|  
  
「二通りの意味でPythonicな」という記述に首を傾げてコードを眺めていたのですが、なるほどMonty PythonとPythonのダブルミーニングか……  
Monty PythonはあれかなイギリスのTeam Nacsって認識でいいかな。怒られるかな。  
  
タプル、一回読んだだけだとちょっと理解できなかったけどPHPのlist()みたいなことができると思えばだいたい合ってるっぽい？  
  
```php
php > $arr = ['ruby', 'diamond', 'perl'];
php > list($a, $b, $c) = $arr;
php > echo $a;
ruby
php > echo $b;
diamond
php > echo $c;
perl
```  
  
```python
>>> a, b, c = {'ruby', 'diamond', 'perl'}
>>> a
'ruby'
>>> b
'diamond'
>>> c
'perl'
```  
  
ただケツカンマだけはちょっと受け付けない。まあ要素一個のタプルなんて使わないでしょうし別にいいけど。  
可変長の引数を取る関数には `*args` てきなことをやるらしい。  
  
リストの方はざっと見た感じ「どう書いても動くな……」という印象。`index, count, join, sort, len, copy` と欲しいものがだいたいあり、脳死状態で書いても安定して動いてくれそう。  
中でも「マーベラス！！！」とテンション爆上げ&内心スタンディングオベーションしたのが `in` 構文。  
  
```python
>>> 'fizz' in ['hoge', 'fuga', 'poyo']
False
```  
  
この構文すっごい素敵。エンジニアの手に馴染みやすく英語としてそのまま読み下すこともできる！　最強では？！　好き！  
  
辞書はだいたい連想配列、ハッシュマップと似たようなものなので違和感も疑問も特に無い。dict()を使った変換はCSV読み込みあたりで使いそう？  
  
```php
foreach($line as $key => $val){
  $arr[$key] = $val;
}
```  
  
みたいなこと書かないで済むのは地味に便利っぽい。  
辞書のupdate関数はなんでupdate？　と思ったけど要は「Aの辞書をBの辞書で上書きする」みたいなことだと思えばよさそう。Bの辞書に無いものは上書きされない。  
こちらも`del, keys, values, items, copy` と大体必要そうなものが揃っていて便利っぽい。updateがあってinsertが無いのちょっともやっとするけど。  
  
集合は数学の集合だと思えばいいらしい。和集合、差集合、積集合、排他的論理和などが取れる。  
  
|名前|記号|例|意味|  
|---|---|---|---|  
|和集合|&|a & b||  
|積集合|｜|a｜b||  
|差集合|-|a-b||  
|排他的論理和|^|a^b||  
|部分集合|<=|a<=b|aはbの部分集合である|  
|真部分集合|<|a<b|aはbの真部分集合である|  
|上位集合|>=|a>=b|aはbの上位集合である|  
|真上位集合|>|a>b|aはbの真上位集合である|  
半角パイプ入れられなかった……  
  
```
>>> language = {'python', 'ruby', 'perl', 'java'}
>>> gem = {'sapphire', 'ruby', 'diamond', 'quartz'}
>>> language & gem
{'ruby'}
>>> language ^ gem
{'diamond', 'perl', 'quartz', 'python', 'sapphire', 'java'}
>>> language | gem
{'diamond', 'perl', 'quartz', 'python', 'ruby', 'sapphire', 'java'}
>>> language < gem
False
```  
  
というわけで割合サクッと三章が終わってしまった（見積もりが下手！）ので四章に行きます。  
