(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(18),s=n.n(a),o=(n(24),n(2)),i=n(3),u=n.n(i),l=n(8),j=n(5),b=(n(26),"https://bloggy-api.herokuapp.com"),d=function(t){return fetch("".concat(b).concat(t)).then((function(t){if(t.ok)return t.json();throw new Error("Error")}))},p=new Headers;p.append("Content-Type","application/json");var h=function(){return d("/posts/?_embed=comments").catch((function(){return[]}))},f=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:p,body:JSON.stringify(e),redirect:"follow"},t.next=3,fetch("".concat(b,"/posts"),n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"DELETE"},t.next=3,fetch("".concat(b,"/posts/").concat(e),n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(l.a)(u.a.mark((function t(e,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={method:"PUT",headers:p,body:JSON.stringify(e),redirect:"follow"},t.next=3,fetch("".concat(b,"/posts/").concat(n),c);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=n(10),v=n(0),N=function(t){var e=t.posts,n=t.onPostDelete;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Post List"}),Object(v.jsxs)("table",{className:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{className:"table-dark",children:[Object(v.jsx)("th",{scope:"col",children:"#"}),Object(v.jsx)("th",{scope:"col",children:"Post"}),Object(v.jsx)("th",{scope:"col",children:"Go to"}),Object(v.jsx)("th",{scope:"col",children:"Delete post"})]})}),Object(v.jsx)("tbody",{children:e.map((function(t){return Object(v.jsxs)("tr",{className:"table-light",children:[Object(v.jsx)("th",{scope:"row",children:t.id}),Object(v.jsx)("td",{children:t.title}),Object(v.jsx)("td",{children:Object(v.jsx)(m.b,{className:"btn btn-primary",to:"/post-details/".concat(t.id),children:"Details"})}),Object(v.jsx)("td",{children:Object(v.jsx)("button",{type:"button",className:"btn btn-danger",to:"/post-details/:postId",onClick:function(){return n(t.id)},children:"Delete"})})]},t.id)}))})]})]})},y=(n(33),function(){return Object(v.jsx)("div",{className:"Loader",children:Object(v.jsx)("div",{className:"Loader__content"})})}),g=(n(34),function(t){var e=t.formPurpose,n=t.onSubmit,r=Object(c.useState)(""),a=Object(j.a)(r,2),s=a[0],o=a[1],i=Object(c.useState)(""),u=Object(j.a)(i,2),l=u[0],b=u[1];return Object(v.jsxs)("form",{onSubmit:function(t){n(t,s,l),o(""),b("")},children:[Object(v.jsx)("h2",{children:"".concat(e," Post")}),Object(v.jsxs)("div",{className:"input-group mb-3",children:[Object(v.jsx)("label",{className:"input-group-text",id:"basic-addon2",children:"title"}),Object(v.jsx)("input",{type:"text",className:"form-control",placeholder:"Write here...",value:s,onChange:function(t){return o(t.target.value)},required:!0})]}),Object(v.jsxs)("div",{className:"input-group",children:[Object(v.jsx)("label",{className:"input-group-text",children:"body"}),Object(v.jsx)("textarea",{className:"form-control",placeholder:"Write here...",value:l,onChange:function(t){return b(t.target.value)},required:!0})]}),Object(v.jsx)("button",{className:"btn btn-success",children:e})]})}),w=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),o=s[0],i=s[1],b=Object(c.useState)(!1),d=Object(j.a)(b,2),p=d[0],x=d[1];Object(c.useEffect)((function(){i(!0),h().then((function(t){r(t),i(!1)}))}),[p]);var m=function(){var t=Object(l.a)(u.a.mark((function t(e,n,c){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r={title:n,body:c},t.next=4,f(r);case 4:x(!p);case 5:case"end":return t.stop()}}),t)})));return function(e,n,c){return t.apply(this,arguments)}}(),w=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:x(!p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"homepage",children:[Object(v.jsx)(g,{onSubmit:m,formPurpose:"Create"}),o?Object(v.jsx)(y,{}):Object(v.jsx)(N,{posts:n,onPostDelete:w})]})},S=function(){return Object(v.jsx)("h1",{children:"Page Not Found"})},k=(n(35),new Headers);k.append("Content-Type","application/json");var P=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:k,body:JSON.stringify(e),redirect:"follow"},t.next=3,fetch("".concat(b,"/comments"),n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(t){var e=t.post;return Object(v.jsxs)("div",{className:"card text-white bg-secondary mb-3",children:[Object(v.jsx)("div",{className:"card-header",children:"#".concat(e.id," Post Details")}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h5",{className:"card-title",children:"Title: ".concat(e.title)}),Object(v.jsx)("h5",{className:"card-title",children:"Body: ".concat(e.body)}),Object(v.jsx)("h5",{className:"card-title",children:"Comments:"}),e.comments.map((function(t,e){return Object(v.jsx)("p",{className:"card-text",children:"".concat(e+1,": ").concat(t.body)},t.id)}))]})]})},D=(n(36),function(t){var e=t.onSubmit,n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],s=r[1];return Object(v.jsxs)("form",{onSubmit:function(t){e(t,a),s("")},children:[Object(v.jsx)("h2",{children:"Write Comment"}),Object(v.jsxs)("div",{className:"input-group",children:[Object(v.jsx)("label",{className:"input-group-text",children:"body"}),Object(v.jsx)("textarea",{className:"form-control",placeholder:"Write here...",value:a,onChange:function(t){return s(t.target.value)},required:!0})]}),Object(v.jsx)("button",{className:"btn btn-success",children:"Write"})]})}),E=Object(o.g)((function(t){var e=t.match,n=Object(c.useState)(null),r=Object(j.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),i=Object(j.a)(o,2),b=i[0],d=i[1],p=Object(c.useState)(!1),f=Object(j.a)(p,2),O=f[0],N=f[1],w=Number(e.params.postId);Object(c.useEffect)((function(){h().then((function(t){var e=t.find((function(t){return t.id===w}));s(e)}))}),[w,b,O]);var S=function(){var t=Object(l.a)(u.a.mark((function t(e,n,c){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r={title:n,body:c},t.next=4,x(r,w);case 4:d(!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,c){return t.apply(this,arguments)}}(),k=function(){var t=Object(l.a)(u.a.mark((function t(e,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),c={postId:w,body:n},t.next=4,P(c);case 4:N(!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return null===a?Object(v.jsx)(y,{}):Object(v.jsxs)("div",{className:"post-details",children:[Object(v.jsx)(C,{post:a}),Object(v.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(v.jsx)(m.b,{className:"btn btn-primary",to:"/",children:"Go to Homepage"}),Object(v.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){return d(!b)},children:"Update post"}),Object(v.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){return N(!O)},children:"Write comment"})]}),O&&Object(v.jsx)(D,{onSubmit:k}),b&&Object(v.jsx)(g,{onSubmit:S,formPurpose:"Update"})]})})),T=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{path:"/",exact:!0,children:Object(v.jsx)(w,{})}),Object(v.jsx)(o.b,{path:"/post-details/:postId",children:Object(v.jsx)(E,{})}),Object(v.jsx)(o.a,{path:"/home",to:"/"}),Object(v.jsx)(S,{})]})})};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(m.a,{children:Object(v.jsx)(T,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.bff779d4.chunk.js.map