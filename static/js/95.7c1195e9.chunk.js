"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[95],{95:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),u=r(757),s=r.n(u),c=r(791),o=r(243),i="searchbar_form__H-lBD",l="searchbar_input__30+sb",f=r(184),p=function(e){var t=e.onSubmit,r=(0,c.useState)(""),n=(0,a.Z)(r,2),u=n[0],s=n[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({query:u}),s("")},className:i,children:[(0,f.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},value:u,className:l}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})})},h=r(87),m=r(689),v=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],i=(0,h.lr)(),l=(0,a.Z)(i,2),v=l[0],d=l[1],b=v.get("query");console.log("query=",b);var x=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=9ec6001a7af70e1d00b5565b52b6b615&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return r=e.sent,n=r.data,console.log(n.results),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){if(b){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(b);case 3:t=e.sent,u(t.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response,console.log(r.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[b]);var g=(0,m.TH)(),_=r.map((function(e){var t=e.title,r=e.id;return(0,f.jsx)(h.rU,{to:"/movies/".concat(r),state:{from:g},children:(0,f.jsx)("li",{children:t})},r)}));return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{onSubmit:function(e){var t=e.query;d({query:t})}}),(0,f.jsx)("ul",{children:_})]})}}}]);
//# sourceMappingURL=95.7c1195e9.chunk.js.map