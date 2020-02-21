# VSCodeの拡張機能を作った

TypeScript初挑戦。

[カクヨム](https://kakuyomu.jp)という小説投稿サイトがある。  
ここでは[カクヨム記法](https://kakuyomu.jp/help/entry/notation)というものを用いて、ルビや傍点を処理できる。  
しかしながら当方にはWeb上で文章の塊を書く趣味はない。文章は必ずローカルで書き、コピーし、Webフォームにペーストして投稿する。さもなくば消える。インターネットに対する信用度が00年代初頭からあまり上がっていないのだと思う。  
加えて、このカクヨムのプレビューが割と見づらい。毎度タブを移動する動きになるため、上から下に毎度スクロールしなくてはならない。だるい。めんどくさい。VSCodeでリアルタイムプレビューしたい。

益体のない文章を十数万字も書きながらそのちょっとのスクロールを面倒に感じるあたり、そしてそこからよしプログラム書こうとなるあたりがエンジニアなのだと思う。我ながらどう考えても手間暇の価値基準が狂っている。

まあでもルビくらいはなんてことない。String.prototype.replaceすればいいだけなので。

リポジトリはこちら
<link-card 
          url="https://github.com/perpouh/kkympreviewer"
          siteName="github.com"
          thumbnail="https://avatars0.githubusercontent.com/u/8610298?s=400&v=4"
          title="perpouh/kkympreviewer"
          description="カクヨム記法プレビューワ(VSCode拡張)"
          />

まず公式サイトを参考に、プロジェクトの雛形を作ります。  
[Your First Extension - Visual Studio Code](https://code.visualstudio.com/api/get-started/your-first-extension)

```bash
npm install -g yo generator-code
```

```bash
yo code

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Which package manager to use? npm
```

F5を押してデバッグモードを開き、コマンドパレットからハローワールドを実行。動かない。  
詰むの早いな？　と思いながら`npm install`したりVSCodeのアップグレードしたりしたら動きました。あとは愛用している拡張のひとつである[vscode-markdown](https://github.com/yzhang-gh/vscode-markdown)のソースを参考にもりもり書きます。

## 変換した文章をどこに表示するか？

[vscode-markdown](https://github.com/yzhang-gh/vscode-markdown)のコードを読んだ結果、Webviewに表示しているらしいことがわかりました。[公式ドキュメントのWebviewの項](https://code.visualstudio.com/api/extension-guides/webview)を見に行くと、可愛い猫ちゃんがキーボードをばしばししていたので集中力とやる気を失いました。靴下猫ちゃんかわいい。

```TypeScript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}
```

二十分ほどで気を取り直してWebviewを表示するためのコードをコピペし、表示を確認。OK。HTMLの出し方もわかったので、ここに「今開いているテキスト」の内容を投入します。

## どのようにして「現在開いているテキストの内容」を取り出せるか？

[vscode-markdown](https://github.com/yzhang-gh/vscode-markdown)の[vscode-markdown/src/preview.ts](https://github.com/yzhang-gh/vscode-markdown/blob/master/src/preview.ts)を見ると

```TypeScript
export function activate(context: ExtensionContext) {
//(略)
    // Try preview when this extension is activated the first time
    autoPreviewToSide(window.activeTextEditor);
//(略)
}
function autoPreviewToSide(editor: TextEditor) {
//(略)
    let doc = editor.document;
//(略)
}
```

のような記述があります。これが良いような気がします。引数の型がわかったので[公式ドキュメントのTextEditorの項](https://code.visualstudio.com/api/references/vscode-api#TextEditor)を見に行きます。  
どうやらwindow.activeTextEditor.document.getText()で「現在開いているテキストの内容」が取れそうです。

つまりこう。

```TypeScript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.Two,  // 2カラムにしたかったので変更
        {}
      );

      let editor = window.activeTextEditor;
      if(!editor) {
        return;
      }
      // editor.addEventListener()
      let doc = editor.document;
      panel.webview.html = getWebviewContent(doc);
    })
  );
}

function getWebviewContent(doc: TextDocument) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    ` + doc.getText() + `
</body>
</html>`;
}
```

OK。  
これではテキストの取得が一回のみなので、テキストを変更したときにWebview側の表示も変わるようにしましょう。

## いわゆるwatchてきな。

おそらく`addEventListener`みたいな、あるいは`watch()`のような何かがあるのだろうと検討をつけて探します。探すというかまあ、すぐ下に[TextDocumentContentChangeEvent](https://code.visualstudio.com/api/references/vscode-api#TextDocumentContentChangeEvent)という項目があるので探すまでもなくこれです。  
`TextDocumentChangeEvent`でページ内検索をすると、どうもこれは`workspace`から発生してくるらしいことが見えます。

つまりこう。

```TypeScript
    vscode.workspace.onDidChangeTextDocument(event => {
      panel.webview.html = getWebviewContent(event.document);
    });
```

書きながら「これもしかして作業ファイル切り替えてもおなじWebviewにプレビューされるのでは？と思い試したところ、その通りでした。まあいいか別に。

## ついでなので作業ファイルを切り替えたときにもプレビューを更新したい

[vscode-markdown](https://github.com/yzhang-gh/vscode-markdown)を見た感じたぶんここでしょう。

```TypeScript
    window.onDidChangeActiveTextEditor(editor => {
        autoPreviewToSide(editor);
    });
```

これを

```TypeScript
  vscode.window.onDidChangeActiveTextEditor(editor => {
    if (!editor) {
      return;
    }
    let doc = editor.document;
    panel.webview.html = getWebviewContent(doc);
  });
```

こんな感じ。  
現在の`panel`だとクロージャから読めないので宣言を外に出します。なんかちょっとアンチケースのような気がします。

```TypeScript
import * as vscode from 'vscode';

let panel: vscode.WebviewPanel;

export function activate(context: vscode.ExtensionContext) {
  (以下略)
}
```

これで無事、作業ファイルを切り替えたときにもプレビューを更新することができました。

## ちなみに

あんまり面白くないので触れていませんが、ルビと傍点の処理は

```TypeScript
function convertToHtml(txt: string) {
  return txt.replace(/\n/g, "<br />")
    .replace(/[\|｜](.+?)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>')
    .replace(/[\|｜](.+?)（(.+?)）/g, '<ruby>$1<rt>$2</rt></ruby>')
    .replace(/[\|｜](.+?)\((.+?)\)/g, '<ruby>$1<rt>$2</rt></ruby>')
    /* 漢字の連続の後に括弧が存在した場合、一連の漢字をベーステキスト、括弧内の文字をルビテキストとします。 */
    .replace(/([一-龠]+)《(.+?)》/g, '<ruby>$1<rt>$2</rt></ruby>')
    /* ただし丸括弧内の文字はひらがなかカタカナのみを指定できます。 */
    .replace(/([一-龠]+)（([ぁ-んァ-ヶ]+?)）/g, '<ruby>$1<rt>$2</rt></ruby>')
    .replace(/([一-龠]+)\(([ぁ-んァ-ヶ]+?)\)/g, '<ruby>$1<rt>$2</rt></ruby>')
    /* 括弧を括弧のまま表示したい場合は、括弧の直前に縦棒を入力します。 */
    .replace(/[\|｜]《(.+?)》/g, '《$1》')
    .replace(/[\|｜]（(.+?)）/g, '（$1）')
    .replace(/[\|｜]\((.+?)\)/g, '($1)')
    /* 二重山括弧内を傍点付き文字列に変換する */
    .replace(/《《(.+?)》》/g, function (match, p1, offset, string) {
      var boten = "﹅".repeat(p1.length);
      return "<ruby>" +p1+ "<rt>" + boten + "</rt></ruby>";
    });
}
```

でやっています。  
カクヨムだと傍点の画像があるっぽいんですけど、ここはめんどくさいので「ぼうてん」で変換して出てくるこいつ `﹅` を文字数分ルビとして振っています。  
このコード（傍点以前）たしかインターネットのどこかからコピペしたもののはずですが、元がどこだったか見つからない……。同じサイトからコピペしてるらしい記事はいくつか出るんですが、少なくとも昨年5月よりは前のはずなので（昨年5月に別のコードに書き付けている）どれも違う。どこだったかメモっておくべきだった……。

## 感想

TypeScriptで書かれているので変数の型がわかりやすく、APIドキュメントをたどりやすくて助かりました。これいいな。  
ここからgithubで文章保存して何ならPDFも直接吐きたい。マークダウンをPDFにする拡張はあるっぽいのでやろうと思えばいけるのでは。

## で、

作ったはいいんですけど、これもしかして公開しないと使えないんですかね。毎回デバッグから開くのは嫌なんですけど。