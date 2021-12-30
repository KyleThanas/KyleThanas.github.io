(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{411:function(t,e,r){"use strict";r.r(e);var a=r(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"react-v16-的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-v16-的生命周期"}},[t._v("#")]),t._v(" React v16 的生命周期")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/124615/1571135489634-f9f296b0-09aa-44e5-b25f-d11b3e6976bf.png#align=left&display=inline&height=639&name=image.png&originHeight=1278&originWidth=2220&size=497323&status=done&width=1110",alt:"image.png"}}),r("br")]),t._v(" "),r("p",[r("a",{attrs:{name:"o1qMg"}})]),t._v(" "),r("h2",{attrs:{id:"常用的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用的生命周期"}},[t._v("#")]),t._v(" 常用的生命周期")]),t._v(" "),r("p",[r("a",{attrs:{name:"render"}})]),t._v(" "),r("h4",{attrs:{id:"render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render()")]),t._v(" "),r("p",[t._v("render() 方法是 class 组件中"),r("strong",[t._v("唯一必须实现")]),t._v("的方法。"),r("br"),t._v("当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：")]),t._v(" "),r("ul",[r("li",[t._v("React 元素。通常通过 JSX 创建。例如，"),r("code",[t._v("<div />")]),t._v(" 会被 React 渲染为 DOM 节点，"),r("code",[t._v("<MyComponent />")]),t._v(" 会被 React 渲染为自定义组件，无论是 "),r("code",[t._v("<div />")]),t._v(" 还是 "),r("code",[t._v("<MyComponent />")]),t._v(" 均为 React 元素。")]),t._v(" "),r("li",[t._v("数组或 fragments。 使得 render 方法可以返回多个元素。")]),t._v(" "),r("li",[t._v("Portals。可以渲染子节点到不同的 DOM 子树中。")]),t._v(" "),r("li",[t._v("字符串或数值类型。它们在 DOM 中会被渲染为文本节点")]),t._v(" "),r("li",[t._v("布尔类型或 null。什么都不渲染。（主要用于支持返回 test && "),r("code",[t._v("<Child />")]),t._v(" 的模式，其中 test 为布尔类型。)")])]),t._v(" "),r("p",[t._v("render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。"),r("br"),r("strong",[t._v("注意")]),r("br"),t._v("如果 shouldComponentUpdate() 返回 false，则不会调用 render()。")]),t._v(" "),r("p",[r("a",{attrs:{name:"3dWNS"}})]),t._v(" "),r("h4",{attrs:{id:"constructor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor()")]),t._v(" "),r("p",[t._v("在 React 组件"),r("strong",[t._v("挂载之前")]),t._v("，会调用它的构造函数。"),r("br"),t._v("通常，在 React 中，在构造函数中只做两件事：")]),t._v(" "),r("ul",[r("li",[t._v("通过给 this.state 赋值对象来初始化内部 state。")]),t._v(" "),r("li",[t._v("为事件处理函数绑定实例")])]),t._v(" "),r("p",[r("strong",[t._v("注意:")])]),t._v(" "),r("ul",[r("li",[t._v("在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。")]),t._v(" "),r("li",[t._v("不要在里边调用setState。")])]),t._v(" "),r("p",[r("a",{attrs:{name:"componentdidmount"}})]),t._v(" "),r("h4",{attrs:{id:"componentdidmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount()")]),t._v(" "),r("p",[t._v("componentDidMount() 会在"),r("strong",[t._v("组件挂载后")]),t._v("（插入 DOM 树中）立即调用。"),r("br"),t._v("在这里可以")]),t._v(" "),r("ul",[r("li",[t._v("setState")]),t._v(" "),r("li",[t._v("操作dom")]),t._v(" "),r("li",[t._v("发请求获取初始数据")])]),t._v(" "),r("p",[r("strong",[t._v("注意")]),r("br"),t._v("你可以在 componentDidMount() 里可以直接调用 setState()。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 constructor() 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理。")]),t._v(" "),r("p",[r("a",{attrs:{name:"componentdidupdateprevprops-prevstate-snapshot"}})]),t._v(" "),r("h4",{attrs:{id:"componentdidupdate-prevprops-prevstate-snapshot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate-prevprops-prevstate-snapshot"}},[t._v("#")]),t._v(" componentDidUpdate(prevProps, prevState, snapshot)")]),t._v(" "),r("p",[t._v("componentDidUpdate() 会在"),r("strong",[t._v("更新(dom已经更新)后")]),t._v("会被立即调用。首次渲染不会执行此方法。"),r("br"),t._v("当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。"),r("br"),t._v("你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语件里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 props “镜像”给 state，请考虑直接使用 props。"),r("br"),t._v("如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。")]),t._v(" "),r("p",[r("a",{attrs:{name:"componentwillunmount"}})]),t._v(" "),r("h4",{attrs:{id:"componentwillunmount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount()")]),t._v(" "),r("p",[t._v("componentWillUnmount() 会在"),r("strong",[t._v("组件卸载及销毁之前")]),t._v("直接调用。"),r("br"),t._v("在这里可以释放资源, 比如清除定时器, removeEventListener。"),r("br"),r("strong",[t._v("注意")]),r("br"),t._v("这里边setState是无效的, 不应该调用。")]),t._v(" "),r("p",[r("a",{attrs:{name:"SIdy4"}})]),t._v(" "),r("h2",{attrs:{id:"不常用的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不常用的生命周期"}},[t._v("#")]),t._v(" 不常用的生命周期")]),t._v(" "),r("p",[r("a",{attrs:{name:"shouldcomponentupdatenextprops-nextstate"}})]),t._v(" "),r("h4",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),r("p",[t._v("他的返回值可以决定是否重新渲染, 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。"),r("br"),t._v("这是一个性能优化的生命周期方法, 只有当你清楚的知道自己在做什么的是使用。")]),t._v(" "),r("p",[r("a",{attrs:{name:"static-getderivedstatefrompropsprops-state"}})]),t._v(" "),r("h4",{attrs:{id:"static-getderivedstatefromprops-props-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops-props-state"}},[t._v("#")]),t._v(" static getDerivedStateFromProps(props, state)")]),t._v(" "),r("p",[t._v("getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。")]),t._v(" "),r("p",[r("a",{attrs:{name:"getsnapshotbeforeupdateprevprops-prevstate"}})]),t._v(" "),r("h4",{attrs:{id:"getsnapshotbeforeupdate-prevprops-prevstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate-prevprops-prevstate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v(" "),r("p",[t._v("getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。"),r("br"),t._v("此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。")]),t._v(" "),r("p",[r("a",{attrs:{name:"ohv9m"}})]),t._v(" "),r("h2",{attrs:{id:"与错误相关的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与错误相关的生命周期"}},[t._v("#")]),t._v(" 与错误相关的生命周期")]),t._v(" "),r("p",[r("a",{attrs:{name:"static-getderivedstatefromerror"}})]),t._v(" "),r("h4",{attrs:{id:"static-getderivedstatefromerror"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromerror"}},[t._v("#")]),t._v(" static getDerivedStateFromError()")]),t._v(" "),r("p",[t._v("此生命周期会"),r("strong",[t._v("在后代组件抛出错误后")]),t._v("被调用。 它将抛出的错误作为参数，并返回一个值以更新 state"),r("br"),r("strong",[t._v("注意")]),r("br"),t._v("getDerivedStateFromError() 会在渲染阶段调用，因此不允许出现副作用。 如遇此类情况，请改用 componentDidCatch()。")]),t._v(" "),r("p",[r("a",{attrs:{name:"componentdidcatch"}})]),t._v(" "),r("h4",{attrs:{id:"componentdidcatch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#componentdidcatch"}},[t._v("#")]),t._v(" componentDidCatch()")]),t._v(" "),r("p",[t._v("此生命周期在"),r("strong",[t._v("后代组件抛出错误后")]),t._v("被调用。 它接收两个参数：")]),t._v(" "),r("ul",[r("li",[t._v("error —— 抛出的错误。")]),t._v(" "),r("li",[t._v("info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。"),r("br"),t._v("componentDidCatch() 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况。")])]),t._v(" "),r("p",[r("a",{attrs:{name:"ik0V0"}})]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/floor/p/11616467.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("10秒钟理解react生命周期"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/514fe21b9914",target:"_blank",rel:"noopener noreferrer"}},[t._v("详解React生命周期(包括react16版)"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);