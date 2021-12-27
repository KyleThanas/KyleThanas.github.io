module.exports = {
  title: 'KyleThanas',
  description: 'KyleThanas的分享',
  head: [
    ['meta', { name: 'referrer', content: 'never' }],
    ['meta', { name: 'og:type', content: 'webpage' }],
    ['meta', { name: 'og:url', content: 'https://KyleThanas.github.io' }],
    ['meta', { name: 'og:title', content: 'KyleThanas知识分享' }],
    ['meta', { name: 'og:description', content: 'KyleThanas的分享' }],
  ],
  dest: '.vuepress/../../dist', //指定 vuepress build 的输出目录
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
        // 后端爬坑之路
        // repoUrl: 'https://www.yuque.com/kylethanas/admin',
        // 爬坑之路
        repoUrl: 'https://www.yuque.com/kylethanas/share',
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
