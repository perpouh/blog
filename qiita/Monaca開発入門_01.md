  
ヽ(´@ω@｀)ﾉ  
  
## ログイン機能の作成  
  
RSSから読みたい記事をストックする機能を入れたかったので、ログインを実装します。  
参照:[monaca公式リファレンス](http://docs.monaca.mobi/cur/ja/reference/javascript/cloud/user/)  
  
### 画面  
![ログイン画面.png](/../.vuepress/public/assets/img/7e6cd89d-6678-0e15-7eb9-3e302381c87f.png "ログイン画面.png")  
  
  
ユーザーIDとパスワードを入れて新規登録押せば自動で登録されてログインまでできてしまうザル。  
  
### ソースコード  
  
```login.js
$("#regist").click(function(){
        var username=$("#username").val();
        var password=$("#password").val();
        monaca.cloud.User.validate(username).done(function(result){
            monaca.cloud.User.register(username, password).done(function(result){
               console.log("Hello, " + result.user._username);
               location.href="#Index";
            }).fail(function(err)
            {
               console.log("Err#" + err.code +": " + err.message);
            });
        }).fail(function(err){
            alert("validation failued !!");
        });
    });

    $("#login").click(function(){
        var username=$("#username").val();
        var password=$("#password").val();
        monaca.cloud.User.login(username, password).done(function(result){
           console.log("Hello again, " + result.user._username);
           location.href="#Index";
        })
        .fail(function(err)
        {
           console.log("Err#" + err.code +": " + err.message);
        });
        
    }); 
```  
  
`$("#regist")`と`$("#login")`がそれぞれ登録ボタン、ログインボタンと対応します。  
`$("#username")`と`$("#password")`はテキストボックスです。  
ログインができ次第、location.hrefでページ遷移をしています。  
  
ここで私はハマったのですが、どうやら別のhtmlに遷移するとセッションが切れてしまうようで、ログイン状態を維持できなくなりました。  
上記事項を避けるために[jQueryMobile](http://jquerymobile.com/)を導入し、ひとつのhtmlで複数ページを作成しています。  
  
### 設定  
  
monaca cloud側の設定は画面左メニュー>クラウド>左上歯車マークより「バックエンド設定」>ユーザー認証  
ユーザー名の最短文字数、パスワードの最短文字数はここから設定します。  
  
  
KobitoとQiitaで表示違うのなんとかならんのかな(´@ω@｀)  
