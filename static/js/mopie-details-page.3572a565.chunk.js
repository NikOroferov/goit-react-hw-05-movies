(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3],{52:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},53:function(t){t.exports=JSON.parse('{"IDLE":"idle","PENDING":"pending","RESOLVED":"resolved","REJECTED":"rejected"}')},54:function(t,e,r){"use strict";r.d(e,"e",(function(){return f})),r.d(e,"d",(function(){return h})),r.d(e,"b",(function(){return v})),r.d(e,"a",(function(){return p})),r.d(e,"c",(function(){return d}));var n=r(55),o=r.n(n);function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c="05b379a62bb2f2e51c79837a2df0fc22",u="https://api.themoviedb.org/3";function s(){return l.apply(this,arguments)}function l(){return l=a(o.a.mark((function t(){var e,r,n=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:"",t.next=3,fetch(e);case 3:if(!(r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Not found"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(){return s("".concat(u,"/trending/movie/day?api_key=").concat(c))}function h(t){return s("".concat(u,"/search/movie?api_key=").concat(c,"&query=").concat(t))}function v(t){return s("".concat(u,"/movie/").concat(t,"?api_key=").concat(c))}function p(t){return s("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(c))}function d(t){return s("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(c))}},55:function(t,e,r){t.exports=r(56)},56:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return D()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",v="executing",p="completed",d={};function y(){}function m(){}function g(){}var b={};u(b,i,(function(){return this}));var j=Object.getPrototypeOf,x=j&&j(j(I([])));x&&x!==r&&n.call(x,i)&&(b=x);var w=g.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return m.prototype=g,u(w,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},60:function(t,e,r){t.exports={button:"MovieDetailsPage_button__3QNuo",movieInfo:"MovieDetailsPage_movieInfo__1VQsS",infoBox:"MovieDetailsPage_infoBox__3O5eU",genreList:"MovieDetailsPage_genreList__3vWEr",genreItem:"MovieDetailsPage_genreItem__1fL_8",info:"MovieDetailsPage_info__j6fP_",infoActive:"MovieDetailsPage_infoActive__27g3O"}},66:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return y}));var n=r(52),o=r(60),i=r.n(o),a=r(14),c=r.n(a),u=r(0),s=r(3),l=r(9),f=r(54),h=r(53),v=r(1),p=Object(u.lazy)((function(){return r.e(0).then(r.bind(null,61))})),d=Object(u.lazy)((function(){return r.e(5).then(r.bind(null,63))}));function y(){var t,e,r,o,a=Object(s.i)().url,y=Object(s.h)().movieId,m=Object(s.f)(),g=Object(s.g)(),b=Object(u.useState)(null),j=Object(n.a)(b,2),x=j[0],w=j[1],O=Object(u.useState)(h.IDLE),_=Object(n.a)(O,2),E=_[0],L=_[1];Object(u.useEffect)((function(){L(h.PENDING),f.b(y).then((function(t){w(t),L(h.RESOLVED)})).catch((function(t){return L(h.REJECTED)}))}),[y]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{type:"button",onClick:function(){var t,e;m.push(null!==(t=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/")},className:i.a.button,children:"Come back"}),E===h.PENDING&&Object(v.jsx)(c.a,{type:"ThreeDots",color:"#b41408",height:80,width:80}),E===h.REJECTED&&Object(v.jsx)("h2",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),E===h.RESOLVED&&Object(v.jsxs)("div",{className:i.a.box,children:[Object(v.jsxs)("div",{className:i.a.movieInfo,children:[x.poster_path?Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(x.poster_path),alt:x.title,height:"300px"}):Object(v.jsx)("img",{src:"http://dummyimage.com/200x300/99cccc.jpg&text=No+photo",alt:x.title}),Object(v.jsxs)("div",{className:i.a.infoBox,children:[Object(v.jsxs)("h2",{children:[x.title," (",x.release_date.slice(0,4),")"]}),Object(v.jsxs)("p",{children:["User score: ",x.vote_average]}),Object(v.jsx)("h3",{children:"Overview"}),Object(v.jsx)("p",{children:x.overview}),Object(v.jsx)("h3",{children:"Genres"}),x.genres.length>0?Object(v.jsx)("ul",{className:i.a.genreList,children:x.genres.map((function(t){return Object(v.jsx)("li",{className:i.a.genreItem,children:t.name},t.id)}))}):Object(v.jsx)("p",{children:"No genres info"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:"Additional info"}),Object(v.jsx)(l.c,{className:i.a.info,activeClassName:i.a.infoActive,to:{pathname:"".concat(a,"/cast"),state:{from:null===m||void 0===m||null===(t=m.location)||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from}},children:"Cast"}),Object(v.jsx)(l.c,{className:i.a.info,activeClassName:i.a.infoActive,to:{pathname:"".concat(a,"/reviews"),state:{from:null===m||void 0===m||null===(r=m.location)||void 0===r||null===(o=r.state)||void 0===o?void 0:o.from}},children:"Reviews"})]})]}),Object(v.jsxs)(u.Suspense,{fallback:Object(v.jsx)(c.a,{type:"ThreeDots",color:"#b41408",height:80,width:80}),children:[Object(v.jsx)(s.a,{path:"/movies/:movieId/cast",children:Object(v.jsx)(p,{movieId:y})}),Object(v.jsx)(s.a,{path:"/movies/:movieId/reviews",children:Object(v.jsx)(d,{movieId:y})})]})]})}}}]);
//# sourceMappingURL=mopie-details-page.3572a565.chunk.js.map