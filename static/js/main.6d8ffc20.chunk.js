(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{23:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(6),c=t.n(r),i=t(7),s=t(8),a=t(12),u=t(13),l=(t(23),t(2)),d=t(3),h=t(5),b=t(4),f=t(1),j=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return this.state.count!==n.count}},{key:"render",value:function(){return Object(f.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),t}(o.Component),p=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(f.jsx)(j,{color:"red"})]})}}]),t}(o.Component),g=function(e){var n=e.name,t=e.email,o=e.id;return Object(f.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(f.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=400x400"),width:"400",height:"400"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:n}),Object(f.jsx)("p",{children:t})]})]})},v=function(e){var n=e.robots;return Object(f.jsx)("div",{children:n.map((function(e,t){return Object(f.jsx)(g,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},O=function(e){e.searchfield;var n=e.searchChange;return Object(f.jsx)("div",{className:"pa2",children:Object(f.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},w=function(e){return Object(f.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},m=(t(25),"CHANGE_SEARCH_FIELD"),y="REQUEST_ROBOTS_PENDING",x="REQUEST_ROBOTS_SUCCESS",k="REQUEST_ROBOTS_FAILED",C=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,r=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r?Object(f.jsx)("h1",{children:"Loading"}):Object(f.jsxs)("div",{className:"tc",children:[Object(f.jsx)(p,{}),Object(f.jsx)(O,{searchfield:n,searchChange:t}),Object(f.jsx)(w,{children:Object(f.jsx)(v,{robots:c})})]})}}]),t}(o.Component),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:m,payload:t}));var t},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:x,payload:n})})).catch((function(n){return e({type:k,payload:n})}))}))}}}))(C),S={searchField:""},E={isPending:!1,robots:[],error:""},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(26),Object(a.createLogger)();var U=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case m:return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case y:return Object.assign({},e,{isPending:!0});case x:return Object.assign({},e,{robots:n.payload,isPending:!1});case k:return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),F=Object(s.c)(U,Object(s.a)(u.a));c.a.render(Object(f.jsx)(i.a,{store:F,children:Object(f.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriendspwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriendspwa","/service-worker.js");N?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):P(n,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.6d8ffc20.chunk.js.map