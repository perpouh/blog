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

## Docker

書く

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

ファイル指定時は

## 