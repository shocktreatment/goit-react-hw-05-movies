"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[374],{291:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(243),o=t(791),i=t(689),p=t(184);r.default=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],l=(0,i.UO)().id,h=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=9ec6001a7af70e1d00b5565b52b6b615&language=en-US&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(l);case 3:r=e.sent,c(r.results),console.log("REVIEWS->",r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t=e.t0.response,console.log(t.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"REVIEWS"}),(0,p.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:(0,p.jsxs)("b",{children:["Author: ",t]})}),(0,p.jsx)("p",{children:n})]},r)}))})]})}}}]);
//# sourceMappingURL=374.c7151d08.chunk.js.map