(this.webpackJsonpgithubdata=this.webpackJsonpgithubdata||[]).push([[0],{24:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(17),r=c.n(a),l=(c(24),c(7)),i=c.n(l),o=c(9),j=c(8),b=(c.p,c(26),c(11)),u=c(0);function d(){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{class:"container-fluid",children:[Object(u.jsx)("a",{class:"navbar-brand",href:"/AngelAi",children:"Users"}),Object(u.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{class:"navbar-toggler-icon"})}),Object(u.jsx)("div",{class:"collapse navbar-collapse ",id:"navbarNav",children:Object(u.jsx)("ul",{class:"navbar-nav ml-auto",children:Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)(b.b,{class:"nav-link active","aria-current":"page",to:"/developer",children:"Developer"})})})})]})})})}var h=function(){var e=Object(o.a)(i.a.mark((function e(t){var c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users",e.prev=1,e.next=4,fetch("https://api.github.com/users/"+t);case 4:return c=e.sent,e.next=7,c.json();case 7:return n=e.sent,console.log("specific user"),e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),p=h;c(33);function O(){return Object(u.jsx)("div",{class:"loader"})}function x(e){var t=e.users,c=Object(n.useState)([]),s=Object(j.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)(!0),d=Object(j.a)(l,2),h=d[0],x=d[1];return Object(n.useEffect)(Object(o.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t.login);case 2:c=e.sent,r(c),x(!1);case 5:case"end":return e.stop()}}),e)}))),[]),h?Object(u.jsx)(O,{}):Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:a.name?a.name:t.login}),Object(u.jsx)("td",{children:a.email?a.email:"Not Found"}),Object(u.jsx)("td",{children:a.company?a.company:"Not Found"}),Object(u.jsx)("td",{children:a.followers}),Object(u.jsx)("td",{children:a.following}),Object(u.jsx)("td",{children:Object(u.jsx)(b.b,{to:"/AngelAi/".concat(a.login),children:Object(u.jsx)("button",{type:"button",class:"btn btn-primary",children:"See user"})})})]})}function v(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("table",{class:"table table-bordered",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"Company"}),Object(u.jsx)("th",{scope:"col",children:"Followers"}),Object(u.jsx)("th",{scope:"col",children:"Followings"}),Object(u.jsx)("th",{})]})}),Object(u.jsx)("tbody",{children:e.Data.slice(0,5).map((function(e){return Object(u.jsx)(x,{users:e})}))})]})})}var g=c(2);function m(e){var t=e.match,c=Object(n.useState)([]),s=Object(j.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)(!0),b=Object(j.a)(l,2),d=b[0],h=b[1],x="";t.params.id?(console.log("true"),x=t.params.id):x="iamyogeshmalkani",console.log(x);var v=Object(n.useState)({}),g=Object(j.a)(v,2);g[0],g[1];return Object(n.useEffect)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(x);case 2:t=e.sent,r(t),h(!1);case 5:case"end":return e.stop()}}),e)}))),[t.params]),d?Object(u.jsx)(O,{}):Object(u.jsxs)("div",{class:"card",children:[Object(u.jsx)("img",{src:a.avatar_url,class:"card-img-top",alt:"..."}),Object(u.jsxs)("div",{class:"card-body",children:[Object(u.jsx)("h5",{class:"card-title",children:a.name?a.name:a.login}),Object(u.jsx)("p",{class:"card-text",children:a.bio?a.bio:"Bio"})]}),Object(u.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(u.jsxs)("li",{class:"list-group-item",children:[Object(u.jsx)("b",{children:"Email:"})," ",a.email?a.email:"Not Found"]}),Object(u.jsxs)("li",{class:"list-group-item",children:[Object(u.jsx)("b",{children:"Company:"}),"  ",a.company?a.company:"Not Found"]}),Object(u.jsxs)("li",{class:"list-group-item",children:[Object(u.jsx)("b",{children:"Followers:"})," ",a.followers]}),Object(u.jsxs)("li",{class:"list-group-item",children:[Object(u.jsx)("b",{children:"Followings:"})," ",a.following]})]})]})}var f=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)(Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users",e.prev=1,e.next=4,fetch("https://api.github.com/users");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,s(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(d,{}),Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"/AngelAi",exact:!0,component:function(){return Object(u.jsx)(v,{Data:c})}}),Object(u.jsx)(g.a,{path:"/AngelAi/:id",component:m}),Object(u.jsx)(g.a,{path:"/developer",exact:!0,component:m})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.b7fd152c.chunk.js.map