線形代数および微分・正規分布をやるにあたり、Markdownで数式を書く必要性がでたのでそのあたりの設定をやります。  
私が記事の執筆に使っているのはSublimeText3で、パッケージはOmniMarkupPreviewerです。書きながらリアルタイムでプレビューできて便利なやつ。  
  
現在の設定はこう。  
  
```
{
  "html_template_name": "github",
    "renderer_options-MarkdownRenderer": {
        "extensions": ["tables", "fenced_code", "codehilite"]
    },
    "mathjax_enabled": true
}
```  
  
`mathjax_enabled` をtrueにすると、LaTexの記法が使えるようになります。  
  
```math
F(x) = \int_{-\infty}^{x}f(\xi)d\xi 
     = \frac{1}{\sqrt{2 \pi} \sigma}
       \int_{-\infty}^{x}\exp\{-\frac{(\xi - m)^{2}}{2 \sigma^{2}}\}d\xi
```  
  
とはいえこの記法自体が全くわからないのでやっていきましょう以下！  
  
## Mathjax記法  
  
### インライン表記  
  
インラインで数式を書く場合、`$` と `$` で囲みます。  
  
```
ここで $f(x) = 2x + 3$ とする。
```  
  
ここで $f(x) = 2x + 3$ とする。  
  
### ディスプレイ数式  
  
ディスプレイ数式……。慣れない言葉。この場合、`\[` と `\]` で囲みます。  
  
```
\[ y= x^4 + a x^3 + b x^2 + c x + d \]
```  
  
```math
y= x^4 + a x^3 + b x^2 + c x + d 
```  
  
### 数学の記法  
  
|名前|記法|例|結果|  
|---|---|---|---|  
|上つき添字|^{添字}|`x^{2}`|$x^{2}$|  
|下つき添字|_{添字}|`n_{i}`|$n_{i}$|  
|分数|\frac{分子}{分母}|`\frac{1}{3}`|$\frac{1}{3}$|  
|n乗根|\sqrt{引数}|`\sqrt{2}`|$\sqrt{2}$|  
  
中括弧ごとプレースホルダ扱いで見てましたが、中括弧は中括弧として記述するものなんですねこれ。  
ここまでなら割とサクッと覚えて書けそう。fracは聞き慣れないのでしばらく迷いそうですが……  
  
### 主な数学記号  
  
#### 和: \sum  
  
```
\sum_{k=0}^{n}{k}_{i}\
```  
結果  
  
```math
\sum_{k=0}^{n}{k}_{i}
```  
  
うわっとなりますけどよくよく見れば上付添字 `^` と下付添字 `_` がぐちゃっとなってるだけなのでそんな難しくもないですね。脳内でエンコード/デコードするのに時間はかかりますが。あとsumの引数がわかりにくいか……。  
sumの引数（上付添字と下付添え字）は前後逆でもいけました。この辺プログラムよりは柔軟なのかな。勘が掴めない。  
  
#### 積分: \int  
```
\int_{0}^{\infty}{f(x) dx}
```  
  
```math
\int_{0}^{\infty}{f(x) dx}
```  
  
intはintegerではなくintegralですね。そしてしれっと `\infty` が入ってきていますね。  
  
#### 省略記号: \cdots  
  
```
1, 2, \cdots, n
```  
  
```math
1, 2, \cdots, n
```  
  
これはいまいち恩恵を感じない。  
  
### 行列  
  
```
\left(  
\begin{array}{cc}
a & b \\
c & d
\end{array}
\right)
\left(
\begin{array}{c}
x \\
y
\end{array}
\right)
=
\left(
\begin{array}{l}
a x + b y\\
c x + d y
\end{array}
\right)
```  
  
```math
  \left(  
  \begin{array}{cc}
  a & b \\
  c & d
  \end{array}
  \right)
  \left(
  \begin{array}{c}
  x \\
  y
  \end{array}
  \right)
  =
  \left(
  \begin{array}{l}
  a x + b y\\
  c x + d y
  \end{array}
  \right)
```  
  
ぎゃー。これは正直もう数式としても意味がわかっていません。解説行きます。  
行列は `\begin{array}{行列の書式}` で始まり、`\end{array}` で終わります。行列の書式に使われる文字は `l`(左揃え)、`c`(中央揃え)、`r`(右揃え)のみっつです。  
各行の列の要素は `&` で区切り、`\\` を改行とします。最後の行には必要ありません。  
`\left` と `\right` は何かと思ったら大きさの変わる括弧なのだそうです。へえ……？（もうちょっとわかりやすいメソッド名付けてほしい）  
  
よくわかっていないとはいえ、線形代数やるなら行列は必要なので頑張ります。為せば成る、為さねば成らぬの気持ちです。  
  
参考  
[LaTeXの使い方 - 石原研究所](http://www.ishilab.net/~ishihara/LaTeX/index.html)  
[MathJax サンプル - Qiita](https://qiita.com/xolmon/items/f581bf6e1dc5426c8853)  
  
この記事はマークダウンで書いた後Qiita記法に直す謎の手間を加えて作成されました。  
