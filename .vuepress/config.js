module.exports = {
  title: '活動拠点',
  description: '活動拠点です。',
  base: '/blog/',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon16.png' }],
    ['meta', { name: "author", content: "perpouh" }]
  ],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'ぱあぷう', link: '/resume/'}
    ],
    sidebar: [
      {
        title: 'Vue',   // required
        children: [
          ['/vue/vuepress', 'VuePress'],
          ['/vue/chat-app', 'チャットアプリ']
        ]
      }
    ],
    sidebarDepth: 2
  },
  plugins: [
    'register-components',
    {
      componentsDir: './components'
    }
  ]
}