(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{527:function(t,v,a){"use strict";a.r(v);var _=a(56),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"package-json详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json详解"}},[t._v("#")]),t._v(" package.json详解")]),t._v(" "),a("p",[a("a",{attrs:{name:"DyGBj"}})]),t._v(" "),a("h2",{attrs:{id:"package-json里面dependencies版本符号含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json里面dependencies版本符号含义"}},[t._v("#")]),t._v(" package.json里面dependencies版本符号含义")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/124615/1630978845339-1c51171d-9347-4910-9435-bb60c9cf4491.png#clientId=u0e2ca872-7701-4&from=paste&height=535&id=u292e7698&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1070&originWidth=814&originalType=binary&ratio=1&size=153536&status=done&style=none&taskId=ub9910d9b-a3b2-46b5-9f16-d33bd3654ec&width=407",alt:"image.png"}}),t._v(" "),a("a",{attrs:{name:"V3bFk"}})]),t._v(" "),a("h4",{attrs:{id:"版本的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本的格式"}},[t._v("#")]),t._v(" 版本的格式")]),t._v(" "),a("p",[t._v("major.minor.patch"),a("br"),t._v("主版本号.次版本号.修补版本号")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("版本类型")]),t._v(" "),a("th",[t._v("版本详情")]),t._v(" "),a("th",[t._v("版本举例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("version")]),t._v(" "),a("td",[t._v("必须完全匹配某版本")]),t._v(" "),a("td",[t._v("abc: 1.2.2")])]),t._v(" "),a("tr",[a("td",[t._v(">version")]),t._v(" "),a("td",[t._v("必须大于某版本")]),t._v(" "),a("td",[t._v("abc: >1.2.2")])]),t._v(" "),a("tr",[a("td",[t._v(">=version")]),t._v(" "),a("td",[t._v("大于或等于某个版本")]),t._v(" "),a("td",[t._v("abc: >=1.2.2")])]),t._v(" "),a("tr",[a("td",[t._v("<version")]),t._v(" "),a("td",[t._v("必须小于某个版本")]),t._v(" "),a("td",[t._v("abc: <1.2.2")])]),t._v(" "),a("tr",[a("td",[t._v("<=version")]),t._v(" "),a("td",[t._v("小于或等于某个版本")]),t._v(" "),a("td",[t._v("abc: <=1.2.2")])]),t._v(" "),a("tr",[a("td",[t._v("~version")]),t._v(" "),a("td",[t._v("大概匹配某个版本")]),t._v(" "),a("td",[t._v("如果minor版本号指定了，那么minor版本号不变，而patch版本号任意"),a("br"),t._v("如果minor和patch版本号未指定，那么minor和patch版本号任意"),a("br"),t._v("例如：~1.1.2,表示abc: >=1.1.2 abc: <1.2.0, 可以是1.1.2,1.1.n"),a("br"),t._v("例如：~1.1,表示abc: >=1.1.0 abc: <1.2.0,同上"),a("br"),t._v("例如：~1,表示abc:>=1.0.0 abc:<2.0.0,可以是1.0.0, 1.0.1, 1.0.2, 1.0.n, 1.2.n, 1.n.n")])]),t._v(" "),a("tr",[a("td",[t._v("^version")]),t._v(" "),a("td",[t._v("兼容某个版本"),a("br"),t._v("版本号中最左边的非0"),a("br"),t._v("数字的右侧可以任意"),a("br"),t._v("如果缺少某个版本号"),a("br"),t._v("则这个版本号的位置可以任意")]),t._v(" "),a("td",[t._v("例如：^1.1.2，表示abc: >=1.1.2 abc:<2.0.0， 可以是1.1.2, 1.1.n, 1.2.n, 1.n.n"),a("br"),t._v("例如：^0.2.3，表示abc: >=0.2.3 abc:<0.3.0， 可以是0.2.3, 0.2.4, 0.2.n "),a("br"),t._v("例如：^0.0，表示abc: >=0.0.0 abc:<0.1.0， 可以是0.0.0, 0.0.1, 0.0.n")])]),t._v(" "),a("tr",[a("td",[t._v("x-range")]),t._v(" "),a("td",[t._v("x的位置表示任意版本")]),t._v(" "),a("td",[t._v("例如：1.2.x, 可以表示1.2.0, 1.2.1, 1.2.n")])]),t._v(" "),a("tr",[a("td",[t._v("*-range")]),t._v(" "),a("td",[t._v("*通配符")]),t._v(" "),a("td",[t._v("例如：*，表示>=0.0.0的任意版本")])]),t._v(" "),a("tr",[a("td",[t._v("version1-version2")]),t._v(" "),a("td",[t._v("区间")]),t._v(" "),a("td",[t._v("例如：1.0.0-2.0.0表示他们之间的任意版本")])]),t._v(" "),a("tr",[a("td",[t._v("latest")]),t._v(" "),a("td",[t._v("最新版本")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("注：因为大都采取的是^形式，所以每次下载依赖都可能大小不一致。\n"),a("a",{attrs:{name:"ZUQo7"}})]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/19b53383cca3",target:"_blank",rel:"noopener noreferrer"}},[t._v("package.json里面dependencies版本符号含义"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);