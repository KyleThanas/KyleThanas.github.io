(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{511:function(t,e,r){"use strict";r.r(e);var a=r(56),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"多人协作开发规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多人协作开发规范"}},[t._v("#")]),t._v(" 多人协作开发规范")]),t._v(" "),r("p",[r("a",{attrs:{name:"JiFfz"}})]),t._v(" "),r("h2",{attrs:{id:"开发流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[t._v("#")]),t._v(" 开发流程")]),t._v(" "),r("p",[r("a",{attrs:{name:"pVkpN"}})]),t._v(" "),r("h4",{attrs:{id:"以下开发流程以-fleet-dashboard-为例。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#以下开发流程以-fleet-dashboard-为例。"}},[t._v("#")]),t._v(" 以下开发流程以 fleet-dashboard 为例。")]),t._v(" "),r("p",[t._v("一、前往 GitLab Fork 项目主仓库至个人命名空间。完成后请将个人命名空间下面的项目分支权限全部设置为非保护分支。"),r("br"),t._v(" "),r("br"),t._v("二、克隆项目至本地。"),r("br"),t._v("git clone "),r("a",{attrs:{href:"mailto:git@gitlab-rd.niucache.com"}},[t._v("git@gitlab-rd.niucache.com")]),t._v(":xiaozheng.zhang/fleet-dashboard.git"),r("br"),t._v(" "),r("br"),t._v("三、增加远程仓库 remote 地址"),r("br"),t._v("git remote -v"),r("br"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/124615/1600943286330-9013e17b-c015-4822-9964-4b6bf204c02f.png#align=left&display=inline&height=53&margin=%5Bobject%20Object%5D&originHeight=80&originWidth=712&status=done&style=none&width=468",alt:""}}),r("br"),t._v("git remote add upstream "),r("a",{attrs:{href:"mailto:git@gitlab-rd.niucache.com"}},[t._v("git@gitlab-rd.niucache.com")]),t._v(":open/fleet-dashboard.git"),r("br"),t._v("git remote -v"),r("br"),r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/124615/1600943286470-f6e387be-1e53-450e-87cf-530723ab33e4.png#align=left&display=inline&height=137&margin=%5Bobject%20Object%5D&originHeight=378&originWidth=1290&status=done&style=none&width=468",alt:""}}),r("br"),t._v("# 实际结果"),r("br"),t._v("#origin "),r("a",{attrs:{href:"mailto:git@gitlab-rd.niucache.com"}},[t._v("git@gitlab-rd.niucache.com")]),t._v(":xiaozheng.zhang/fleet-dashboard.git (fetch)"),r("br"),t._v("#origin "),r("a",{attrs:{href:"mailto:git@gitlab-rd.niucache.com"}},[t._v("git@gitlab-rd.niucache.com")]),t._v(":xiaozheng.zhang/fleet-dashboard.git (push)"),r("br"),t._v("#upstream "),r("a",{attrs:{href:"mailto:git@gitlab-rd.niucache.com"}},[t._v("git@gitlab-rd.niucache.com")]),t._v(":open/fleet-dashboard.git (fetch)"),r("br"),t._v("#upstream "),r("a",{attrs:{href:"mailto:git@gitlab-rd.niucache.com"}},[t._v("git@gitlab-rd.niucache.com")]),t._v(":open/fleet-dashboard.git (push)"),r("br"),t._v(" "),r("br"),t._v("四、开发新功能"),r("br"),t._v("# 保证本地 master 与 upstream/master 一致"),r("br"),t._v("git checkout master"),r("br"),t._v("git fetch upstream && git reset --hard upstream/master"),r("br"),t._v("git checkout -b feature-XXX"),r("br"),t._v("git push --set-upstream origin feature-XXX // 把分支提交到自己到仓库")]),t._v(" "),r("p",[t._v("# 开发测试流程"),r("br"),t._v("# 保证本地 release 与 upstream/release 一致"),r("br"),t._v("# 合并代码 && 解决冲突 && 提交代码"),r("br"),t._v("# 完成后前往 GitLab 提交合并申请至 upstream/release"),r("br"),t._v("git add ."),r("br"),t._v("git commit -m 'feature-XXX'"),r("br"),t._v("git checkout release"),r("br"),t._v("git fetch upstream && git reset --hard upstream/release"),r("br"),t._v("git merge feature-XXX"),r("br"),t._v("git push origin")]),t._v(" "),r("p",[t._v("# 上线流程"),r("br"),t._v("# 保证本地 production 与 upstream/master 一致"),r("br"),t._v("# 合并代码 && 解决冲突 && 提交代码"),r("br"),t._v("# 完成后前往 GitLab 提交合并申请至 upstream/master"),r("br"),t._v("git checkout master"),r("br"),t._v("git fetch upstream && git reset --hard upstream/master"),r("br"),t._v("git merge feature-XXX"),r("br"),t._v("git push origin"),r("br"),t._v("测试分支重置"),r("br"),t._v("代码上线后管理员管理员需要确认是否需要重置 upstream/release 分支。如果当前 upstream/release 和 upstream/master 冲突，那么请务必重置一下，其他情况酌情考虑。"),r("br"),t._v(" "),r("a",{attrs:{name:"7cul1"}})]),t._v(" "),r("h4",{attrs:{id:"权限控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[t._v("#")]),t._v(" 权限控制")]),t._v(" "),r("p",[t._v("本方案开始实施后 upstream 仓库所有分支关闭 push 权限。所有代码合并操作请使用 merge request 方式。"),r("br")])])}),[],!1,null,null,null);e.default=i.exports}}]);