# CSS3セレクターでストライプテーブル
最終更新日:2016年09月09日

  
※CSS3セレクターを使うとは言ってない  
  
AngularJSの基本的な記法については言及しません。  
ソースコードはこちら[github](https://github.com/perpouh/get-start-angular-design)  
  
## テーブルに表示するデータの配列を作成  
  
**main.js**  
``` JavaScript:main.js

$scope.dataList=[
 	{
 		name:'Yamada Tarou',
 		birthday:'1979-06-05',
 		phone:'090-1234-5678',
 		mail:'example@perpouh.net'
 	},
	//任意の件数繰り返し
];

```  
  
## ngRepeatを使ってテーブルを作成  
  
**index.html**  
``` HTML:index.html

<table>
	<tr>
		<th>No.</th>
		<th>Name</th>
		<th>Birthday</th>
		<th>Phone</th>
		<th>Mail</th>
	</tr>
	<tr ng-repeat="data in dataList">
		<td>{{$index+1}}</td>
		<td>{{data.name}}</td>
		<td>{{data.birthday}}</td>
		<td>{{data.phone}}</td>
		<td>{{data.mail}}</td>
	</tr>
</table>

```  
  
`{{$index}}`には0始まりでループ回数が入ってきます。行番号としては1からにしたいので`{{$index+1}}`としました。  
  
## ストライプにするためにクラスを追加  
  
**index.html**  
``` HTML:index.html

<table>
	<tr>
		<th>No.</th>
		<th>Name</th>
		<th>Birthday</th>
		<th>Phone</th>
		<th>Mail</th>
	</tr>
	<tr ng-repeat="data in dataList" ng-class="{odd:$odd,even:$even}" >
		<td>{{$index+1}}</td>
		<td>{{data.name}}</td>
		<td>{{data.birthday}}</td>
		<td>{{data.phone}}</td>
		<td>{{data.mail}}</td>
	</tr>
</table>

```  
  
　`ng-class="{odd:$odd,even:$even}"`を追加しました。  
　`$odd`と`$even`にはそれぞれbool値が自動で代入されます。`$odd`がtrueであればoddクラスを付与、というような構造です。  
　これでテーブルがストライプになりました（cssについては色を指定してるだけなので言及しません）。  
  
## マウスオーバーで行をハイライトする  
  
**index.html**  
``` HTML:index.html

<table>
	<tr>
		<th>No.</th>
		<th>Name</th>
		<th>Birthday</th>
		<th>Phone</th>
		<th>Mail</th>
	</tr>
	<tr ng-repeat="data in dataList" ng-class="{odd:$odd,even:$even,highlight:selected}"
			ng-mouseover="selected=true" ng-mouseleave="selected=false">
		<td>{{$index+1}}</td>
		<td>{{data.name}}</td>
		<td>{{data.birthday}}</td>
		<td>{{data.phone}}</td>
		<td>{{data.mail}}</td>
	</tr>
</table>

```  
  
　ちょっとごちゃごちゃしてきました。仕様です。  
　前述のngClassに`highlight:selected`を追加。ポインタが要素に乗った時(ngMouseover)と要素から離れた時(ngMouseleave)にそれぞれselectedにbool値を設定しています。  
　selected変数は行ごとに作られているのでngMouseleaveを設定しないとどんどんハイライトが増えることになります。  
　この辺はちゃんと関数作ればいいんですけどめんどくさくてビルトインディレクティブで書いたんですけど結局列ハイライトのために関数を作ることになりました。  
  
## マウスオーバーで列をハイライトする  
  
**index.html**  
``` HTML:index.html

<table>
	<tr>
		<th>No.</th>
		<th>Name</th>
		<th>Birthday</th>
		<th>Phone</th>
		<th>Mail</th>
	</tr>
	<tr ng-repeat="data in dataList" ng-class="{odd:$odd,even:$even,highlight:selected}" ng-mouseover="selected=true" ng-mouseleave="selected=false">
		<td ng-class="{highlight:selectedCol==1}" ng-mouseover="selectCol(1)" ng-mouseleave="selectCol(0)">{{$index+1}}</td>
		<td ng-class="{highlight:selectedCol==2}" ng-mouseover="selectCol(2)" ng-mouseleave="selectCol(0)">{{data.name}}</td>
		<td ng-class="{highlight:selectedCol==3}" ng-mouseover="selectCol(3)" ng-mouseleave="selectCol(0)">{{data.birthday}}</td>
		<td ng-class="{highlight:selectedCol==4}" ng-mouseover="selectCol(4)" ng-mouseleave="selectCol(0)">{{data.phone}}</td>
		<td ng-class="{highlight:selectedCol==5}" ng-mouseover="selectCol(5)" ng-mouseleave="selectCol(0)">{{data.mail}}</td>
	</tr>
</table>

```  
  
**main.js**  
``` JavaScript:main.js

（略）
$scope.selectCol=function(col){
	$scope.selectedCol=col;
}
（略）

```  
  
　HTMLがちょっと散らかりましたね。仕様です（二回目）。  
　各tdにngMouseoverを付与、selectCol関数を呼んでselectedCol変数に列番号を代入しています。ngMouseleaveのやっつけ感については触れないでください。  
  
　これでハイライト付きストライプテーブルが完成しましたヽ(´@ω@｀)ﾉ  
