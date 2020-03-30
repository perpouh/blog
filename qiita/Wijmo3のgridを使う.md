# Wijmo3のgridを使う
最終更新日:2017年08月31日

　Google日本語入力に甘やかされて生きているので客先のことえりがつらいヽ(´@ω@`)ノ  
　Wijmoの話しまーす。  
  
## Wijmoとは  
  
　株式会社グレープシティのHTML5/Javascript製品です。→[Wijmo](http://wijmo.c1.grapecity.com/)  
　HTML上でExcelライクなUIを作成したりできます。  
　この会社、フォーガンシーも含め私のExcel嫌いをガンガン踏み抜くすてきな会社です（地声）エクセルがやりたいならエクセルでやれよ（地声）  
　でもたぶんあれだよね、これ系の、今までExcelでやってた内容に拘るお客様、どっかの低俗SIerとかいう武器商人みたいなのに業務改善とか言われてわけもわからず発注させられちゃってるんだろうし、そういう発注を受けちゃったシステム屋を助けてくれるのがWijmoだと思うと憎む気にもなれないような……。  
　大体にして、今までExcelでやってたのと同じことを！　と言い出すお客様、そんなに業務改善を望んでいないような気がするんだよな……。経験上。不慣れなものが入るとそれだけで業務は圧迫されるし。何がどう良くなって欲しいかのイメージも特に持ってない、みたいな。  
  
　閑話休題。  
　ギョームでWijmoを使ったのでｻﾞﾗｯとした感想と忘備録。備忘録。  
  
## grid  
  
　[参考](http://demo.grapecity.com/wijmo/3/WidgetExplorer/?widget=Grid&sample=%E6%A6%82%E8%A6%81)  
　表を作る。ソートとフィルタリングができるのはたいへんに良いことだと思う。  
　angularJS知ってればそっちの方が楽じゃね？　と思ったりしますけど、取っ付きやすさコードの短さで言えばWijmoに軍配かしらといった具合。書かないで済むし。  
　  
## gridの入力制限  
  
　inputTypeプロパティにnumberとかbooleanを指定してやることで割と自動で完了。booleanはチェックボックスになる。  
　ただ、MySQLはboolean=tinyintになってしまうので、ちょっとこの辺りは食い合わせが悪い。postgreならそんなに腐心しなくて済んだのかもしれない。腐心ってほど悩みゃしませんでしたが。  
　ドキュメントは[このへん](http://wijmo.c1.grapecity.com/docs/wijmo/webframe.html#ConfiguringColumns.html)と[このへん](http://wijmo.c1.grapecity.com/docs/wijmo/webframe.html#Wijmo~wijmo.grid.IColumn.html)を見るとデータ型の設定はわかりやすいかなと思います。  
　ただ検索するとWijmo5のFlexGridの話ばっかりじゃんじゃか出てきてちょっと困りました。  
　  
## ページング  
  
　grid初期化の際に`allowPaging : true,pageSize:10`とか設定してやると割と自動でページネーションが表示される。便利。  
　ただ新規行追加の際、何も考えずdata.push(newRow)みたいなことをしたら一番最後のページの一番下に行追加されるというめんどっちい目に遭ったので注意。unshiftをオススメする。  
　初期化時の設定項目とかはこちら:[ドキュメント](http://wijmo.c1.grapecity.com/docs/wijmo/webframe.html#GridQuickStart.html)  
  
## 特定列の入力コントロールを変更する  
  
### プルダウンメニュー  
  
　[参考](http://demo.grapecity.com/wijmo/3/WidgetExplorer/?widget=Grid&sample=%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF)。  
　Gridの特定列(のいずれかのカラム)が選択された時にそのカラムにinputコントロールを物理的にぶちこむスタンス。ヤダ強引。  
　ちなみに、ドキュメント見ながらデータ配列を`[{label:"hoge",value:"moge"}]`の形にしてみたのだけど、値をうまく取得できず……。謎い。ラベルなんか取れても困る。  
　Excelをモデルにしてると考えれば表面の文字が取れてくるのはまったく自然なことで、マスタデータの表示名を表示してIDを取得〜みたいな頭のいいことはやらないで、すべてベタ書きでやると一番楽だと思います。  
  
### カレンダー  
  
　上記を参考に  
  
```js
    $("<input />").width("100%").val(args.cell.value()).appendTo(
            args.cell.container().empty()).wijinputdate({
                dateFormat: 'yyyy-MM-dd HH:mm:ss'
    }).focus();
```  
  
みたいなこと書いたら動いた。力こそパワー。  
  
## 雑感  
  
　個人的には、PHPとかJavaのフレームワークに組み込んでそっちのコントローラと一緒に扱うよりは、APIとajax通信でやった方が使い勝手がよい、という印象。  
　ソースコードとかシステムとしてのスマートさよりも楽さの方が目立ちます。難しいこと考えなければそれなりのものがばしっと作れる。DBの正規化とか考えない方がよさそうです。  
