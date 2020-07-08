---
description: 'anime.js試した'
tags:
date: '2019-05-27'
---
# anime.js試した
[とにかくカッコいいWebデザインを簡単に作るためのTipsとアイデア集](https://qiita.com/blue-ossan/items/0bb30f765402517fdc6d)を読んで気になったので[animate.js](https://animejs.com/)を試しました。  
  
[pagePilingデモサイト](https://alvarotrigo.com/pagePiling/)の2ページ目の端っこのアレ↓が動いたらかわいいかなと思ったのでだいたいそんな感じを目指します。  
<img width="350" alt="アレ" src="/blog/assets/img/01c856d0-0944-4493-eb5c-ed8891624406.png">  
  
<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="perpouh" data-slug-hash="BeYagw" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="ページ遷移のタイミングで背景にこんなん出たら可愛いなというやつ">  
  <span>See the Pen <a href="https://codepen.io/perpouh/pen/BeYagw/">  
  ページ遷移のタイミングで背景にこんなん出たら可愛いなというやつ</a> by 架空会社ぱあぷう (<a href="https://codepen.io/perpouh">@perpouh</a>)  
  on <a href="https://codepen.io">CodePen</a>.</span>  
</p>  
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>  
  
実際に埋め込んでみた結果がこちら(pagepiling+animate.js)  
![実際の挙動](/blog/assets/img/febcbac2-6433-c1bb-25b3-9935de1a38c9.gif)  
  
かわいい。  
ちなみにanimate.jsだけだと初期状態で表示されてしまう？画面表示の際にもとのSVGが表示されてしまったので、このあたりはpagepilingで調整しています。  
  
```JavaScript
	// pagepiling
	$('#contents').pagepiling({
		sectionsColor: ['white', 'white', 'white', 'white', 'white'],
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$("svg").css('display', 'block'); // ←これ
				anime({
				  targets: 'path',
				  strokeDashoffset: function(el) {
				    var pathLength = el.getTotalLength();
				    el.setAttribute('stroke-dasharray', pathLength);
				    return [pathLength, 0];
				  },
				  delay: function(el, i) { 
				    return 300; 
				  },
				  duration: 1200,
				  easing: 'easeOutExpo'
				});
			}
		},
		navigation: false
	});
```  
  
我ながらめっちゃ可愛くできた……うれしみ……  
