const switchQIANDUAN = true
const path = switchQIANDUAN ? 'share' : 'admin'
const base = switchQIANDUAN ? '/kyle/' : '/kyle2/'
const dest = switchQIANDUAN ? '/dist' : '/dist2'
const title = switchQIANDUAN ? '爬坑之路' : '后端爬坑之路'

module.exports = {
  title: title,
  description: 'KyleThanas的分享',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'og:type', content: 'webpage' }],
    ['meta', { name: 'og:url', content: 'https://KyleThanas.github.io' }],
    ['meta', { name: 'og:title', content: 'KyleThanas知识分享' }],
    ['meta', { name: 'og:description', content: 'KyleThanas的分享' }],
  ],
  // base: base,
  // base: '/kyle2/',
  dest: `.vuepress/../../${dest}`, //指定 vuepress build 的输出目录
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      // {
      //   text: '吐槽',
      //   link: 'https://support.qq.com/product/65891',
      // },
      {
        text: '微信',
        link: 'weixin://dl/officialaccounts',
      },
    ],
  },
  plugins: [
    [
      'vuepress-plugin-yuque',
      {
        // 爬坑之路
        // repoUrl: 'https://www.yuque.com/kylethanas/share',
        // 后端爬坑之路
        // repoUrl: 'https://www.yuque.com/kylethanas/admin',
        repoUrl: `https://www.yuque.com/kylethanas/${path}`,
        authToken: 'u1XU3a9AAwSEDtNjHXOXZ5ry0xlXwbHlxL49zn9a',
        html: true,
        home: {
          actionText: '开始阅读 →',
          features: [
            {
              title: '前端知识',
              details: '这里面包括一些前端的个人技术总结',
            },
            {
              title: '读书',
              details: '这是作者看过的书，并且把书中一些精华总结、整理',
            },
            {
              title: '杂学',
              details: '这是个人兴趣的学习总结',
            },
          ],
          footer: `Copyright © kylethanas`,
        },
      },
    ],
  ],
}
