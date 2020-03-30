module.exports = {
  title: '活動拠点',
  description: '活動拠点です。',
  base: '/blog/',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/img/favicon.ico' }],
    ['meta', { name: "author", content: "perpouh" }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'ぱあぷう', link: '/resume/'}
    ],
    sidebar: [
      {
        title: 'VSCode',   // required
        children: [
          ['/vscode/kkympreviewer', 'カクヨムプレビューワ']
        ]
      },
      {
        title: 'Vue',   // required
        children: [
          ['/vue/vuepress', 'VuePress'],
          ['/vue/chat-app', 'チャットアプリ']
        ]
      },
      {
        title: 'Qiita記事のサルベージ',   // required
        children: [
          ['qiita/macでgit管理をはじめる', 'macでgit管理をはじめる'],
          ['qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎④', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎④'],
          ['qiita/入力コントロールのフォントサイズを14pxにしたらモバイル端末からそのコントロールにfocusしたタイミングで画面が自動ズームされる件について', '入力コントロールのフォントサイズを14pxにしたらモバイル端末からそのコントロールにfocusしたタイミングで画面が自動ズームされる件について'],
          ['qiita/Wijmo3のgridを使う', 'Wijmo3のgridを使う'],
          ['qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・プロローグ', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・プロローグ'],
          ['qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎③'],
          ['qiita/PHP(CakePHP)からGoogleCloudStorageを利用する', 'PHP(CakePHP)からGoogleCloudStorageを利用する'],
          ['qiita/CakePHPのコントローラを階層化する', 'CakePHPのコントローラを階層化する'],
          ['qiita/なめらかアコーディオンパネル', 'なめらかアコーディオンパネル'],
          ['qiita/[Python]Codewarsで遊んだ記録', '[Python]Codewarsで遊んだ記録'],
          ['qiita/CSS3セレクターでストライプテーブル', 'CSS3セレクターでストライプテーブル'],
          ['qiita/DockerにnginxとRailsとVueの環境を作る', 'DockerにnginxとRailsとVueの環境を作る'],
          ['qiita/Monaca開発入門_00', 'Monaca開発入門_00'],
          ['qiita/Node.js開発入門_02', 'Node.js開発入門_02'],
          ['qiita/Monaca開発入門_01', 'Monaca開発入門_01'],
          ['qiita/winでgit管理を始める', 'winでgit管理を始める'],
          ['qiita/ngRepeatで複数選択削除を実装する', 'ngRepeatで複数選択削除を実装する'],
          ['qiita/【Rails】今年学んだことの棚卸し', '【Rails】今年学んだことの棚卸し'],
          ['qiita/Node.js開発入門_01', 'Node.js開発入門_01'],
          ['qiita/anime.js試した', 'anime.js試した'],
          ['qiita/スライド式イメージギャラリー', 'スライド式イメージギャラリー'],
          ['qiita/monacaアプリからajax通信ができなくてハマった！対処法まとめ', 'monacaアプリからajax通信ができなくてハマった！対処法まとめ'],
          ['qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・寄り道クエスト〜Mathjax〜', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・寄り道クエスト〜Mathjax〜'],
          ['qiita/スターリンソートwithPHP', 'スターリンソートwithPHP'],
          ['qiita/ポータルサイト風タブパネル', 'ポータルサイト風タブパネル'],
          ['qiita/個性的な三種類のツールチップ', '個性的な三種類のツールチップ'],
          ['qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎②', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎②'],
          ['qiita/CentOS7でLaravel開発を始める', 'CentOS7でLaravel開発を始める'],
          ['qiita/@nifty mobile backendクエリメモ', '@nifty mobile backendクエリメモ'],
          ['qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・環境の構築〜Pythonの基礎', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・環境の構築〜Pythonの基礎'],
          ['qiita/Apatche2.4+MySQL5.6+PHP7をCentOS6にインストールする', 'Apatche2.4+MySQL5.6+PHP7をCentOS6にインストールする'],
          ['qiita/Rubyに手を付ける', 'Rubyに手を付ける'],
          ['qiita/Webの制作の現場で使うAngularJSデザイン入門', 'Webの制作の現場で使うAngularJSデザイン入門'],
          ['qiita/ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎⑤', 'ラスボス系後輩ヒロインAIチャットボットを作りたい・Pythonの基礎⑤'],
          ['qiita/小さい会社では教えてもらえなかったりフォーマットがなかったりする議事録の書き方についておさらいしてみよう', '小さい会社では教えてもらえなかったりフォーマットがなかったりする議事録の書き方についておさらいしてみよう']
        ]
      }
    ],
    sidebarDepth: 2
  },
  plugins: [
      [
        'google-analytics',
        {
          'ga': 'UA-58563875-3' // UA-00000000-0
        }
      ],
      'register-components',
      {
        componentsDir: './components'
      }
  ]
}