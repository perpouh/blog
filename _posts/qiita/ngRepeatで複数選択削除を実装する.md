---
description: 'ngRepeatで複数選択削除を実装する'
tags:
date: '2016-06-22'
---
# ngRepeatで複数選択削除を実装する
  
・レコード一覧画面があります  
・テーブル行のそれぞれにチェックボックスがあります  
・選択されたものを一括削除します  
  
っていうのをAngularJSでやろうとしたらハマったのでメモ。  
なおソースは必要な部分だけ掻い摘んで書いてるのでコピペしても動きませんよろしく。  
  
**controller.js**  
``` js:controller.js

$http({
	method : 'POST',
	url : 'hoge/list',
	data : {
		
	}
}).success(function(data, status, headers, config) {
	$scope.hogeList=data.hogeList;
}).error(function(data, status, headers, config) {

});

```  
  
**HogeController.php**  
``` php:HogeController.php

class HogeController extends AppController
{
	public function list(){
		$hogeList=Set::extract('/Hoge/.',$this->Hoge->find('all'));
		return json_encode(compact('hogeList'));
	}
}

```  
  
**Hoge.php**  
``` php:Hoge.php

class Hoge extends AppModel
{
	public $virtualFields = array(
		// これ
        'checked' => 0
	);
}

```  
  
ﾊﾞｰﾁｬﾙﾌｨｰﾙﾄﾞでcheckedとか一個追加します。  
これを書くとng-repeat内でcheckedが利用できるようになります。  
  
**view.html**  
``` html:view.html

<tr ng-repeat="hoge in hogeList">
	<input type="checkbox" ng-model="hoge.checked" />
</tr>

```  
  
CakePHPのいつものノリで`checked[]`とか作ろうとしたら動かなくて動かなくて、`checked[$index]`とかでも動かないのでハマってました。  
ngModelの動的作成はできないってことですかねえ……上記ソースで動かすと$scope.hogeList配列のhogeレコードのcheckedに反映されます。  
全件削除は結局このhogeListをまるごとPHPにぶん投げて実装する形にしてその後仕様変更で消えました。南無。  
  
あとngChecked使って全件チェックを実装しようとしたらngCheckedで切り替えた個別チェックボックスの値はモデルに反映されなくてここでもハマってたんですが上記の通り仕様変更で消えました。  
