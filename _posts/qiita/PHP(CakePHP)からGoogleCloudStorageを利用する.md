---
description: 'PHP(CakePHP)からGoogleCloudStorageを利用する'
tags:
date: '2015-06-02'
---
# PHP(CakePHP)からGoogleCloudStorageを利用する
  
## 前提条件  
 - GCP登録済み  
 - GCS登録済み  
 - [google-aapi-php-client](https://github.com/google/google-api-php-client)を利用  
  
## google-api-php-clientの準備  
私は今回アプリケーションのルート(appと同階層)のvendorsを使用しました。app/Vendorとどう違うのかよくわかってません。  
DLしたクライアントのsrc/Googleをvendorsの下にコピー。  
app/Config/bootstrap.phpに以下の行を追加。  
  
```bootstrap.php
require_once(ROOT.DS."vendors/Google/autoload.php");
```  
  
## 認証  
今回はGoogleCloudStorageを扱うためのモデルをひとつ作成しました。  
GoogleDevelopersConsoleの左カラム、APIと認証>認証情報より新しいクライアントIDを作成。  
今回はユーザーに認証を求めず、PHPアプリケーション越しの操作となりますのでサービスアカウントを作成。  
JSONキーを利用しますのでそちらを選択してください。  
  
参考にしたサイトがこちら：[メモ用紙](http://d.hatena.ne.jp/scientre/20140626/google_analytics_api)  
実際に書いたソースが以下。  
  
**Storage.php**  
```php:Storage.php
    function __construct()
    {
        $this->client = new Google_Client();
        $this->client->setApplicationName('My Application');
        
        $this->client->setClientId($this->client_id);
        $this->client->setAssertionCredentials(new Google_Auth_AssertionCredentials($this->service_account_name, array(
            Google_Service_Storage::DEVSTORAGE_READ_WRITE
        ), file_get_contents(ROOT.DS."vendors/key/" . $this->key_file)));
    }
```  
  
CakePHPのAppModel継承クラスなのでstaticの使い方はしませんでした。  
コントローラからはふつうに```$this->Storage->get()```とかで使う想定です。  
  
## ファイルアップロード  
  
**Storage.php**  
```php:Storage.php
public function upload($filename,$binary)
    {
        $contentType="";
        if(strncmp($binary,'89 50 4E 47',11)){
            $contentType="png";
        }else if(strncmp($binary,'FF D8 FF',8)){
            $contentType="jpeg";
        }else if(strncmp($binary,'47 49 46 38',11)){
            $contentType="gif";
        }else{
            return false;
        }
        
        // ストレージサービスを作成する
        $storage = new Google_Service_Storage($this->client);
        
        // アップロードするファイル名とデータ
        $name = $filename.'.'.$contentType;
        $data = $binary;
        
        // ストレージオブジェクトを作成する
        $obj = new Google_Service_Storage_StorageObject();
        $obj->setName($name);
        
        // アップロードする
        $result=$storage->objects->insert($this->default_bucket_name, $obj, [
            'name' => $name,
            'data' => $data,
            'uploadType' => 'media',
            'mimeType' => 'image/'.$contentType,
            'predefinedAcl' => 'publicread'
        ]);
    }
```  
  
わざわざバイナリ読んで拡張子の判定してるのはちょっとこちらの都合です。  
$_FILESそのままもらえるならファイル名の末尾取ればいいと思います。  
  
27行目、$storage->objects->insertの第三引数について。  
この後getメソッドを書いてPHP越しに画像を表示することを目標としていますので、mineTypeとpredefinedAclは設定が必要です。  
mineTypeは設定しないと自動でapplication/octet-streamになってしまい、ブラウザで表示できませんでした。  
  
参考：[stackoverflow](http://stackoverflow.com/questions/20060445/cant-set-content-type-to-google-storage-with-the-google-php-client)  
  
## ファイル表示  
  
**Storage.php**  
```php:Storage.php
    public function get($name){
        // ストレージサービスを作成する
        $storage = new Google_Service_Storage($this->client);
        
        // ストレージオブジェクトを作成する
        $obj = new Google_Service_Storage_StorageObject();
        
        // 取得する
        $data = $storage->objects->get($this->default_bucket_name, $name);
        
        // 表示する
        header("Content-Type:".$data->getContentType());
        $content=file_get_contents($data->getMediaLink());
        echo $content;
    }
```  
  
ここは割と素直に取得→表示、です。  
upload時点でpredefinedAclを指定していない場合、ファイルの一般公開がされていませんので、file_get_contentsができない(権限がない)状態になります。  
  
というわけで以上！  
認証部分でハマって[stackoverflow](http://stackoverflow.com/questions/22079057/getting-unable-to-parse-the-p12-file-error-with-google-api-php-client)見に行った時、コメント3の「俺もそこで2日無駄にした……」みたいなコメントに癒やされました。  
当方の場合は、導入したクライアントのバージョンが古かったのが問題でした(´@ω@｀)  
