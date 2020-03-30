# 入力コントロールのフォントサイズを14pxにしたらモバイル端末からそのコントロールにfocusしたタイミングで画面が自動ズームされる件について
最終更新日:2019年08月14日

## 入力コントロールのフォントサイズを14pxにしたらモバイル端末からそのコントロールにfocusしたタイミングで画面が自動ズームされる件について  
  
```css
input[type=text] {
  font-size: 16px;
  transform: scale(0.8);
}
```  
  
どうもコントロールのフォントサイズが16px未満だと自動でズームされるようです。まあ級数的に見づらいレベルに入っているのは事実なので親切なんでしょうけど、崩れは崩れなので修正。  
  
## 上記対応をやったらAndroid標準ブラウザで表示が崩れた件について  
  
```css
input[type=text] {
  font-size: 16px;
  transform: scale(0.8);
  -webkit-transform: scale(0.8);  /* ←これを追加 */
}
```  
どうもscale()がうまく効いていなかったっぽい。  
  
## 参考  
[iOSでinputのフォーカス時に画面がズームするのを防ぐ](https://qiita.com/volkuwabara/items/b285cc312587c73a4812)  
[(CSS)Android標準ブラウザで崩れる場合の対処](https://qiita.com/kt-tsutsumi/items/bd2933b5fd4028d73979)  
[W3Q Archive](http://w3q.jp/t/10468)  
  
全人類がChrome使ってくれればいいのに。  
