"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[914],{687:function(t,e,r){r.d(e,{Df:function(){return i},Eb:function(){return p},Hu:function(){return v},Pg:function(){return f},Ph:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="beab6c0b252705afa5f8cc6b5b3c7d57",i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.result);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.result);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o));case 2:return r=t.sent,t.abrupt("return",r.data.result);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},17:function(t,e,r){r.d(e,{e:function(){return c}});var n=r(689),a=r(87),u=r(184),c=function(t){var e=t.movies,r=(0,n.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:r},to:"/movies/".concat(e),children:(0,u.jsx)("h5",{children:n})})},e)}))})}},914:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(861),a=r(439),u=r(757),c=r.n(u),o=r(687),i=r(791),s=r(184),f=function(t){var e=t.setSearchParams,r=(0,i.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,s.jsx)("div",{children:(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({query:u})},children:[(0,s.jsx)("input",{value:u,type:"text",placeholder:"Enter name of movie",autoFocus:!0,onChange:function(t){var e=t.target.value;c(e)}}),(0,s.jsx)("button",{type:"submit",disabled:!u,children:"Search"})]})})},p=r(87),v=r(218),h=r(17);function l(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],l=(0,p.lr)(),d=(0,a.Z)(l,2),m=d[0],x=d[1];return(0,i.useEffect)((function(){var t=m.get("query");if(t){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Ph)(t);case 3:if(0!==(r=e.sent).length){e.next=7;break}return u([]),e.abrupt("return",v.ZP.error("Not found"));case 7:u(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v.ZP.error("Something went wrong");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]),(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{setSearchParams:x}),r.length>0&&(0,s.jsx)(h.e,{movies:r}),(0,s.jsx)(v.x7,{})]})}}}]);
//# sourceMappingURL=914.3276a8a4.chunk.js.map