(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{617:function(t,e,n){"use strict";n.r(e);var s=n(55),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"個性的な三種類のツールチップ"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#個性的な三種類のツールチップ"}},[t._v("#")]),t._v(" 個性的な三種類のツールチップ")]),t._v(" "),n("p",[t._v("会社帰りに川島瑞樹さんと高垣楓さんと待ち合わせて焼き鳥屋でビール飲みたい")]),t._v(" "),n("h2",{attrs:{id:"ngmouseover-ngmouseleaveでツールチップの表示-非表示を切り替え"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ngmouseover-ngmouseleaveでツールチップの表示-非表示を切り替え"}},[t._v("#")]),t._v(" ngMouseOver/ngMouseLeaveでツールチップの表示/非表示を切り替え")]),t._v(" "),n("p",[n("strong",[t._v("index.html")])]),t._v(" "),n("div",{staticClass:"language-HTML:index.html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n<p class="text">\n\tLorem ipsum dolor sit amet, \n\t<span class="clickable" ng-mouseover="showTip($event,1)" ng-mouseleave="tip=0" >\n\t\tconsectetur\n\t</span>\n\t<span class="tooltip" ng-style="toolTipStyle" ng-show="tip==1">\n\t\tGottes Tod\n\t</span> adipiscing elit.\n</p>\n\n')])])]),n("p",[t._v("神は死んだ")]),t._v(" "),n("p",[n("strong",[t._v("main.js")])]),t._v(" "),n("div",{staticClass:"language-JavaScript:main.js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n$scope.showTip=function(event,num){\n\t$scope.tip=num;\n\t$scope.toolTipStyle={'left':event.offsetX+'px','top':event.offsetY+'px'};\n}\n\n")])])]),n("p",[t._v("$event引数を使ってツールチップの表示位置を調整しています。"),n("br"),t._v("\n　offsetXとoffsetYが親要素からの位置？っぽかったのでpに"),n("code",[t._v("position:relative")]),t._v("をかけました。なんとなく想定通りの場所になりました。だんだんCSSがやっつけ作業になっていきます。")]),t._v(" "),n("h2",{attrs:{id:"ngmousemoveでツールチップの表示位置を変更"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ngmousemoveでツールチップの表示位置を変更"}},[t._v("#")]),t._v(" ngMouseMoveでツールチップの表示位置を変更")]),t._v(" "),n("p",[n("strong",[t._v("index.html")])]),t._v(" "),n("div",{staticClass:"language-HTML:index.html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n<p class="text">\n\tLorem ipsum dolor sit amet, \n\t<span class="clickable" ng-mouseover="showTip($event,1)" ng-mousemove="moveTip($event)"  ng-mouseleave="tip=0" >\n\t\tconsectetur\n\t</span>\n\t<span class="tooltip" ng-style="toolTipStyle" ng-show="tip==1">\n\t\tGottes Tod\n\t</span> adipiscing elit.\n</p>\n\n\n')])])]),n("p",[n("strong",[t._v("main.js")])]),t._v(" "),n("div",{staticClass:"language-JavaScript:main.js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n$scope.moveTip=function(event){\n\t$scope.toolTipStyle={'left':event.offsetX+'px','top':event.offsetY+'px'};\n}\n\n")])])]),n("h2",{attrs:{id:"timeoutを使ってツールチップの消失を遅延させる"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timeoutを使ってツールチップの消失を遅延させる"}},[t._v("#")]),t._v(" $timeoutを使ってツールチップの消失を遅延させる")]),t._v(" "),n("p",[t._v("日本語が来い")]),t._v(" "),n("p",[n("strong",[t._v("index.html")])]),t._v(" "),n("div",{staticClass:"language-HTML:index.html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n<p class="text">\n\tLorem ipsum dolor sit amet, \n\t<span class="clickable" ng-mouseover="showTip($event,1)" ng-mousemove="moveTip($event)"  ng-mouseleave="tip=0" >\n\t\tconsectetur\n\t</span>\n\t<span class="tooltip" ng-style="toolTipStyle" ng-show="tip==1">\n\t\tGottes Tod\n\t</span> adipiscing elit.\n</p>\n\n')])])]),n("p",[t._v("ngMouseLeaveで関数を呼び出す中で$timeoutを用いて遅延を発生させます。"),n("br"),t._v("\n　$timeoutは$scopeと同じく読み込んでやらないと使えないので注意。")]),t._v(" "),n("p",[n("strong",[t._v("main.js")])]),t._v(" "),n("div",{staticClass:"language-JavaScript:main.js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\nangular.module('sample', []).controller('IndexController',\n\t\t[ '$scope', '$timeout', function($scope, $timeout) {\n\t\t\t$scope.showTip=function(event,num){\n\t\t\t\t$scope.tip=num;\n\t\t\t\t$scope.toolTipStyle={'left':'350px','top':'-8px'};\n\t\t\t}\n\t\t\t\n\t\t\t$scope.hideTip=function(){\n\t\t\t\t$timeout(function(){\n\t\t\t\t\t$scope.tip=0;\n\t\t\t\t},3000);\n\t\t\t}\n\t\t} ]);\n\n")])])]),n("p",[t._v("あーちなみにこのコードだとツールチップはいくつあっても一つしか表示されないので（遅延してる間に別のツールチップを開こうとすると最初のツールチップが消える）、その場合は各ツールチップにboolean持たせるなどして対処してください。")])])}),[],!1,null,null,null);e.default=a.exports}}]);