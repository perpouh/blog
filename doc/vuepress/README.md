# VuePress

## 導入

[Getting Started - VuePress](https://vuepress.vuejs.org/guide/getting-started.html)

```bash
# install globally
yarn global add vuepress # OR npm install -g vuepress

# create the project folder
mkdir vuepress-starter && cd vuepress-starter

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
vuepress dev

# build
vuepress build
```
[VuePress v0.xでStatic Site(静的サイト)の作り方 - Qiita](https://qiita.com/Koki07/items/319bcfda431e6d593358)

## Docker

※環境汚したくなかったのでDocker使いましたが（当方フロントエンジニアではないのでnpmもyarnもvueも業務では使いません）、基本的には必要無い工程です。

 - Dockerfile
 - docker-compose.yml

ここふたつは適当に準備します。今回は以下のリンクを参考に、必要に応じて手を加えています。

[Yarn+VueCLI環境をDockerで構築する - Qiita](https://qiita.com/kawadumax/items/ee73304579254f4398ad)  

```Dockerfile
FROM node:10.13-alpine

WORKDIR /app

RUN apk update && \
    apk add git && \
    apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh && \
    yarn global add vuepress # ←これ追加

ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

# ホットリロード
ENV CHOKIDAR_USEPOLLING=true
# VueCLIはいらないので削除

CMD ["/bin/sh"]
```

```yaml
version: '2.1'

services:
  blog:
    image: blog
    build: .
    environment:
      NODE_ENV: development
    ports:
      - 8080:8080
    volumes:
      - .:/app
    command: vuepress dev doc --host 0.0.0.0 # ←これ追加
```

VSCodeのプラグインからファイルを吐いた方は `.dockerignore` から `README.md` を削除してください。ページを表示できなくて無駄にハマりました。

## サイドバー

[Default Theme Config - Sidebar - VuePress](https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar)

```JavaScript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a', // 何も指定しなかった場合、h1タグの中身が表示される
      ['/page-b', 'Explicit link text']
    ],
    sidebarDepth: 0
  }
}
```

## ナビゲーションバー

[Default Theme Config - Navbar - VuePress](https://vuepress.vuejs.org/theme/default-theme-config.html#navbar)

```JavaScript
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'ぱあぷう', link: '/resume/'}
    ]
  }
```