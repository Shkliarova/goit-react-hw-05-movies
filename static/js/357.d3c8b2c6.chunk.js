"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[357],{687:function(r,t,n){n.d(t,{Df:function(){return i},Eb:function(){return p},Hu:function(){return v},Pg:function(){return f},Ph:function(){return o}});var e=n(861),a=n(757),c=n.n(a),u=n(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="beab6c0b252705afa5f8cc6b5b3c7d57",i=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(c().mark((function r(t){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},357:function(r,t,n){n.r(t),n.d(t,{default:function(){return v}});var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(687),i=n(791),o=n(218),f=n(689),p=n(184);function v(){var r=(0,i.useState)([]),t=(0,a.Z)(r,2),n=t[0],c=t[1],v=(0,f.UO)().movieId;return(0,i.useEffect)((function(){var r=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Hu)(v);case 3:t=r.sent,c(t),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),o.ZP.error("Error"),c([]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[v]),(0,p.jsxs)("div",{children:[n.length>0?(0,p.jsx)("ul",{children:n.map((function(r){var t=r.id,n=r.author,e=r.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",n]}),(0,p.jsx)("p",{children:e})]},t)}))}):(0,p.jsx)("h4",{children:"We don't have any reviews for this movie."}),(0,p.jsx)(o.x7,{})]})}}}]);
//# sourceMappingURL=357.d3c8b2c6.chunk.js.map