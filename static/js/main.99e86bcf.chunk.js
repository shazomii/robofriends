(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(2),i=n.n(o),l=(n(13),n(3)),c=n(4),m=n(6),s=n(5),u=n(7),h=function(e){var a=e.name,n=e.id,t=e.email,o=e.username,i=e.location;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("h2",null,a),r.a.createElement("h4",null,o),r.a.createElement("h5",null,i),r.a.createElement("p",null,t))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,username:a[n].username,location:a[n].address.city,email:a[n].email})})))},b=function(e){e.searchField;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:a}))},g=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},f=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(m.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(a){return e.setState({robots:a})}))}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchField,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"garamond ttu f1 blue"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(d,{robots:t}))):r.a.createElement("h1",null,"Loading")}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);i.a.render(r.a.createElement(f,{robots:[{id:1,name:"Seye Oyeniran",email:"my-email@gmail.com"},{id:2,name:"Seye Johnson",email:"my-email@gmail.com"},{id:3,name:"Taiwo Oyeniran",email:"my-email@gmail.com"},{id:4,name:"Bode Oyeniran",email:"my-email@gmail.com"},{id:5,name:"Segun Oyeniran",email:"my-email@gmail.com"},{id:6,name:"Tosin Oyeniran",email:"my-email@gmail.com"}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.99e86bcf.chunk.js.map