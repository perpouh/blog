# お天気アプリを作る

[9 Projects you can do to become a Frontend Master in 2020 - Medium](https://dev.to/simonholdorf/9-projects-you-can-do-to-become-a-frontend-master-in-2020-n2h)
に触発されて[お天気アプリ](https://medium.com/@hamedbaatour/build-a-real-world-beautiful-web-app-with-angular-6-a-to-z-ultimate-guide-2018-part-i-e121dd1d55e)を作る。  
ただし、VueやりたいのでVueで。全世界は（主に素材の作成が）つらいので国内で。

APIは調べてみた結果、[DarkSky](https://api.rakuten.net/darkskyapis/api/dark-sky)が良さそうということになりました。githubで登録できるやさしさ。素敵。

## 動作イメージ

[![](/assets/img/imagefrommedium.png)](https://medium.com/@hamedbaatour/build-a-real-world-beautiful-web-app-with-angular-6-a-to-z-ultimate-guide-2018-part-i-e121dd1d55e)  
画像は[Build A Real World Beautiful Web APP with Angular 8 — A to Z Ultimate Guide (2019) — PART I](https://medium.com/@hamedbaatour/build-a-real-world-beautiful-web-app-with-angular-6-a-to-z-ultimate-guide-2018-part-i-e121dd1d55e)からの引用です。

### 用意する素材

対応する都市のイメージ（上記画像で言うところのエッフェル塔）は背景と被せたいので透過。暗くしたりなんだりはCSSのフィルターでなんとかしましょう。なるのか？  
概念的には[[Unity] 昼夜二枚のドット絵をもとにシームレスな夕焼けアニメーションをする - Qiita](https://qiita.com/Shinoda_Naoki/items/36ad022200616c229936)と似たようなものなのでいけるんじゃないかと思っています。記事Unityだけど。  
「天気予報　全国」で検索したら出たのが札幌/仙台/新潟/東京/金沢/東京/名古屋/大阪/広島/高知/福岡/那覇の11都市。