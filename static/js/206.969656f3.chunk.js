"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{687:function(r,t,n){n.d(t,{Df:function(){return i},Eb:function(){return p},Hu:function(){return v},Pg:function(){return f},Ph:function(){return o}});var e=n(861),a=n(757),c=n.n(a),u=n(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="beab6c0b252705afa5f8cc6b5b3c7d57",i=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},17:function(r,t,n){n.d(t,{e:function(){return u}});var e=n(689),a=n(87),c=n(184),u=function(r){var t=r.movies,n=(0,e.TH)();return(0,c.jsx)("ul",{children:t.map((function(r){var t=r.id,e=r.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(t),children:(0,c.jsx)("h5",{children:e})})},t)}))})}},206:function(r,t,n){n.r(t),n.d(t,{default:function(){return v}});var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(687),i=n(17),o=n(791),f=n(218),p=n(184);function v(){var r=(0,o.useState)([]),t=(0,a.Z)(r,2),n=t[0],c=t[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Df)();case 3:t=r.sent,c(null!==t&&void 0!==t?t:[]),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),f.ZP.error("Error!");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(i.e,{movies:n}),(0,p.jsx)(f.x7,{})]})}}}]);
//# sourceMappingURL=206.969656f3.chunk.js.map