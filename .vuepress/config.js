module.exports = {
  title: '活動拠点',
  description: '活動拠点です。',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.ico' }],
    ['meta', { name: "author", content: "perpouh" }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'ぱあぷう', link: '/_pages/resume/'}
    ],
    sidebar: [
      {
        title: 'VSCode',   // required
        children: [
          ['/_posts/vscode/kkympreviewer', 'カクヨムプレビューワ']
        ]
      },
      {
        title: 'Vue',   // required
        children: [
          ['/_posts/vue/vuepress', 'VuePress'],
          ['/_posts/vue/chat-app', 'チャットアプリ']
        ]
      },
      {
        title: 'Rails',
        children: [
          ['/_posts/rails/subdomain', 'サブドメインでコントローラを振り分ける']
        ]
      },
      {
        title: 'Qiita記事のサルベージ',   // required
        children: [
          ['/_posts/qiita/macでgit管理をはじめる', 'macでgit管理をはじめる'],
          ['/_posts/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎④', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎④'],
          ['/_posts/qiita/入力コントロールのフォントサイズを14pxにしたらモバイル端末からそのコントロールにfocusしたタイミングで画面が自動ズームされる件について', '入力コントロールのフォントサイズを14pxにしたらモバイル端末からそのコントロールにfocusしたタイミングで画面が自動ズームされる件について'],
          ['/_posts/qiita/Wijmo3のgridを使う', 'Wijmo3のgridを使う'],
          ['/_posts/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・プロローグ', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・プロローグ'],
          ['/_posts/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③'],
          ['/_posts/qiita/PHP(CakePHP)からGoogleCloudStorageを利用する', 'PHP(CakePHP)からGoogleCloudStorageを利用する'],
          ['/_posts/qiita/CakePHPのコントローラを階層化する', 'CakePHPのコントローラを階層化する'],
          ['/_posts/qiita/なめらかアコーディオンパネル', 'なめらかアコーディオンパネル'],
          ['/_posts/qiita/[Python]Codewarsで遊んだ記録', '[Python]Codewarsで遊んだ記録'],
          ['/_posts/qiita/CSS3セレクターでストライプテーブル', 'CSS3セレクターでストライプテーブル'],
          ['/_posts/qiita/DockerにnginxとRailsとVueの環境を作る', 'DockerにnginxとRailsとVueの環境を作る'],
          ['/_posts/qiita/Monaca開発入門_00', 'Monaca開発入門_00'],
          ['/_posts/qiita/Node.js開発入門_02', 'Node.js開発入門_02'],
          ['/_posts/qiita/Monaca開発入門_01', 'Monaca開発入門_01'],
          ['/_posts/qiita/winでgit管理を始める', 'winでgit管理を始める'],
          ['/_posts/qiita/ngRepeatで複数選択削除を実装する', 'ngRepeatで複数選択削除を実装する'],
          ['/_posts/qiita/【Rails】今年学んだことの棚卸し', '【Rails】今年学んだことの棚卸し'],
          ['/_posts/qiita/Node.js開発入門_01', 'Node.js開発入門_01'],
          ['/_posts/qiita/anime.js試した', 'anime.js試した'],
          ['/_posts/qiita/スライド式イメージギャラリー', 'スライド式イメージギャラリー'],
          ['/_posts/qiita/monacaアプリからajax通信ができなくてハマった！対処法まとめ', 'monacaアプリからajax通信ができなくてハマった！対処法まとめ'],
          ['/_posts/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・寄り道クエスト〜Mathjax〜', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・寄り道クエスト〜Mathjax〜'],
          ['/_posts/qiita/スターリンソートwithPHP', 'スターリンソートwithPHP'],
          ['/_posts/qiita/ポータルサイト風タブパネル', 'ポータルサイト風タブパネル'],
          ['/_posts/qiita/個性的な三種類のツールチップ', '個性的な三種類のツールチップ'],
          ['/_posts/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎②', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎②'],
          ['/_posts/qiita/CentOS7でLaravel開発を始める', 'CentOS7でLaravel開発を始める'],
          ['/_posts/qiita/@nifty mobile backendクエリメモ', '@nifty mobile backendクエリメモ'],
          ['/_posts/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・環境の構築〜Pythonの基礎', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・環境の構築〜Pythonの基礎'],
          ['/_posts/qiita/Apatche2.4+MySQL5.6+PHP7をCentOS6にインストールする', 'Apatche2.4+MySQL5.6+PHP7をCentOS6にインストールする'],
          ['/_posts/qiita/Rubyに手を付ける', 'Rubyに手を付ける'],
          ['/_posts/qiita/Webの制作の現場で使うAngularJSデザイン入門', 'Webの制作の現場で使うAngularJSデザイン入門'],
          ['/_posts/qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎⑤', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎⑤'],
          ['/_posts/qiita/小さい会社では教えてもらえなかったりフォーマットがなかったりする議事録の書き方についておさらいしてみよう', '小さい会社では教えてもらえなかったりフォーマットがなかったりする議事録の書き方についておさらいしてみよう']
        ]
      }
    ],
    sidebarDepth: 2
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tags/",
            layout: "Tags",
            scopeLayout: "Tag"
          }
        ],
        directories: [
          {
            id: "Post",
            dirname: "_posts",
            path: "/"
          },
          {
            id: "Page",
            dirname: "_pages",
            path: "/page/"
          }
        ],
        feed: {
          canonical_base: 'http://localhost:8080',
          rss: true,
          atom: false,
          json: false
        },
        sitemap: {
          hostname: 'https://localhost:8080'
        }
      }
    ],
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['_posts'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ]
  ]
}