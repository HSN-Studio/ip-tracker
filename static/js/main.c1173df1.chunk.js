(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(4),s=c.n(a),i=c(3),j=(c(8),c(9)),o=c(1);var l=function(e){var t=e.clickHandler,c=e.inputHandler;return Object(o.jsxs)("div",{className:"search-container",children:[Object(o.jsx)("h1",{className:"title",children:"IP Address Tracker"}),Object(o.jsxs)("div",{className:"search-bar",children:[Object(o.jsx)("input",{type:"text",placeholder:"Search for IP address or domain",onChange:c}),Object(o.jsx)("span",{className:"search-icon",onClick:t,children:Object(o.jsx)(j.a,{color:"white"})})]})]})};var d=function(e){var t=e.data;return t?Object(o.jsx)("div",{className:"info-container",children:Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("p",{children:"IP ADDRESS"}),Object(o.jsx)("h2",{children:t.query}),Object(o.jsx)("p",{children:"LOCATION"}),Object(o.jsxs)("h2",{children:[t.city,", ",t.countryCode," ",t.zip]}),Object(o.jsx)("p",{children:"TIMEZONE"}),Object(o.jsx)("h2",{children:t.timezone}),Object(o.jsx)("p",{children:"ISP"}),Object(o.jsx)("h2",{children:t.isp})]})}):null},h=c(18),b=c(19);var p=function(e){var t=e.position,c=Object(n.useState)(""),r=Object(i.a)(c,2),a=r[0],s=r[1];Object(n.useEffect)((function(){j()}),[t]);var j=function(){var e=a.map;e&&e.flyTo(t)};return Object(o.jsx)("div",{className:"map",id:"map",children:Object(o.jsx)(h.a,{center:[31.4504,73.135],zoom:13,whenCreated:function(e){return s({map:e})},children:Object(o.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})})};var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(i.a)(a,2),j=s[0],h=s[1],b=Object(n.useState)([48.864716,2.349]),u=Object(i.a)(b,2),O=u[0],x=u[1],f=function(e){fetch("http://ip-api.com/json/".concat(e)).then((function(e){return e.json()})).then((function(e){h(e),console.log(e.lat,e.lon),x([e.lat,e.lon])}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{inputHandler:function(e){r(e.target.value)},clickHandler:function(){f(c)}}),Object(o.jsx)(d,{data:j}),Object(o.jsx)(p,{position:O})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.c1173df1.chunk.js.map