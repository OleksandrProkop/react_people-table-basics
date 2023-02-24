(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(2)),r=(c(22),c(6)),j=c.n(r),i=c(0),l=function(){return Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})},o=c(8),b=c(11),d=c(4),h=c(1),x="https://mate-academy.github.io/react_people-table/api/people.json";function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(x)})).then((function(e){return e.json()}));var e}c(24);var u=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"/people/".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},m=function(e){var t=e.personas,c=e.selectedPersonId,n=function(e){return e.slug===c};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var c=t.find((function(t){return t.name===e.motherName})),a=t.find((function(t){return t.name===e.fatherName}));return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":n(e)}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:e})}),Object(i.jsx)("td",{className:j()({"has-text-danger":"f"===e.sex}),children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:c?Object(i.jsx)(p,{person:c}):"".concat(e.motherName||"-")}),Object(i.jsx)("td",{children:a?Object(i.jsx)(p,{person:a}):"".concat(e.fatherName||"-")})]})}))})]})},f=function(){var e=Object(h.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),r=Object(d.a)(a,2),j=r[0],l=r[1],x=Object(h.useState)(!1),p=Object(d.a)(x,2),f=p[0],v=p[1],g=Object(s.h)().slug,N=void 0===g?"":g,y=function(){var e=Object(b.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,O();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l(!0);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){y()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:f?Object(i.jsx)(u,{}):Object(i.jsxs)(i.Fragment,{children:[j?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(i.jsx)(m,{personas:c,selectedPersonId:N}),!c.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})})]})},v=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(l,{})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})}),Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)("h1",{className:"title",children:"Home Page"})}),Object(i.jsx)(s.b,{path:"home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.b,{path:"people",children:[Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.b,{path:":slug",element:Object(i.jsx)(f,{})})]}),Object(i.jsx)(s.b,{path:"people/:slug",element:Object(i.jsx)(f,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(v,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.676e5c4e.chunk.js.map