(this["webpackJsonpcontract-comparer"]=this["webpackJsonpcontract-comparer"]||[]).push([[0],{35:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,d=t(0),u=t.n(d),s=t(24),l=t.n(s),b=(t(35),t(11)),p=t.n(b),h=t(25),j=t(13),g=t(4),x=t(5),f=t(30),v=t(26),O=t.n(v),m=t(6),k=t(2),C=m.a.div(r||(r=Object(x.a)(["\n  background: #1b1b1b;\n"]))),F=m.a.input(c||(c=Object(x.a)(["\n  height: 33px;\n  padding: 0px 10px;\n  border: none;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  outline: none;\n  background: transparent;\n  color: #d4d4d4;\n  width: 330px;\n  border: 1px solid #d4d4d4;\n"]))),S=m.a.div(a||(a=Object(x.a)(["\n  margin-right: 30px;\n"]))),w=m.a.div(o||(o=Object(x.a)(["\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  padding: 5px 0px;\n"]))),y=m.a.button(i||(i=Object(x.a)(["\n  height: 35px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: none;\n  outline: none;\n  border-left: 1px solid #d4d4d4;\n  padding: 0px 15px;\n  cursor: pointer;\n  background: #3498db;\n  color: white;\n\n  &:hover {\n    background: #2980b9;\n  }\n"])));var L=function(){var n=Object(d.useState)(["",""]),e=Object(g.a)(n,2),t=e[0],r=e[1],c=Object(d.useState)([null,null]),a=Object(g.a)(c,2),o=a[0],i=a[1],u=function(n,e){var c=Object(j.a)(t);c[n]=e,r(c)},s=function(){var n=Object(h.a)(p.a.mark((function n(e){var r,c,a,d,u;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.get("https://api.bscscan.com/api?module=contract&action=getsourcecode&address=".concat(t[e],"&apikey=").concat("XTX4SCQTP5AB9F23ZEVVYPFV9G2CQIWWPV"));case 2:(null===(c=n.sent)||void 0===c||null===(r=c.data)||void 0===r?void 0:r.result.length)?((d=null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.result[0].SourceCode).startsWith("{")&&(d=d.slice(1).slice(0,-1),d=JSON.parse(d),d=Object.entries(d.sources).reduce((function(n,e){var t=Object(g.a)(e,2),r=t[0],c=t[1];return n+"\r\n ".concat(r," \r\n")+c.content}),"")),(u=Object(j.a)(o))[e]=d,i(u)):alert("The specified contract could not be fetched");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(k.jsxs)(C,{children:[Object(k.jsxs)(w,{children:[Object(k.jsxs)(S,{children:[Object(k.jsx)(F,{onChange:function(n){return u(0,n.target.value)},value:t[0],placeholder:"Enter address"}),Object(k.jsx)(y,{onClick:function(){return s(0)},children:"Fetch"})]}),Object(k.jsxs)(S,{children:[Object(k.jsx)(F,{onChange:function(n){return u(1,n.target.value)},value:t[1],placeholder:"Enter address"}),Object(k.jsx)(y,{onClick:function(){return s(1)},children:"Fetch"})]})]}),Object(k.jsx)(f.a,{height:"calc(100vh - 50px)",defaultLanguage:"javascript",defaultValue:"// some comment",original:o[0],modified:o[1],theme:"vs-dark",modifiedLanguage:"sol",originalLanguage:"sol"})]})},P=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),a(n),o(n)}))};l.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(L,{})}),document.getElementById("root")),P()}},[[58,1,2]]]);
//# sourceMappingURL=main.24a59e06.chunk.js.map