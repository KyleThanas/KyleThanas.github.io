(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{530:function(t,a,s){"use strict";s.r(a);var n=s(56),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"web性能的最佳实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web性能的最佳实践"}},[t._v("#")]),t._v(" Web性能的最佳实践")]),t._v(" "),s("p",[s("a",{attrs:{name:"FTQzr"}})]),t._v(" "),s("h2",{attrs:{id:"dns查询优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns查询优化"}},[t._v("#")]),t._v(" DNS查询优化")]),t._v(" "),s("p",[t._v("在与服务主机建立连接之前，需要先解析域名。")]),t._v(" "),s("ul",[s("li",[t._v("限制不同域名的数量")]),t._v(" "),s("li",[t._v("保证低限度的解析延迟")]),t._v(" "),s("li",[t._v('在主体页面 HTML 或响应中利用 DNS 预取指令<link rel="dns-prefetch" href="//ajax.googleapis.com>')])]),t._v(" "),s("p",[s("a",{attrs:{name:"Lqz7X"}})]),t._v(" "),s("h2",{attrs:{id:"优化tcp连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化tcp连接"}},[t._v("#")]),t._v(" 优化TCP连接")]),t._v(" "),s("p",[t._v("开启新连接是一个耗时的过程。如果连接使用 TLS（也确实应该这么做），开销会更高。降低这种开销的方法如下。")]),t._v(" "),s("ul",[s("li",[t._v("利用 preconnect 指令"),s("link",{attrs:{rel:"preconnect",href:"//fonts.example.com",crossorigin:""}})]),t._v(" "),s("li",[t._v("尽早终止并响应")]),t._v(" "),s("li",[t._v("实施最新的 TLS 最佳实践 6 来优化 HTTPS")])]),t._v(" "),s("p",[s("a",{attrs:{name:"GQYpI"}})]),t._v(" "),s("h2",{attrs:{id:"避免重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免重定向"}},[t._v("#")]),t._v(" 避免重定向")]),t._v(" "),s("p",[t._v("重定向通常触发与额外域名建立连接。")]),t._v(" "),s("ul",[s("li",[t._v("利用 CDN 代替客户端在云端实现重定向")]),t._v(" "),s("li",[t._v("如果是同一域名的重定向，使用 Web 服务器上的 rewrite 规则，避免重定向")])]),t._v(" "),s("p",[s("a",{attrs:{name:"KSt32"}})]),t._v(" "),s("h2",{attrs:{id:"客户端缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端缓存"}},[t._v("#")]),t._v(" 客户端缓存")]),t._v(" "),s("p",[t._v("没有什么比直接从本地缓存获取资源来得更快，因为它根本就不需要建立网络连接。")]),t._v(" "),s("ul",[s("li",[t._v("所谓的纯静态内容，例如图片或带版本的数据，可以在客户端永久缓存")]),t._v(" "),s("li",[t._v("CSS/JS 和个性化资源，缓存时间大约是会话（交互）平均时间的两倍")]),t._v(" "),s("li",[t._v("其他类型的资源，理想的 TTL 值会各有不同；这取决于你对特定资源能够容忍的旧数据的极限。所以，你必须结合自身需求来判断最佳值。")])]),t._v(" "),s("p",[s("a",{attrs:{name:"Y0C8f"}})]),t._v(" "),s("h2",{attrs:{id:"网络边缘的缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络边缘的缓存"}},[t._v("#")]),t._v(" 网络边缘的缓存")]),t._v(" "),s("p",[t._v("因为所有用户都能从云端的共享缓存受益，所以网络边缘的缓存提供了更快的访问速度，也为网站服务基础设施分担了很大一部分流量。如果一份资源需要缓存，它必须满足：")]),t._v(" "),s("ul",[s("li",[t._v("在多用户间可共享，并且")]),t._v(" "),s("li",[t._v("能够接受一定程度的旧数据")])]),t._v(" "),s("p",[s("a",{attrs:{name:"CRNgJ"}})]),t._v(" "),s("h2",{attrs:{id:"条件缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件缓存"}},[t._v("#")]),t._v(" 条件缓存")]),t._v(" "),s("p",[t._v("如果缓存 TTL 过期，客户端会向服务器发起请求。")]),t._v(" "),s("ul",[s("li",[t._v("在请求中包含 HTTP 首部 Last-Modified-Since。仅当最新内容在首部中指定的日期之后被更新过，服务器才返回完整内容；否则只返回 304 响应码，并在响应首部中附带上新的时间戳 Date 字段。"),s("br")]),t._v(" "),s("li",[t._v("在请求体中包含实体校验码，或者叫 ETag； 它唯一标识所请求的资源。 ETag 由服务器提供，内嵌于资源的响应首部中。服务器会比较当前 ETag 与请求首部中收到的 ETag，如果一致，就只返回 304 响应码；否则返回完整内容。")])]),t._v(" "),s("p",[s("a",{attrs:{name:"Mffqm"}})]),t._v(" "),s("h2",{attrs:{id:"压缩和代码极简化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩和代码极简化"}},[t._v("#")]),t._v(" 压缩和代码极简化")]),t._v(" "),s("p",[t._v("所有的文本内容（ HTML、 JS、 CSS、 SVG、 XML、 JSON、字体等），可以从压缩和极简化中受益。极简化（ minification）是指从文本资源中剥离所有非核心内容的过程。通常，这些内容是开发人员敲出来的，所以要考虑方便人类阅读和维护。尽管如此，浏览器并不关心可读性，放弃代码可读性反而能节省空间。"),s("br"),t._v("极简化之前：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Change the title as you see fit --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My first Web page"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Put your message of the day here --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, World!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("极简化之后：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("My first web page"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, World!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"AfUf1"}})]),t._v(" "),s("h2",{attrs:{id:"避免阻塞css-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免阻塞css-js"}},[t._v("#")]),t._v(" 避免阻塞CSS/JS")]),t._v(" "),s("p",[t._v("CSS 的作用是告诉浏览器以什么方式在可视区域的哪个部分渲染内容。所以，在屏幕上绘制第一个像素之前，浏览器必须确保 CSS 已经下载完整。"),s("br"),t._v("默认情况下，如果在 HTML 中定位了 JS，它就会被请求、解析，然后执行。在浏览器处理完这个 JS 之前，会阻止其后任何资源的下载渲染。")]),t._v(" "),s("ul",[s("li",[t._v("定期校验这些资源的使用情况。随着时间的变迁， Web 页面可能会持续下载一些不再需要的 JS；这时候，最快速有效的解决办法就是去掉它。")]),t._v(" "),s("li",[t._v("如果 JS 执行顺序无关紧要，并且必须在 onload 事件触发之前运行，那么可以设置async 属性 7，像这样："),s("script",{attrs:{async:"",src:"/js/myfile.js"}})])])])}),[],!1,null,null,null);a.default=e.exports}}]);