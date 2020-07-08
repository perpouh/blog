---
description: 'CakePHPのコントローラを階層化する'
tags:
date: '2016-01-31'
---
# CakePHPのコントローラを階層化する
  
CakePHPでコントローラを物理的にもURL的にも階層化したい。  
**//~~~/api/user/index```でアクセスしたい。**  
```app/Controller/Api/UserController.php``` に ```http://~~~/api/user/index```でアクセスしたい。

```bootstrap.php  
App::build(array(  
		'Controller'	=> array( ROOT.DS.APP_DIR.DS.'Controller'.DS.'Api'.DS )  
));  
```

```routes.php  
	Router::connect('/api/:controller/', array('action' => 'index'));  
	Router::connect('/api/:controller/:action', array());  
```

これでOKです。
UserController.php以外のコントローラもアクセスできますし（フォルダごとに設定は必要）、取り敢えずURLに問題なし。
然しViewクラスとかの接続がちょっと変わってしまうみたいなので、
そのへんは現状のWBSと相談した結果Controller/直下に親クラスかませて無理やり解決しました。
おそらくCakePHPのルール的にはあんまり良くないのですが、まあURLは綺麗になったよねってことで。

今回はAPIしか作成しないので大きな問題は出てきていません。Modelの接続もオッケー、Authコンポーネントも使えてます。

おとなしくFuelPHP使えばいいのに

----- 追記 -----

上記、

```routes.php  
Router::connect('/:dir/:controller/', array('action' => 'index'));  
`````

とかでも動くんですね(bootstrap.phpは書かなきゃいけない様子)。
知らなかったとはいえ拙いことを書いて申し訳ありませんでした。
/:dirであるとか/:langであるとか、好きな名前で書いてやると今度はリンクを貼るときに
array('dir'=>'hoge','controller'=>'fuga')とかで動いてくれて便利です。名前付きパラメータで取れますし。

ディレクトリとか言語とかでURLがごちゃごちゃになってきたら第三引数に正規表現書いて判断させます。
おとなしくFuelPHP使えばいいのに（二回目）
