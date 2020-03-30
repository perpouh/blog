(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{271:function(e,t,n){"use strict";n.r(t);var s=n(28),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("・レコード一覧画面があります"),n("br"),e._v("\n・テーブル行のそれぞれにチェックボックスがあります"),n("br"),e._v("\n・選択されたものを一括削除します")]),e._v(" "),n("p",[e._v("っていうのをAngularJSでやろうとしたらハマったのでメモ。"),n("br"),e._v("\nなおソースは必要な部分だけ掻い摘んで書いてるのでコピペしても動きませんよろしく。")]),e._v(" "),n("p",[n("strong",[e._v("controller.js")])]),e._v(" "),n("div",{staticClass:"language-js:controller.js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n$http({\n\tmethod : 'POST',\n\turl : 'hoge/list',\n\tdata : {\n\t\t\n\t}\n}).success(function(data, status, headers, config) {\n\t$scope.hogeList=data.hogeList;\n}).error(function(data, status, headers, config) {\n\n});\n\n")])])]),n("p",[n("strong",[e._v("HogeController.php")])]),e._v(" "),n("div",{staticClass:"language-php:HogeController.php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\nclass HogeController extends AppController\n{\n\tpublic function list(){\n\t\t$hogeList=Set::extract('/Hoge/.',$this->Hoge->find('all'));\n\t\treturn json_encode(compact('hogeList'));\n\t}\n}\n\n")])])]),n("p",[n("strong",[e._v("Hoge.php")])]),e._v(" "),n("div",{staticClass:"language-php:Hoge.php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\nclass Hoge extends AppModel\n{\n\tpublic $virtualFields = array(\n\t\t// これ\n        'checked' => 0\n\t);\n}\n\n")])])]),n("p",[e._v("ﾊﾞｰﾁｬﾙﾌｨｰﾙﾄﾞでcheckedとか一個追加します。"),n("br"),e._v("\nこれを書くとng-repeat内でcheckedが利用できるようになります。")]),e._v(" "),n("p",[n("strong",[e._v("view.html")])]),e._v(" "),n("div",{staticClass:"language-html:view.html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\n<tr ng-repeat="hoge in hogeList">\n\t<input type="checkbox" ng-model="hoge.checked" />\n</tr>\n\n')])])]),n("p",[e._v("CakePHPのいつものノリで"),n("code",[e._v("checked[]")]),e._v("とか作ろうとしたら動かなくて動かなくて、"),n("code",[e._v("checked[$index]")]),e._v("とかでも動かないのでハマってました。"),n("br"),e._v("\nngModelの動的作成はできないってことですかねえ……上記ソースで動かすと$scope.hogeList配列のhogeレコードのcheckedに反映されます。"),n("br"),e._v("\n全件削除は結局このhogeListをまるごとPHPにぶん投げて実装する形にしてその後仕様変更で消えました。南無。")]),e._v(" "),n("p",[e._v("あとngChecked使って全件チェックを実装しようとしたらngCheckedで切り替えた個別チェックボックスの値はモデルに反映されなくてここでもハマってたんですが上記の通り仕様変更で消えました。")])])}),[],!1,null,null,null);t.default=a.exports}}]);