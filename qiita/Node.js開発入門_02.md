# Node.js開発入門_02
最終更新日:2015年01月30日

  
 - nodeのインストール  
 - HelloWorld  
 - ノンブロッキングな処理を書く  
  
## nodeのインストール  
  
インストールは[Node.js公式](http://nodejs.org/)から行ってください。  
正しくインストールできると、コマンドラインからnodeコマンドが利用できるようになります。  
```node -v```と入力してバージョン情報が返ってくればインストールはOKです。
※当方Macbookで作業してますのでwinのことはよくわかりません

## HelloWorld

早速nodeを書きます。

```hello.js  
console.log("Hello,World!!");  
```

これだけ。
あとはコマンドラインから
```>node hello.js```  
という形で実行してやると、ターミナルにHello,World!!が表示されますヽ(´@ω@｀)ﾉ  
  
## ノンブロッキングな処理を書く  
  
node.jsはスレッドモデル（一つの処理に一つのスレッドを使う）ではなく、イベントループ（一つのスレッドで処理を全て捌く）を用いています。  
スレッドモデルとイベントループについての説明は、長くなりそうかつ本旨から外れるので割愛。代表的なところだと、Apacheがスレッドモデルでnginxがイベントループを採用しています。  
  
  
このイベントループを途中で止めない(forループなどを使うとその処理のために次の動作に移れない(＝ブロックされてしまう))ために、node.jsではコールバック関数を用います。  
  
### ブロッキングな処理  
※日本語がどうとかいう話は取り敢えず今はなしで  
  
```blocking_hello.js
for(var i=0;i<10;i++){
  console.log("Hello");
}
console.log("World");
```  
  
上記の通りだと、forループが終わるまでWorldが表示されません。これがブロッキングな処理、forループが処理を止めてしまう状態になります。  
  
結果  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
World  
  
### ノンブロッキングな処理  
  
``` nonblocking_hello.js
setTimeout(function(){
   for(var i=0;i<10;i++){
     console.log("Hello");
  }
},0);
console.log("World");
```  
  
コールバック関数を使って上記の書き方をすると、forループが次の処理を止めずに済みます。  
  
結果  
World  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
Hello  
  
…なぜ10回Helloを出したかって、Helloの間にWorldが入ってきたら処理順序が見えやすくなるかなと思ったからだったんですが、目論見が外れました。THE無意味。というか認識が間違っているんでしょうか。  
  
今回はここまでヽ(´@ω@｀)ﾉ  
作成ファイルはgithubにアップロードしていますので、もしよければ見てみてください。  
[node_sample - github (架空会社ぱあぷう)](https://github.com/perpouh/node_sample)  
  
  
しかしドットインストール、一回一回短いのはいいけど早口なのはちょっと聞き取りにくいですね……  
