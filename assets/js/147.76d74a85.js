(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{425:function(t,r,e){"use strict";e.r(r);var a=e(56),l=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"防火墙-firewalld"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防火墙-firewalld"}},[t._v("#")]),t._v(" 防火墙-firewalld")]),t._v(" "),e("p",[e("a",{attrs:{name:"4IRLv"}})]),t._v(" "),e("h2",{attrs:{id:"开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),e("p",[t._v("开启防火墙，没有任何反应说明防火墙开启成功"),e("br"),t._v("systemctl start firewalld"),e("br"),t._v(" "),e("br"),t._v("关闭防火墙"),e("br"),t._v("systemctl stop firewalld"),e("br"),t._v(" "),e("br"),t._v("查看防火墙状态"),e("br"),t._v("systemctl status firewalld"),e("br"),e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1572925586275-e032e1fc-76c3-46c0-8b85-9dc44e6b8f09.png#align=left&display=inline&height=437&name=image.png&originHeight=437&originWidth=881&size=94242&status=done&width=881",alt:"image.png"}}),e("br"),t._v(" "),e("br"),t._v("//添加80端口"),e("br"),t._v("firewall-cmd --permanent --zone=public --add-port=80/tcp"),e("br"),t._v(" "),e("br"),t._v("//重启、生效"),e("br"),t._v("firewall-cmd --reload"),e("br"),t._v(" "),e("br"),t._v("//查看开放端口列表"),e("br"),t._v("firewall-cmd --permanent --zone=public --list-ports")])])}),[],!1,null,null,null);r.default=l.exports}}]);