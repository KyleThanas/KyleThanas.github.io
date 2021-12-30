(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{430:function(t,n,a){"use strict";a.r(n);var s=a(56),g=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-tag"}},[t._v("#")]),t._v(" git tag")]),t._v(" "),a("p",[t._v("标签 tag 是某个提交 commit 的指针，一个提交可以有多个标签。"),a("br"),t._v("我们可以创建一个"),a("strong",[t._v("tag来指向软件开发中的一个关键时期")]),t._v("，比如版本号更新的时候可以建一个“v2.0”、“v3.1”之类的标签，这样在以后回顾的时候会比较方便。"),a("br"),t._v("tag的使用很简单，主要操作有：查看tag、创建tag、验证tag以及共享tag。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("// 查看tag\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag \n\n//查看指定版本的tag，git tag -l “v1.4.2.**”\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -l "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v1.4.2.*'")]),t._v("\n\n//显示指定tag的信息\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v1.4\n\n//创建轻量级tag：这样创建的tag没有附带其他信息\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.0\n\n//带信息的tag：-m后面带的就是注释信息，这样在日后查看的时候会很有用\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.0 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first version'")]),t._v("\n\n//我们在执行 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push 的时候，tag是不会上传到服务器的，比如现在的github，创建 tag 后 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push ，在github网页上是看不到tag 的，为了共享这些tag，你必须这样：\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin v1.0\n或者\n//将所有tag 一次全部push到github上。\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags\n\n//删除本地tag\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v1.0\n\n//删除github远端的指定tag\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/v1.0.0\n\n// 创建一个基于指定tag的分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b tset v0.1.0\n")])])])])}),[],!1,null,null,null);n.default=g.exports}}]);