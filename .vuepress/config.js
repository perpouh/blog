module.exports = {
  title: 'VuePress Sample',
  description: 'smaple project for VuePress',
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
      ['/vuepress/', 'VuePress' ]
    ],
    sidebarDepth: 2
  }
}