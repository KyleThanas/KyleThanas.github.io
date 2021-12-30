(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{429:function(s,t,a){"use strict";a.r(t);var h=a(56),r=Object(h.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[s._v("#")]),s._v(" git stash")]),s._v(" "),a("p",[a("a",{attrs:{name:"oIrFb"}})]),s._v(" "),a("h2",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[s._v("#")]),s._v(" 开始")]),s._v(" "),a("p",[a("a",{attrs:{name:"Xrnsf"}})]),s._v(" "),a("h4",{attrs:{id:"常用git-stash命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用git-stash命令"}},[s._v("#")]),s._v(" 常用git stash命令：")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("git stash")]),s._v(' save "save message"  : 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。')]),s._v(" "),a("li",[a("strong",[s._v("git stash list")]),s._v("  ：查看stash了哪些存储")]),s._v(" "),a("li",[a("strong",[s._v("git stash show")]),s._v(" ：显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}")]),s._v(" "),a("li",[a("strong",[s._v("git stash show -p")]),s._v(" : 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p")]),s._v(" "),a("li",[a("strong",[s._v("git stash apply")]),s._v(" :应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1}")]),s._v(" "),a("li",[a("strong",[s._v("git stash pop")]),s._v(" ：命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}")]),s._v(" "),a("li",[a("strong",[s._v("git stash drop stash@{$num}")]),s._v(" ：丢弃stash@{$num}存储，从列表中删除这个存储")]),s._v(" "),a("li",[s._v("**git stash clear **：删除所有缓存的stash")])]),s._v(" "),a("p",[a("a",{attrs:{name:"EBMus"}})]),s._v(" "),a("h4",{attrs:{id:"只stash一部分文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只stash一部分文件"}},[s._v("#")]),s._v(" 只stash一部分文件")]),s._v(" "),a("p",[s._v("常规 git stash 的一个限制是它会一下暂存所有的文件。有时，只备份某些文件更为方便，让另外一些与代码库保持一致。一个非常有用的技巧，用来备份部分文件："),a("br")]),s._v(" "),a("p",[a("a",{attrs:{name:"rwXbM"}})]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[a("br"),a("strong",[a("em",[s._v("在未"),a("code",[s._v("add")]),s._v("之前才能执行"),a("code",[s._v("stash")])])]),a("br"),s._v("git add 只是把文件加到git 版本控制里，并不等于就被stash起来了，git add和git stash 没有必然的关系，但是执行git stash 能正确存储的前提是文件必须在git 版本控制中才行。")]),s._v(" "),a("ol",[a("li",[s._v("add 那些你不想备份的文件（例如： git add file1.js, file2.js）")]),s._v(" "),a("li",[s._v("调用 git stash –keep-index。只会备份那些没有被add的文件。")]),s._v(" "),a("li",[s._v("调用 git reset 取消已经add的文件的备份，继续自己的工作。")])]),s._v(" "),a("p",[a("a",{attrs:{name:"YWgrA"}})]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/zndxall/archive/2018/09/04/9586088.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("git stash 用法总结和注意点"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/16adec527aed",target:"_blank",rel:"noopener noreferrer"}},[s._v("git之stash"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);