(this["webpackJsonpusers-manager"]=this["webpackJsonpusers-manager"]||[]).push([[0],{40:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n(33),c=n.n(a),o=(n(40),n(5)),i=n(6),u=n(8),d=n(7),p=n(2),l=n.n(p),j=n(9),h=n(3),b=n(11),O=n(4),m=n(21),x=n.n(m),f={getAllUsers:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,x.a.get("https://jsonplaceholder.typicode.com/users");case 3:return n=e.sent,t=n.data.map((function(e){return{id:e.id,name:e.name,email:e.email,street:e.address.street,city:e.address.city,zipcode:e.address.zipcode,hasIncompleted:!0}})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getItemsById:function(){var e=Object(h.a)(l.a.mark((function e(t,n){var s,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(n);case 2:return s=e.sent,r=s.data,a=r.filter((function(e){return e.userId===parseInt(t)})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},v=n(16),y=(n(60),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleInputChange=function(){var e=Object(h.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,r=t.target.name,e.next=4,s.setState({user:Object(j.a)(Object(j.a)({},s.state.user),{},Object(v.a)({},r,n))});case 4:s.props.setCurrentUser(s.state.user);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.toggleOtherData=function(){s.setState({showOtherData:!s.state.showOtherData})},s.state={user:s.props.data,showOtherData:!1},s}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.user,n=t.id,r=this.state.showOtherData?"block":"none",a=t.hasIncompleted?"uncompletedTasks":"completedTasks",c=this.props.selectedUserId===n?"userSelected":"";return Object(s.jsxs)("div",{className:"user ".concat(a," ").concat(c),children:[Object(s.jsx)(b.b,{to:"/user/".concat(n),onClick:function(){return e.props.selectUser(n)},children:Object(s.jsxs)("strong",{children:["ID: ",n]})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"data-row",children:[Object(s.jsx)("strong",{children:"Name:\xa0"}),Object(s.jsx)("input",{className:"textbox",type:"text",name:"name",value:t.name,onChange:this.handleInputChange})]}),Object(s.jsxs)("div",{className:"data-row",children:[Object(s.jsx)("strong",{children:"Email:\xa0"}),Object(s.jsx)("input",{className:"textbox",type:"text",name:"email",value:t.email,onChange:this.handleInputChange})]}),Object(s.jsx)("input",{type:"button",value:"Other Data",className:"m-right",onMouseEnter:this.toggleOtherData}),Object(s.jsxs)("div",{className:"other-data",style:{display:r},children:[Object(s.jsxs)("div",{className:"data-row",children:[Object(s.jsx)("strong",{children:"Street:\xa0"}),Object(s.jsx)("input",{className:"textbox",type:"text",name:"street",value:t.street,onChange:this.handleInputChange})]}),Object(s.jsxs)("div",{className:"data-row",children:[Object(s.jsx)("strong",{children:"City:\xa0"}),Object(s.jsx)("input",{className:"textbox",type:"text",name:"city",value:t.city,onChange:this.handleInputChange})]}),Object(s.jsxs)("div",{className:"data-row",children:[Object(s.jsx)("strong",{children:"Zipcode:\xa0"}),Object(s.jsx)("input",{className:"textbox",type:"text",name:"zipcode",value:t.zipcode,onChange:this.handleInputChange})]})]}),Object(s.jsx)("input",{type:"button",value:"Update",className:"btn m-right",onClick:function(){return e.props.updateUser(n)}}),Object(s.jsx)("input",{type:"button",value:"Delete",className:"btn",onClick:function(){return e.props.deleteUser(n)}})]})}}]),n}(r.Component)),g=(n(66),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleInputChange=function(){var e=Object(h.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,r=t.target.name,e.next=4,s.setState(Object(v.a)({},r,n));case 4:s.props.setCurrentUser(s.state);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.addUser=function(){0!==s.state.name.length&&0!==s.state.email.length?s.props.addUser():alert("Name and email cannot be empty!")},s.state={name:"",email:""},s}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"add-user",children:[Object(s.jsx)("h3",{children:"Add New User"}),Object(s.jsxs)("div",{className:"add-user-body",children:["Name: ",Object(s.jsx)("input",{type:"text",name:"name",onChange:this.handleInputChange}),Object(s.jsx)("br",{}),"Email: ",Object(s.jsx)("input",{type:"text",name:"email",onChange:this.handleInputChange}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)(b.b,{to:"/",children:Object(s.jsx)("button",{type:"button",className:"btn m-right",children:"Cancel"})}),Object(s.jsx)("input",{type:"button",value:"Add",className:"btn",onClick:function(){return e.addUser()}})]})]})]})}}]),n}(r.Component)),C=(n(67),function(e){var t=e.placeholder,n=e.setKeyword;return Object(s.jsxs)("div",{className:"search-box",children:["Search ",Object(s.jsx)("input",{type:"search",placeholder:t,onChange:n})]})}),k=(n(68),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todos,n=this.props.match.params.id,r="",a=t.map((function(t){return r=t.completed?"none":"block",Object(s.jsxs)("div",{className:"todo",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("strong",{children:"Title: "}),Object(s.jsx)("span",{children:t.title})]}),Object(s.jsxs)("div",{className:"completed-row",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("strong",{children:"Completed: "}),Object(s.jsx)("span",{children:t.completed.toString()})]}),Object(s.jsx)("button",{style:{display:r},className:"btn",onClick:function(n){return e.props.markCompleted(t.id)},children:"Mark Completed"})]})]},t.id)}));return Object(s.jsxs)("div",{className:"todos",children:[Object(s.jsxs)("div",{className:"todos-header",children:[Object(s.jsxs)("h3",{children:["Todos - User ",n]}),Object(s.jsx)(b.b,{to:"/user/".concat(n,"/addTodo"),children:Object(s.jsx)("button",{type:"button",className:"btn-add-todo btn",children:"Add"})})]}),Object(s.jsx)("div",{className:"todos-list",children:a})]})}}]),n}(r.Component)),w=(n(69),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleInputChange=function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.setState({title:t.target.value});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={title:""},s}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.match.params.id;return Object(s.jsxs)("div",{className:"add-todo",children:[Object(s.jsxs)("h3",{children:["Add New Todo - User ",t]}),Object(s.jsxs)("div",{className:"add-todo-body",children:["Title: ",Object(s.jsx)("input",{type:"text",name:"title",onChange:this.handleInputChange}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)(b.b,{to:"/user/".concat(t),children:Object(s.jsx)("button",{type:"button",className:"btn m-right",children:"Cancel"})}),Object(s.jsx)("input",{type:"button",value:"Add",className:"btn",onClick:function(){return e.props.addTodo(e.state.title)}})]})]})]})}}]),n}(r.Component)),U=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).getUserTodos=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getItemsById(s.props.match.params.id,"https://jsonplaceholder.typicode.com/todos");case 2:t=e.sent,s.setState({todos:t}),s.hasIncompletedTasks();case 5:case"end":return e.stop()}}),e)}))),s.addTodo=function(){var e=Object(h.a)(l.a.mark((function e(t){var n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.state.todos,r=0,n.length>0&&(r=n[n.length-1].id),a={id:r+1,userId:s.props.match.params.id,title:t,completed:!1},c=n.concat(a),e.next=8,s.setState({todos:c});case 8:s.hasIncompletedTasks(),s.props.history.push("/user/".concat(s.props.match.params.id));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.markCompleted=function(){var e=Object(h.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.state.todos,r=n.findIndex((function(e){return e.id===parseInt(t)})),n[r].completed=!0,e.next=5,s.setState({todos:n});case 5:s.hasIncompletedTasks();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.hasIncompletedTasks=function(){var e=!1;s.state.todos.forEach((function(t){!1===t.completed&&(e=!0)})),e?s.props.updateHasIncompletedTasks(s.props.match.params.id,!0):s.props.updateHasIncompletedTasks(s.props.match.params.id,!1)},s.state={todos:[]},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getUserTodos()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.getUserTodos()}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{exact:!0,path:"/user/:id/addTodo",render:function(t){return Object(s.jsx)(w,Object(j.a)(Object(j.a)({},t),{},{addTodo:function(t){return e.addTodo(t)}}))}}),Object(s.jsx)(O.a,{path:"/user/:id",render:function(t){return Object(s.jsx)(k,Object(j.a)(Object(j.a)({},t),{},{todos:e.state.todos,markCompleted:function(t){return e.markCompleted(t)}}))}})]})})}}]),n}(r.Component),N=(n(70),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.posts,t=this.props.match.params.id,n=e.map((function(e){return Object(s.jsxs)("div",{className:"post",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{children:"Title: "}),e.title]}),Object(s.jsx)("br",{}),Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{children:"Body: "}),e.body]})]},e.id)}));return Object(s.jsxs)("div",{className:"posts",children:[Object(s.jsxs)("div",{className:"posts-header",children:[Object(s.jsxs)("h3",{children:["Posts - User ",t]}),Object(s.jsx)(b.b,{to:"/user/".concat(t,"/addPost"),children:Object(s.jsx)("button",{type:"button",className:"btn-add-post btn",children:"Add"})})]}),Object(s.jsx)("div",{className:"posts-list",children:n})]})}}]),n}(r.Component)),I=(n(71),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleInputChange=function(){var e=Object(h.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,r=t.target.name,e.next=4,s.setState(Object(v.a)({},r,n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={title:"",body:""},s}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.match.params.id,n=this.state.title,r=this.state.body;return Object(s.jsxs)("div",{className:"add-post",children:[Object(s.jsxs)("h3",{children:["Add New Post - User ",t]}),Object(s.jsxs)("div",{className:"add-post-body",children:["Title: ",Object(s.jsx)("input",{type:"text",name:"title",onChange:this.handleInputChange}),Object(s.jsx)("br",{}),"Body: ",Object(s.jsx)("input",{type:"text",name:"body",onChange:this.handleInputChange}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsx)(b.b,{to:"/user/".concat(t),children:Object(s.jsx)("button",{type:"button",className:"btn m-right",children:"Cancel"})}),Object(s.jsx)("input",{type:"button",value:"Add",className:"btn",onClick:function(t){return e.props.addPost(n,r)}})]})]})]})}}]),n}(r.Component)),T=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).getUserPosts=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getItemsById(s.props.match.params.id,"https://jsonplaceholder.typicode.com/posts");case 2:t=e.sent,s.setState({posts:t});case 4:case"end":return e.stop()}}),e)}))),s.addPost=function(){var e=Object(h.a)(l.a.mark((function e(t,n){var r,a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.state.posts,a=0,r.length>0&&(a=r[r.length-1].id),c={id:a+1,userId:s.props.match.params.id,title:t,body:n},o=r.concat(c),e.next=8,s.setState({posts:o});case 8:s.props.history.push("/user/".concat(s.props.match.params.id));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s.state={posts:[]},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getUserPosts()}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.getUserPosts()}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{exact:!0,path:"/user/:id/addPost",render:function(t){return Object(s.jsx)(I,Object(j.a)(Object(j.a)({},t),{},{addPost:function(t,n){return e.addPost(t,n)}}))}}),Object(s.jsx)(O.a,{path:"/user/:id",render:function(t){return Object(s.jsx)(N,Object(j.a)(Object(j.a)({},t),{},{posts:e.state.posts}))}})]})})}}]),n}(r.Component),S=(n(72),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).setCurrentUser=function(t){e.setState({currentUser:t})},e.addUser=Object(h.a)(l.a.mark((function t(){var n,s,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.users,s=n[n.length-1].id,r=s+1,t.next=5,e.setState({currentUser:Object(j.a)(Object(j.a)({},e.state.currentUser),{},{id:r})});case 5:a=n.concat(e.state.currentUser),e.setState({users:a});case 7:case"end":return t.stop()}}),t)}))),e.updateUser=function(){var t=e.state.users,n=e.state.currentUser,s=t.map((function(e){return e.id===n.id?n:e}));e.setState({users:s})},e.deleteUser=function(t){var n=e.state.users.filter((function(e){return e.id!==t}));e.setState({users:n})},e.setKeyword=function(t){e.setState({keyword:t.target.value})},e.updateHasIncompletedTasks=function(){var t=Object(h.a)(l.a.mark((function t(n,s){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state.users,a=r.findIndex((function(e){return e.id===parseInt(n)})),!(r.length>0)){t.next=6;break}return r[a].hasIncompleted=s,t.next=6,e.setState({users:r});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.selectUser=function(t){e.setState({selectedUserId:t})},e.state={users:[],currentUser:{},keyword:"",selectedUserId:0},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAllUsers();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.users,r=t.keyword,a=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||e.email.toLowerCase().includes(r.toLowerCase())})).map((function(t){return Object(s.jsx)(y,{data:t,setCurrentUser:function(t){return e.setCurrentUser(t)},updateUser:function(t){return e.updateUser(t)},deleteUser:function(t){return e.deleteUser(t)},selectUser:function(t){return e.selectUser(t)},selectedUserId:e.state.selectedUserId},t.id)}));return Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)("h1",{children:"Users Manager"}),Object(s.jsxs)("div",{className:"search-row",children:[Object(s.jsx)(C,{placeholder:"Search name or email",setKeyword:this.setKeyword}),Object(s.jsx)(b.b,{to:"/add",children:Object(s.jsx)("button",{type:"button",className:"btn",children:"Add"})})]}),Object(s.jsx)("div",{children:a})]}),Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"/add",render:function(){return Object(s.jsx)(g,{setCurrentUser:function(t){return e.setCurrentUser(t)},addUser:e.addUser})}}),Object(s.jsx)(O.a,{path:"/user/:id",render:function(t){return Object(s.jsxs)("div",{children:[Object(s.jsx)(U,Object(j.a)(Object(j.a)({},t),{},{updateHasIncompletedTasks:function(t,n){return e.updateHasIncompletedTasks(t,n)}})),Object(s.jsx)(T,Object(j.a)({},t))]})}})]})]})}}]),n}(r.Component)),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(S,{})})}}]),n}(r.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(s.jsx)(b.a,{children:Object(s.jsx)(D,{})}),document.getElementById("root")),P()}},[[73,1,2]]]);
//# sourceMappingURL=main.99e5719a.chunk.js.map