"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{687:function(e,t,r){r.d(t,{Df:function(){return u},Eb:function(){return l},Hu:function(){return d},Pg:function(){return p},Ph:function(){return o}});var n=r(861),a=r(757),c=r.n(a),i=r(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="beab6c0b252705afa5f8cc6b5b3c7d57",u=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.result);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.result);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},305:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(687),u=r(791),o=r(218),p=r(689),l=r(87),d=r(184);function h(){var e,t,r,c=(0,u.useState)(""),h=(0,a.Z)(c,2),f=h[0],v=h[1],x=(0,p.TH)(),m=(0,p.UO)().movieId,j=null!==(e=null===(t=x.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Pg)(m);case 3:t=e.sent,v(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.ZP.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.rU,{to:j,children:"Go back!"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:"".concat(f.poster_path?"https://image.tmdb.org/t/p/w500/"+f.poster_path:"https://via.placeholder.com/182x273?text="+f.original_title),alt:f.original_title}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:f.original_title}),(0,d.jsxs)("h4",{children:["Rating: ",Math.round(f.vote_average)]}),(0,d.jsx)("h4",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("ul",{children:null===(r=f.genres)||void 0===r?void 0:r.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"cast",state:x.state,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.rU,{to:"reviews",state:x.state,children:"Reviews"})})]}),(0,d.jsx)(u.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(p.j3,{})})]}),(0,d.jsx)(o.x7,{})]})}}}]);
//# sourceMappingURL=305.23673f98.chunk.js.map