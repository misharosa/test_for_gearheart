(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{15:function(o,n,i){},17:function(o,n,i){"use strict";i.r(n);var t=i(1),c=i.n(t),e=i(8),l=i.n(e),a=i(2),r=i(4),d=(i(15),i(9)),s=i(10),u=i(6),b=i.n(u),j=i(0),f=function(o){var n=o.items,i=o.onChoose,t=o.turn,c=Object(s.a)(n).sort((function(o,n){return o.color<n.color?-1:o.color>n.color?1:0}));return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"rectangle",children:c.map((function(o){return Object(j.jsx)("button",{disabled:o.conditional&&!o.conditional||o.conditional&&o.conditional,style:{backgroundColor:o.color},className:b()({"button-true":o.conditional&&o.conditional1,"button-false":o.conditional&&!o.conditional1,button:!o.conditional&&!o.conditional,"button-passive":o.conditional&&!o.conditional||o.conditional&&o.conditional||!t}),onClick:function(){return i(o.id)}},o.id)}))})})},O=function(o){var n=o.items,i=o.onChoose,t=o.turn;return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:"list",children:n.map((function(o){return Object(j.jsxs)("button",{disabled:o.conditional&&!o.conditional||o.conditional&&o.conditional||!t,className:"btn-outline-secondary",onClick:function(){i(o.id)},children:[o.color,Object(j.jsx)("span",{className:b()({"icon-true":o.conditional&&o.conditional1,"icon-false":o.conditional&&!o.conditional1})})]},o.id)}))})})},h=localStorage.getItem("color");0===h.length&&localStorage.setItem("color",JSON.stringify(d));var m=JSON.parse(h);var g=function(){var o=Object(t.useState)(m),n=Object(r.a)(o,2),i=n[0],c=n[1],e=Object(t.useState)(!1),l=Object(r.a)(e,2),d=l[0],s=l[1],u=Object(t.useState)(1),b=Object(r.a)(u,2),h=b[0],g=b[1],x=Object(t.useState)(0),p=Object(r.a)(x,2),v=p[0],N=p[1];return localStorage.setItem("color",JSON.stringify(i)),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{children:Object(j.jsx)(O,{turn:d,items:i,onChoose:function(o){g((function(o){return o+1})),25===h&&(N(0),i.forEach((function(o){o.conditional1&&N((function(o){return o+1}))}))),s(!1),c((function(n){return n.map((function(n){return n.id===o?Object(a.a)(Object(a.a)({},n),{},{conditional:!0}):Object(a.a)({},n)}))}))}})}),Object(j.jsx)("div",{className:"line",children:" "}),Object(j.jsxs)("div",{children:[26!==h&&Object(j.jsxs)("h1",{children:[d?"\ud83d\udc48":"\ud83d\udc47","Choose a color\ud83e\udd13 ",Object(j.jsx)("span",{className:"text badge bg-secondary",children:"Good Luck!"})]}),26===h&&Object(j.jsxs)("h1",{children:[v>15&&v<25?"Success\ud83e\udd18":25===v?"You're mega clever \ud83e\udd78 ":"Try again \ud83e\udd2a",Object(j.jsxs)("span",{className:"text badge bg-secondary",children:["Result: ",v," / 25"]})]}),Object(j.jsx)("br",{}),Object(j.jsx)(f,{turn:d,onChoose:function(o){s(!0),c((function(n){return n.map((function(n){return n.id===o?Object(a.a)(Object(a.a)({},n),{},{conditional1:!0}):n.conditional?Object(a.a)({},n):Object(a.a)(Object(a.a)({},n),{},{conditional1:!1})}))}))},items:i})]}),Object(j.jsx)("button",{className:"button-clear",onClick:function(){localStorage.clear(),s(!1),g(1),c((function(o){return o.map((function(o){return Object(a.a)(Object(a.a)({},o),{},{conditional1:!1,conditional:!1})}))}))},children:"Restart"})]})};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},9:function(o){o.exports=JSON.parse('[{"color":"red","id":1,"conditional":false,"conditional1":false},{"color":"green","id":2,"conditional":false,"conditional1":false},{"color":"blue","id":3,"conditional":false,"conditional1":false},{"color":"yellow","id":4,"conditional":false},{"color":"black","id":5,"conditional":false},{"color":"orange","id":6,"conditional":false},{"color":"silver","id":7,"conditional":false},{"color":"maroon","id":8,"conditional":false},{"color":"olive","id":9,"conditional":false},{"color":"aqua","id":10,"conditional":false},{"color":"lime","id":11,"conditional":false},{"color":"fuchsia","id":12,"conditional":false},{"color":"purple","id":13,"conditional":false},{"color":"navy","id":14,"conditional":false},{"color":"teal","id":15,"conditional":false},{"color":"plum","id":16,"conditional":false},{"color":"blueviolet","id":17,"conditional":false},{"color":"rosybrown","id":18,"conditional":false},{"color":"darkgoldenrod","id":19,"conditional":false},{"color":"dimgray","id":20,"conditional":false},{"color":"gainsboro","id":21,"conditional":false},{"color":"lightpink","id":22,"conditional":false},{"color":"forestgreen","id":23,"conditional":false},{"color":"darkred","id":24,"conditional":false},{"color":"darkturquoise","id":25,"conditional":false}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.483be47b.chunk.js.map