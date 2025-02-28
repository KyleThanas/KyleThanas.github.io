#### 使用方式

##### 打包完成切勿格式化，会造成莫名 bug
test

```
使用yarn

yarn 安装依赖
yarn dev 启动服务
yarn build 打包，打包后直接扔在根目录就可以

config.js 设置
base 注释掉，可以部署github
base: '/kyle/', // 爬坑之路
base: '/kyle2/', // 后端爬坑之路
<!-- https://vuepress.vuejs.org/zh/config/#base -->

想要每次获取最新的目录，修改下面的文件
vuepress-plugin-yuque/lib/yuque.js
// const SKIP_CACHE = process.env.SKIP_CACHE
const SKIP_CACHE = 1
```

#### VuePress 中文网

http://caibaojian.com/vuepress/config

修改了`src\node_modules\@vuepress\core\lib\client\index.ssr.html`的`meta`标签

```
    <meta property="og:type" content="webpage">
    <meta property="og:url" content="https://KyleThanas.github.io">
    <meta property="og:title" content="KyleThanas知识分享">
    <meta property="og:description" content="KyleThanas的分享">
```

<!-- ## yarn 安装包、升级包命令

```
npm install -g yarn
yarn install

yarn upgrade
yarn upgrade left-pad
yarn upgrade left-pad@^1.0.0
yarn upgrade left-pad grunt
yarn upgrade @angular
``` -->
