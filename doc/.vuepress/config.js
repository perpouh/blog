module.exports = {
  themeConfig: {
    title: 'VuePress Sample',
    description: 'smaple project for VuePress',
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/icon16.png' }],
      ['meta', { name: "author", content: "perpouh" }]
    ],
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