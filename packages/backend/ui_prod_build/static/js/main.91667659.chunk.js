(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,n,t){},67:function(e,n,t){"use strict";t.r(n);var c=t(4),r=t(23),a=t(30),i=(t(55),t(14)),s=t(3),o=function(e){var n,t,r=e.sortBy,a=e.setSortBy,i=e.listVisible,s=e.setListVisible,o=e.loading,l=e.error,j=e.data,u="amount"===r?"name":"amount",b=j&&(n=j.allNames.slice(),"name"===r?n.sort((function(e,n){return e.name.localeCompare(n.name)})):n.sort((function(e,n){return n.amount-e.amount})));return Object(c.jsxs)("div",{children:[o&&Object(c.jsx)("p",{children:"Loading..."}),l&&Object(c.jsx)("p",{children:"Error!"}),b&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"horizontal",children:[Object(c.jsx)("button",{onClick:function(){return a(u)},children:"Sort by ".concat(u)}),Object(c.jsx)("button",{onClick:function(){return s(!i)},children:"Search by name"})]}),Object(c.jsx)("ol",{children:b.map((function(e,n){return Object(c.jsx)("li",{children:"".concat(e.name,", amount: ").concat(e.amount,".")},n)}))}),Object(c.jsx)("p",{children:"Unique names: ".concat(b.length,".\n              Names in total: ").concat((t=b,t.reduce((function(e,n){return e+n.amount}),0)),".")})]})]})};function l(){var e=Object(a.a)(["\n  query GetName($name: String!) {\n    amount(name: $name)\n  }\n"]);return l=function(){return e},e}var j=Object(i.gql)(l()),u=function(e){var n=e.listVisible,t=e.setListVisible,a=e.data,o=Object(s.useState)("Ville"),l=Object(r.a)(o,2),u=l[0],b=l[1],d=Object(i.useLazyQuery)(j),h=Object(r.a)(d,2),O=h[0],m=h[1];return Object(s.useEffect)((function(){O({variables:{name:u}})}),[O,u]),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return t(!n)},children:"Go back"}),a&&Object(c.jsxs)("label",{children:["Search by name:",Object(c.jsx)("select",{value:u,onChange:function(e){return b(e.target.value)},children:a.allNames.map((function(e,n){return Object(c.jsx)("option",{value:e.name,children:e.name},n)}))})]}),m.loading&&"Loading...",m.error&&"Error!",m.data&&Object(c.jsx)("p",{children:"".concat(u,", amount: ").concat(m.data.amount,".")})]})},b=t(52),d=t.n(b),h=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"nappmono"}),Object(c.jsxs)("p",{children:["Name App Monorepo. Source on ",Object(c.jsx)("a",{href:"https://github.com/jalho/nappmono",children:"GitHub"}),"."]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Explore the visual GraphQL API endpoint at "}),Object(c.jsx)("a",{href:"/graphiql",children:Object(c.jsx)("code",{children:"/graphiql"})}),Object(c.jsx)("span",{children:"."}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Client sends requests to "}),Object(c.jsx)("code",{children:"/graphql"}),Object(c.jsx)("span",{children:"."})]})]})};function O(){var e=Object(a.a)(["\n  query GetAllNames {\n    allNames {\n      name\n      amount\n    }\n  }\n"]);return O=function(){return e},e}var m=new i.InMemoryCache,p=Object(i.createHttpLink)({uri:"/graphql"}),x=new i.ApolloClient({cache:m,link:p}),f=Object(i.gql)(O()),v=function(){var e=Object(s.useState)("amount"),n=Object(r.a)(e,2),t=n[0],a=n[1],l=Object(s.useState)(!0),j=Object(r.a)(l,2),b=j[0],d=j[1],O=Object(i.useQuery)(f),m=O.loading,p=O.error,x=O.data;return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{}),b?Object(c.jsx)(o,{sortBy:t,setSortBy:a,listVisible:b,setListVisible:d,loading:m,error:p,data:x}):Object(c.jsx)(u,{listVisible:b,setListVisible:d,data:x})]})};d.a.render(Object(c.jsx)(i.ApolloProvider,{client:x,children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.91667659.chunk.js.map