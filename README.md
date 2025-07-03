# 活動拠点


<s>レジュメ代わりにURLを投げれば経歴から何からわかるようなのが欲しいなあと思ってVuePressでサイトを制作してみました。</s>  
(2025.07.03)久しぶりに見たらvuepress-plugin-blogがパブリックアーカイブになっていたのでobsidianhtmlで作り直しました  

中身はこれから作ります。


```
docker build -t obsidian .
docker run --name obsidian -it -p 8080:8000 -v .:/app obsidian
```

