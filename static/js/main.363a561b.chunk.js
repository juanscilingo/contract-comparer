(this["webpackJsonpcontract-comparer"]=this["webpackJsonpcontract-comparer"]||[]).push([[0],{38:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var c,a,r,o,i,d=t(0),s=t.n(d),u=t(27),l=t.n(u),b=(t(38),t(12)),p=t.n(b),h=t(28),j=t(15),f=t(2),g=t(5),x=t(33),O=t(29),v=t.n(O),m=t(6),k=t(13),C=t.n(k),w=t(3),S=m.a.div(c||(c=Object(g.a)(["\n  background: #1b1b1b;\n"]))),F=m.a.input(a||(a=Object(g.a)(["\n  height: 33px;\n  padding: 0px 10px;\n  border: none;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  outline: none;\n  background: transparent;\n  color: #d4d4d4;\n  width: 330px;\n  border: 1px solid #d4d4d4;\n"]))),y=m.a.div(r||(r=Object(g.a)(["\n  margin-right: 30px;\n"]))),E=m.a.div(o||(o=Object(g.a)(["\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  padding: 5px 0px;\n"]))),L=m.a.button(i||(i=Object(g.a)(["\n  height: 35px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border: none;\n  outline: none;\n  border-left: 1px solid #d4d4d4;\n  padding: 0px 15px;\n  cursor: pointer;\n  background: #3498db;\n  color: white;\n\n  &:hover {\n    background: #2980b9;\n  }\n"])));var P=function(){var e,n,t=C.a.parse(window.location.search),c=Object(d.useState)(!1),a=Object(f.a)(c,2),r=a[0],o=a[1],i=Object(d.useState)([null!==(e=t.a)&&void 0!==e?e:"",null!==(n=t.b)&&void 0!==n?n:""]),s=Object(f.a)(i,2),u=s[0],l=s[1],b=Object(d.useState)([null,null]),g=Object(f.a)(b,2),O=g[0],m=g[1],k=function(e,n){var t=Object(j.a)(u);t[e]=n,l(t)},P=Object(d.useCallback)(function(){var e=Object(h.a)(p.a.mark((function e(n){var t,c,a,r,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.bscscan.com/api?module=contract&action=getsourcecode&address=".concat(u[n],"&apikey=").concat("XTX4SCQTP5AB9F23ZEVVYPFV9G2CQIWWPV"));case 2:(null===(c=e.sent)||void 0===c||null===(t=c.data)||void 0===t?void 0:t.result.length)?(r=null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.result[0].SourceCode)?(r.startsWith("{")&&(r=r.slice(1).slice(0,-1),r=JSON.parse(r),r=Object.entries(r.sources).reduce((function(e,n){var t=Object(f.a)(n,2),c=t[0],a=t[1];return e+"\r\n ".concat(c," \r\n")+a.content}),"")),(o=Object(j.a)(O))[n]=r,m(o),i={a:u[0],b:u[1]},window.history.replaceState("Diff ".concat(i.a," - ").concat(i.b),"Diff ".concat(i.a," - ").concat(i.b),"/contract-comparer?".concat(C.a.stringify(i)))):alert("Invalid address specified"):alert("The specified contract could not be fetched");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[u,O]);return Object(d.useEffect)((function(){r||(u[0]&&P(0),u[1]&&P(1),o(!0))}),[r,u,P]),Object(w.jsxs)(S,{children:[Object(w.jsxs)(E,{children:[Object(w.jsxs)(y,{children:[Object(w.jsx)(F,{onChange:function(e){return k(0,e.target.value)},value:u[0],placeholder:"Enter address"}),Object(w.jsx)(L,{onClick:function(){return P(0)},children:"Fetch"})]}),Object(w.jsxs)(y,{children:[Object(w.jsx)(F,{onChange:function(e){return k(1,e.target.value)},value:u[1],placeholder:"Enter address"}),Object(w.jsx)(L,{onClick:function(){return P(1)},children:"Fetch"})]})]}),Object(w.jsx)(x.a,{height:"calc(100vh - 50px)",defaultLanguage:"javascript",defaultValue:"// some comment",original:O[0],modified:O[1],theme:"vs-dark",modifiedLanguage:"sol",originalLanguage:"sol"})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,75)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),r(e),o(e)}))};l.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.363a561b.chunk.js.map