(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),r=n(25),s=n.n(r),o=n(26),d=n(27),l=n(33),j=n(32),b=n(8),h=n(11),O=n(28),u=n.n(O),m=n(73),x=n(29),p=n.n(x),f=n(72),v=n(30),y=n(75);var g=function(e){var t=e.onChange;return Object(c.jsx)("div",{class:"search-box",children:Object(c.jsxs)(f.a,{children:[Object(c.jsx)(v.a,{}),Object(c.jsx)(v.a,{xs:6,children:Object(c.jsx)(y.a,{children:Object(c.jsx)(y.a.Group,{controlId:"formBasicEmail",children:Object(c.jsx)(y.a.Control,{onChange:t,type:"search",placeholder:"Search by Employee Name"})})})}),Object(c.jsx)(v.a,{})]})})},k=n(31),C=n.n(k),E=(n(67),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),s=Object(h.a)(r,2),o=(s[0],s[1]),d=Object(a.useState)([]),l=Object(h.a)(d,2),j=l[0],O=l[1];Object(a.useEffect)((function(){C.a.get("https://randomuser.me/api/?results=142&nat=us").then((function(e){i(e.data.results)}))}),[]);var x=n.filter((function(e){return-1!==e.name.first.indexOf(j)||-1!==e.name.last.indexOf(j)||-1!==e.email.indexOf(j)||-1!==e.phone.indexOf(j)||-1!==e.dob.date.indexOf(j)}));function f(e){var t=e.target.id;switch(t){case"name":n.sort((function(e,t){return e.name.last<t.name.last?-1:t.name.last>e.name.last?1:0})),o.apply(void 0,Object(b.a)(n));break;case"phone":n.sort((function(e,t){return e.phone<t.phone?-1:t.phone>e.phone?1:0})),o.apply(void 0,Object(b.a)(n));break;case"email":n.sort((function(e,t){return e.email<t.email?-1:t.email>e.email?1:0})),o.apply(void 0,Object(b.a)(n));break;case"dob":n.sort((function(e,t){return e.dob.date<t.dob.date?-1:t.dob.date>e.dob.date?1:0})),o.apply(void 0,Object(b.a)(n));break;default:console.log("".concat(t))}}return Object(c.jsxs)("div",{className:"results",children:[Object(c.jsx)(g,{onChange:function(e){O(e.target.value)}}),Object(c.jsxs)(m.a,{striped:!0,hover:!0,variant:"dark",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{}),Object(c.jsx)("th",{id:"name",onClick:f,children:"Name"}),Object(c.jsx)("th",{id:"phone",onClick:f,children:"Phone"}),Object(c.jsx)("th",{id:"email",onClick:f,children:"Email"}),Object(c.jsx)("th",{id:"dob",onClick:f,children:"DOB"})]})}),Object(c.jsx)("tbody",{children:x.map((function(e,t){var n=u()({length:5,useLetters:!1});return Object(c.jsxs)("tr",{id:n,children:[Object(c.jsx)("td",{id:"image",children:Object(c.jsx)("img",{src:e.picture.medium,alt:"Employee ".concat(e.name.first," ").concat(e.name.last)})}),Object(c.jsxs)("td",{id:"name",children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{id:"phone",children:e.phone}),Object(c.jsx)("td",{id:"email",children:Object(c.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(c.jsx)("td",{id:"dob",children:Object(c.jsx)(p.a,{format:"MMM DD, YYYY",children:e.dob.date})})]},t)}))})]})]})}),S=n(74),D=(n(68),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(S.a,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("h2",{children:"Click on a column title  or utilize the search bar to query employee data."})]}),Object(c.jsx)(E,{})]})})}}]),n}(a.Component)),B=(n(69),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))});n(70);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),B()}},[[71,1,2]]]);
//# sourceMappingURL=main.1ff87719.chunk.js.map