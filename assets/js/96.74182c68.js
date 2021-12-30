(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{466:function(a,n,t){"use strict";t.r(n);var r=t(56),l=Object(r.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"angular"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#angular"}},[a._v("#")]),a._v(" Angular")]),a._v(" "),t("p",[t("a",{attrs:{name:"7NSc9"}})]),a._v(" "),t("h2",{attrs:{id:"router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[a._v("#")]),a._v(" Router")]),a._v(" "),t("p",[t("a",{attrs:{name:"earbV"}})]),a._v(" "),t("h4",{attrs:{id:"canactivate-和-canload-比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canactivate-和-canload-比较"}},[a._v("#")]),a._v(" CanActivate  和 CanLoad 比较")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("CanActivate")]),a._v("  - 决定是否可以激活路由，这个防护可能不是延迟加载的功能模块的最佳方式，因为这个防护将始终将模块加载到内存中，即使防护返回false，这意味着用户无权访问路线。")]),a._v(" "),t("li",[t("strong",[a._v("CanLoad")]),a._v(" - 决定是否可以延迟加载模块，控制是否可以加载路径。这对于延迟加载的功能模块非常有用。如果警卫返回假，他们甚至不会加载。\n|  | "),t("strong",[a._v("canActivate")]),a._v(" | "),t("strong",[a._v("canLoad")]),a._v(" |\n| --- | --- | --- |\n| chunk.js | 会加载 | 不会加载 |\n| 功能 | 防止未经授权的用户 | 阻止应用程序的整个模块 |\n| 安全性 | 低 - 加载chunk.js，安全性不好 | 高 |\n| 性能 | 低 - 因为加载的东西多 | 高 |\n| 实用性 | 都可以 | 只能用于LazyLoaded 模块 |")])]),a._v(" "),t("p",[t("a",{attrs:{name:"oFkLo"}})]),a._v(" "),t("h2",{attrs:{id:"angular-cli全局版本大于本地版本-把本地版本升级方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#angular-cli全局版本大于本地版本-把本地版本升级方式"}},[a._v("#")]),a._v(" angular cli全局版本大于本地版本 把本地版本升级方式")]),a._v(" "),t("p",[a._v("查看 angular 版本  ng version"),t("br"),a._v("如出现提示 Your global Angular CLI version (xxx) is greater than your local version (xxx). The local Angular CLI version is used."),t("br"),a._v(" "),t("br"),a._v("解决方法"),t("br"),a._v("把项目中的angular-cli升级到最新版")]),a._v(" "),t("ol",[t("li",[a._v("npm uninstall -g angular-cli")]),a._v(" "),t("li",[a._v("npm cache clean --force 清除缓存，确保卸载干净")]),a._v(" "),t("li",[a._v("检查是否卸载干净 ng -v    若显示command not found则卸载干净")]),a._v(" "),t("li",[a._v("卸载完后 全局安装 最新版本angular cli")]),a._v(" "),t("li",[a._v("安装指令：npm install -g @angular/cli@latest")]),a._v(" "),t("li",[a._v("npm uninstall --save-dev angular-cli")]),a._v(" "),t("li",[a._v("npm install --save-dev @angular/cli@latest")]),a._v(" "),t("li",[a._v("npm install")]),a._v(" "),t("li",[a._v("ng -v 查看版本")])]),a._v(" "),t("p",[t("strong",[a._v("上面的方法不实在，直接ng new 一个新的项目，然后把依赖项复制过来，重新安装最快")])]),a._v(" "),t("p",[t("a",{attrs:{name:"qJvB0"}})]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/Samuel-Leung/p/10365482.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("angular cli全局版本大于本地版本 把本地版本升级方式"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=l.exports}}]);