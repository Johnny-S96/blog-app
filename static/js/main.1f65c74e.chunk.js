(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{24:function(t,e,c){},25:function(t,e,c){},33:function(t,e,c){},34:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),r=c(18),a=c.n(r),o=(c(24),c(2)),i=c(9),j=(c(25),c(11)),l=c.n(j),b=c(14),d="https://bloggy-api.herokuapp.com",u=function(){return(t="/posts",fetch("".concat(d).concat(t)).then((function(t){if(t.ok)return t.json();throw new Error("Error")}))).catch((function(){return[]}));var t},h=function(){var t=Object(b.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/posts"),{method:"Post",body:JSON.stringify(e)});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(b.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(d,"/posts/").concat(e),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=c(7),x=c(0),f=function(t){var e=t.posts,c=t.isPostListChanged,n=t.switchPostListStatus;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Post List"}),Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{className:"table-dark",children:[Object(x.jsx)("th",{scope:"col",children:"#"}),Object(x.jsx)("th",{scope:"col",children:"Post"}),Object(x.jsx)("th",{scope:"col",children:"Go to"}),Object(x.jsx)("th",{scope:"col",children:"Update post"}),Object(x.jsx)("th",{scope:"col",children:"Delete post"})]})}),Object(x.jsx)("tbody",{children:e.map((function(t){return Object(x.jsxs)("tr",{className:"table-light",children:[Object(x.jsx)("th",{scope:"row",children:t.id}),Object(x.jsx)("td",{children:t.title}),Object(x.jsx)("td",{children:Object(x.jsx)(O.b,{className:"btn btn-primary",to:"/",children:"Details"})}),Object(x.jsx)("td",{children:Object(x.jsx)(O.b,{className:"btn btn-warning",to:"/post-details/:postId",children:"Update"})}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{type:"button",className:"btn btn-danger",to:"/post-details/:postId",onClick:(e=t.id,p(e),void n(!c)),children:"Delete"})})]},t.id);var e}))})]})]})},m=(c(33),function(){return Object(x.jsx)("div",{className:"Loader",children:Object(x.jsx)("div",{className:"Loader__content"})})}),v=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),c=e[0],s=e[1],r=Object(n.useState)(!1),a=Object(i.a)(r,2),o=a[0],j=a[1],l=Object(n.useState)(""),b=Object(i.a)(l,2),d=b[0],p=b[1],O=Object(n.useState)(""),v=Object(i.a)(O,2),g=v[0],N=v[1],y=Object(n.useState)(!1),w=Object(i.a)(y,2),S=w[0],P=w[1];Object(n.useEffect)((function(){j(!0),u().then((function(t){s(t),j(!1)}))}),[S]);return Object(x.jsxs)("div",{className:"homepage",children:[Object(x.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),P(!S),h({title:d,body:g})}(t)},children:[Object(x.jsx)("h2",{children:"Create Post"}),Object(x.jsxs)("div",{className:"input-group mb-3",children:[Object(x.jsx)("label",{className:"input-group-text",id:"basic-addon2",children:"title"}),Object(x.jsx)("input",{type:"text",className:"form-control",placeholder:"Write here...",value:d,onChange:function(t){return function(t){var e=t.target;p(e.value)}(t)}})]}),Object(x.jsxs)("div",{className:"input-group",children:[Object(x.jsx)("label",{className:"input-group-text",children:"body"}),Object(x.jsx)("textarea",{className:"form-control",placeholder:"Write here...",value:g,onChange:function(t){return function(t){var e=t.target;N(e.value)}(t)}})]}),Object(x.jsx)("button",{className:"btn btn-success",children:"Create"})]}),o?Object(x.jsx)(m,{}):Object(x.jsx)(f,{posts:c,isPostListChanged:S,switchPostListStatus:P})]})},g=function(){return Object(x.jsx)("h1",{children:"Page Not Found"})},N=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Hello"}),Object(x.jsx)(O.b,{className:"btn btn-primary",to:"/",children:"Go to Homepage"})]})},y=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{path:"/",exact:!0,children:Object(x.jsx)(v,{})}),Object(x.jsx)(o.b,{path:"/post-details/:postId",children:Object(x.jsx)(N,{})}),Object(x.jsx)(o.a,{path:"/home",to:"/"}),Object(x.jsx)(g,{})]})})};a.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(O.a,{children:Object(x.jsx)(y,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1f65c74e.chunk.js.map