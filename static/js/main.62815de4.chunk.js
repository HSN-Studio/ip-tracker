(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{12:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(9),a=c.n(r),i=c(3),j=(c(12),c(13)),o=c(1);var l=function(e){var t=e.clickHandler,c=e.inputHandler,n=e.errMsg;return Object(o.jsxs)("div",{className:"search-container",children:[Object(o.jsx)("h1",{className:"title",children:"IP Address Tracker"}),Object(o.jsxs)("div",{className:"search-bar",children:[Object(o.jsx)("input",{type:"text",placeholder:"Search for IP address or domain",onChange:c}),Object(o.jsx)("span",{className:"search-icon",onClick:t,children:Object(o.jsx)(j.a,{color:"white"})})]}),Object(o.jsx)("div",{className:"err-msg",children:n&&Object(o.jsx)("p",{children:n})})]})};var d=function(e){var t=e.data;return t?Object(o.jsx)("div",{className:"info-container",children:Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("p",{children:"IP ADDRESS"}),Object(o.jsx)("h3",{children:t.ip})]}),Object(o.jsxs)("span",{children:[Object(o.jsx)("p",{children:"LOCATION"}),Object(o.jsxs)("h3",{children:[t.city,", ",t.country_code," ",t.postal]})]}),Object(o.jsxs)("span",{children:[Object(o.jsx)("p",{children:"TIMEZONE"}),Object(o.jsx)("h3",{children:t.timezone})]}),Object(o.jsxs)("span",{children:[Object(o.jsx)("p",{children:"ISP"}),Object(o.jsx)("h3",{children:t.org})]})]})}):null},b=c(21),h=c(25),O=c(22),p=c(23),u=c(24);var x=function(e){var t=e.position,c=Object(n.useState)(""),s=Object(i.a)(c,2),r=s[0],a=s[1];Object(n.useEffect)((function(){j()}),[t]);var j=function(){var e=r.map;e&&e.flyTo(t)};return Object(o.jsx)("div",{className:"map",id:"map",children:Object(o.jsxs)(b.a,{center:[31.4504,73.135],zoom:13,whenCreated:function(e){return a({map:e})},children:[Object(o.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(o.jsx)(O.a,{position:t,children:Object(o.jsxs)(p.a,{children:["IP Located Here. ",Object(o.jsx)("br",{})," Accuracy 100%."]})}),Object(o.jsx)(u.a,{position:"bottomleft"})]})})};var f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(i.a)(r,2),j=a[0],b=a[1],h=Object(n.useState)([48.864716,2.349]),O=Object(i.a)(h,2),p=O[0],u=O[1],f=Object(n.useState)(""),m=Object(i.a)(f,2),v=m[0],g=m[1],S=function(e){fetch("https://ipapi.co/".concat(e,"/json/")).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.error)throw e.reason;if("Sign up to access"===e.latitude)throw"IP access restricted!";b(e),u([e.latitude,e.longitude]),g("")})).catch((function(e){g(e)}))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{inputHandler:function(e){s(e.target.value.replace(/\s/g,""))},clickHandler:function(){S(c)},errMsg:v}),Object(o.jsx)(d,{data:j}),Object(o.jsx)(x,{position:p})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.62815de4.chunk.js.map