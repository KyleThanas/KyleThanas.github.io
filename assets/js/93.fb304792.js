(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{292:function(t,e,n){"use strict";n.r(e);var a=n(28),r=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"列表渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染"}},[this._v("#")]),this._v(" 列表渲染")]),this._v(" "),e("div",{staticClass:"lake-content-editor-core lake-engine",attrs:{"data-lake-element":"root","data-selection-124615":"%7B%22path%22%3A%5B%5B1%2C0%2C1%2C0%5D%2C%5B1%2C0%2C1%2C2%5D%5D%2C%22uuid%22%3A%22124615%22%2C%22active%22%3Atrue%7D"}},[e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[this._v("当前模拟的是：列表中的数据要分给不同的组件渲染，每个item是有多个模块拼凑起来的。")]),e("div",{staticClass:"lake-activated",attrs:{"data-card-type":"block","data-lake-card":"codeblock",id:"fISow"}},[e("div",{staticClass:"lake-codeblock-content",staticStyle:{border:"1px solid rgb(232, 232, 232)","max-width":"750px",color:"rgb(38, 38, 38)",margin:"0px",padding:"0px",background:"rgb(249, 249, 249)"}},[e("div",{staticStyle:{color:"rgb(89, 89, 89)",margin:"0px",padding:"16px",background:"none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)"}},[e("div",{staticClass:"language-undefined extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' 1import { Fragment } from \'react\'\n2\n3// 数据源\n4const dataSource = [\n5  {\n6    a: 1,\n7    b: 1,\n8  },\n9  {\n10    a: 2,\n11    b: 2,\n12  },\n13]\n14\n15// 循环\n16const InfiniteList = ({ dataSource, itemRender }) => {\n17  return dataSource.map((dataItem, dataIndex) => <fragment key="{dataIndex}">{itemRender({ ...dataItem })}</fragment>)\n18}\n19\n20// item的子项1\n21const NoteCard = props => <h1>{props.a}</h1>\n22\n23// item的子项2\n24const NoteComment = props => <p>{props.b}</p>\n25\n26// 每一个item\n27const NoteWrapper = props => (\n28  <fragment>\n29    <notecard {...props}>\n30    <notecomment {...props}>\n31  </notecomment></notecard></fragment>\n32)\n33\n34const NoteList = ({ dataSource }) => <infinitelist datasource="{dataSource}" itemrender="{NoteWrapper}">\n35   \n')])])]),e("p")])])]),e("p",{staticStyle:{"font-size":"14px",color:"rgb(38, 38, 38)","line-height":"24px","letter-spacing":"0.05em","outline-style":"none","overflow-wrap":"break-word",margin:"0px"}},[e("br")])]),e("p")])}),[],!1,null,null,null);e.default=r.exports}}]);