---
description: 'monacaアプリからajax通信ができなくてハマった！対処法まとめ'
tags:
date: '2015-05-31'
---
# monacaアプリからajax通信ができなくてハマった！対処法まとめ
  
SEOの記事読んだあとなのでタイトルが胡散臭くなりました  
  
## 状況  
  
```script.js

$(function(){
		$.ajax({
				type:"post",
				url:"http://VPSドメイン/driver.json",
				data:{
					// パラメータ
				},
				dataType:"jsonp",
				success:function(data){
					console.log("succeed");
				},error : function(XMLHttpRequest, textStatus, errorThrown) {
					console.log("XMLHttpRequest : " + XMLHttpRequest.status);
					console.log("textStatus : " + textStatus);
					console.log("errorThrown : " + errorThrown.message);
				}
		});
}

```  
  
はじめはいつも通りAccess-Control-Allow-Originに引っかかったのでｱｰﾊｲﾊｲって思って下記をサーバー側に追加。  
  
```.htaccess
Header append Access-Control-Allow-Origin: *
Header set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"
```  
  
これでAndroidは通った。しかしiPhoneが通らない。  
エラーは以下のとおり。  
  
![20150531121419.jpg](/blog/assets/img/9264b1c7-6c29-6784-55e0-a7eb7d6cb2b9.jpeg "20150531121419.jpg")  
※220は別件なのでおかまいなく  
  
412番エラー。Precondition Failed(前提条件失敗)。なんじゃいそりゃあ、と思ったんですが、Google先生に尋ねたところ  
  
>If-Unmodified-Since(クライアントがもっているキャッシュの更新確認)  
クライアントがもっているキャッシュ日時がサーバの最終更新日時よりも新しい場合  
  
>If-Match(ブラウザがもっているETag値確認)  
クライアントがもっているETag値に一致するリソースがサーバに存在しなかった場合  
  
>If-None-Match(ブラウザがもっているETag値確認)  
クライアントからのリクエストメソッドが「GET」または「HEAD」以外の場合  
  
とのことだったので、キャッシュ塞げばなんとかなるろーかと判断。  
  
## 対処  
  
ajaxで対処した。  
  
```script.js
		$.ajax({
				type:"post",
				url:"http://VPSドメイン/eventList.json",
				data:{
					// パラメータ
				},
				async : false,
				cache : true,
				beforeSend : function(xhr) {
					xhr.setRequestHeader("If-Modified-Since",
					"Thu, 01 Jun 1970 00:00:00 GMT");
				},
				dataType:"jsonp",
				success:function(data){
					console.log("succeed");
				},
				error:function(error){
					console.log("error");
				}
		});
```  
  
これの他、urlの末尾にGETパラメータとしてDate.now()を入れてもうまくいった。  
