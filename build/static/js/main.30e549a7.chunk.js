(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),a=n.n(i),r=n(16),o=n.n(r),s=n(17),d=n(6),u=(n(23),n(4)),j=n.n(u);var l=function(){var e=Object(i.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(0),o=Object(d.a)(r,2),u=o[0],l=o[1],h=Object(i.useState)([]),p=Object(d.a)(h,2),f=p[0],b=p[1];return Object(i.useEffect)((function(){j.a.get("https://vivekfirstmern.herokuapp.com/read").then((function(e){b(e.data)})).catch((function(){console.log("ERR")}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"inputs",children:[Object(c.jsx)("input",{type:"text",placeholder:"Friend name...",onChange:function(e){a(e.target.value)}}),Object(c.jsx)("input",{type:"number",placeholder:"Friend age...",onChange:function(e){l(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){j.a.post("https://vivekfirstmern.herokuapp.com/addfriend",{name:n,age:u}).then((function(e){b([].concat(Object(s.a)(f),[{_id:e.data._id,name:n,age:u}]))}))},children:"Add Friend "})]}),Object(c.jsx)("div",{className:"listOfFriends",children:f.map((function(e){return Object(c.jsxs)("div",{className:"friendContainer",children:[Object(c.jsxs)("div",{className:"friend",children:[Object(c.jsxs)("h3",{children:["Name: ",e.name]}),Object(c.jsxs)("h3",{children:[" Age: ",e.age]})]}),Object(c.jsx)("button",{onClick:function(){!function(e){var t=prompt("Enter new age: ");j.a.put("https://vivekfirstmern.herokuapp.com/update",{newAge:t,id:e}).then((function(){b(f.map((function(n){return n._id===e?{_id:e,name:n.name,age:t}:n})))}))}(e._id)},children:"Update"}),Object(c.jsx)("button",{id:"removeBtn",onClick:function(){var t;t=e._id,j.a.delete("https://vivekfirstmern.herokuapp.com/delete/".concat(t)).then((function(){b(f.filter((function(e){return e._id!==t})))}))},children:"X"})]})}))})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),h()}},[[42,1,2]]]);
//# sourceMappingURL=main.30e549a7.chunk.js.map