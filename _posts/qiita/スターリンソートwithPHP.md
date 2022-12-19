---
description: 'スターリンソートwithPHP'
tags:
date: '2019-08-06'
---
# スターリンソートwithPHP
まだPHPで書いてる人が見当たらなかったので。居たらごめんなさい。  
  
```php
<?php
$array = [1,3,4,2,3,7,3,9];
print_r(stalin_sort($array));

function stalin_sort($arr){
	$ret[] = $max = $arr[0];
	foreach($arr as $el){
		if($el <= $max) continue;
		$ret[] = $max = $el;
	}
	return $ret;
}
```  
  
本当は練習がてらアロー関数でやろうと思ってたけど、端末に入ってたPHPが7.1だったのでやめた。  
粛清というか、どちらかというと消えゆく関数の中に取り残して見捨てるみたいなコードになりました。  
  
---  
  
[2019/08/05 追記]  
なんかすごく真面目な記事にメンション張られてしまって申し訳なくなったのでアロー関数やろうと思います。  
  
>本当は練習がてらアロー関数でやろうと思ってたけど  
  
すみません、正確には「アロー関数触ってみたい」レベルの話です。ごめんなさい。ここしばらくレガシー保守に居てPHP7すらひょっとしたら一年近く触ってないです。  
で、先に結果言うんですけど、「PHPのアロー関数でスターリンソートやるの無理くない？」となりました。最大値の管理をどうやればいいんだろう……。以下はアロー関数を使ってみただけのコードになります。  
  
Vagrant準備  
  
```
[root@localhost vagrant]# history
    1  yum list php
    2  yum list php* ←7がないことを確認
    3  yum install http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
    4  yum install yum-utils
    5  yum-config-manager --enable remi-php74 ←適当に入力してみて弾かれる
    6  yum-config-manager --enable remi-php70
    7  yum list php*
    8  yum install php74
    9  php -v ←出ない。あれ？develいるんだっけ？
   10  yum list php-devel ←無い
   11  yum list php74-devel ←無い。あれ？
   12  yum list php74* ←確認
   13  yum install php74-php-devel ←なるほど
   14  php -v ←やっぱり出ない。あれ？
   15  yum install php php-devel php-mbstring php-pdo php-gd php-xml php-mcrypt ←バージョン見たら7.0だったので却下
   16  php74 ←試し打ち
   17  php74 -v ←バージョンが表示された
```  
  
VagrantにPHP入れるのが久しぶりすぎてこんなことになるんだっけ……？と首をかしげるものの、まあいいやと判定。遊ぶだけだし。  
  
@tadsanさんの[PHPの無名関数式とは何か、そしてPHP7.4のアロー関数にそなえよう](https://qiita.com/tadsan/items/b2a37d1a7fed1b5b2cb1)を見ながらコードを記述。  
  
```php
<?php
$array = [1,3,4,2,3,7,3,9];
$sorted[] = $max = $array[0];

$stalin_sort = fn($max, $el) => $max < $el ? $el: false;

foreach($array as $el)if($ret = $stalin_sort($max, $el)) $sorted[] = $max = $ret;
print_r($sorted);
```  
  
```
[root@localhost vagrant]# php74 sort.php 
Array
(
    [0] => 1
    [1] => 3
    [2] => 4
    [3] => 7
    [4] => 9
)
```  
  
一行で書くのがかっこいい気がして一行で書いてみました（コード6行目）。  
可読性が下がっただけのような気もします。  
  
```展開.php
foreach($array as $el){
  if($ret = $stalin_sort($max, $el)){
   $sorted[] = $max = $ret;
 }
}
```  
  
書きながら「後置ifほしい〜(Ruby, Python)」とか「あれっPHPの論理式の戻り値って真偽値だっけ……？(JavaScript)」となったりしました。もうだめだ何がどの言語だったか境目が曖昧になりつつある……。  
