(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{61:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return m}));var a=c(52),i=c(62),s=c.n(i),n=c(0),h=c(14),r=c.n(h),o=c(54),j=c(53),l=c(1);function m(t){var e=t.movieId,c=Object(n.useState)(null),i=Object(a.a)(c,2),h=i[0],m=i[1],b=Object(n.useState)(j.IDLE),p=Object(a.a)(b,2),u=p[0],d=p[1];return Object(n.useEffect)((function(){d(j.PENDING),o.a(e).then((function(t){m(t.cast),d(j.RESOLVED)})).catch((function(t){d(j.REJECTED)}))}),[e]),Object(l.jsxs)(l.Fragment,{children:[u===j.PENDING&&Object(l.jsx)(r.a,{type:"ThreeDots",color:"#b41408",height:80,width:80}),u===j.REJECTED&&Object(l.jsx)("h2",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),u===j.RESOLVED&&Object(l.jsx)("ul",{className:s.a.castList,children:h.length>0?h.map((function(t){return Object(l.jsxs)("li",{className:s.a.castItem,children:[t.profile_path?Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:t.name,height:"200px"}):Object(l.jsx)("img",{src:"http://dummyimage.com/133x200/99cccc.jpg&text=No+photo",alt:t.name,height:"200px"}),Object(l.jsxs)("div",{className:s.a.description,children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)})):Object(l.jsx)("div",{children:"We don't have any actor for this movie"})})]})}},62:function(t,e,c){}}]);
//# sourceMappingURL=cast.57e61096.chunk.js.map