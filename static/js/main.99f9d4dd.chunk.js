(this["webpackJsonpproyecto-aseguramiento-de-calidad"]=this["webpackJsonpproyecto-aseguramiento-de-calidad"]||[]).push([[0],{30:function(e,t,a){e.exports=a(52)},35:function(e,t,a){},36:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(35),a(36),a(6)),l=a(4),s=a.n(l),u=a(11),m=a(13),d=a(17),p=a(29),b=a(23),f=a.n(b),v=(a(53),a(41),f.a.initializeApp({apiKey:"AIzaSyAlK1MBF8dC9FRL5qHHRPAbHMIFn-GgO44",authDomain:"aseguramiento-de-calidad.firebaseapp.com",databaseURL:"https://aseguramiento-de-calidad.firebaseio.com",projectId:"aseguramiento-de-calidad",storageBucket:"aseguramiento-de-calidad.appspot.com",messagingSenderId:"220027386272",appId:"1:220027386272:web:039b56be9db96673a48cc5",measurementId:"G-LGG31SHV4B"}));f.a.analytics();var E=v.firestore(),w=(a(45),function(e){var t={urlweb:"",websitename:"",description:""},a=Object(n.useState)(t),c=Object(m.a)(a,2),o=c[0],l=c[1],b=function(e){var t=e.target,a=t.name,n=t.value;l(Object(i.a)(Object(i.a)({},o),{},Object(d.a)({},a,n)))},f=function(a){a.preventDefault(),console.log(o),e.addOrEditLink(o),l(Object(i.a)({},t))},v=function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("links").doc(t).get();case 2:a=e.sent,l(Object(i.a)({},a.data()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){""===e.currentId?l(Object(i.a)({},t)):v(e.currentId)}),[e.currentId]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{initialValues:o,onSubmit:f},(function(t){var a=t.errors,n=t.touched,c=t.handleBlur,i=t.isSubmitting;return r.a.createElement("form",{className:"card card-body",onSubmit:f},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"urlweb"},"Url of the website"),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-text bg-light"},r.a.createElement("i",{className:"material-icons"},"insert_link")),r.a.createElement("input",{className:"form-control",type:"text",name:"urlweb",onChange:b,onBlur:c,value:o.urlweb,placeholder:"https://example.com/"}),a.urlweb&&n.urlweb&&a.urlweb)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"websitename"},"Name of the website"),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("div",{className:"input-group-text bg-light"},r.a.createElement("i",{className:"material-icons"},"create")),r.a.createElement("input",{className:"form-control",type:"text",name:"websitename",onChange:b,onBlur:c,value:o.websitename,placeholder:"example"}),a.websitename&&n.websitename&&a.websitename)),r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{value:o.description,onChange:b,name:"description",rows:"3",className:"form-control",placeholder:"Description"})),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:i},""===e.currentId?"Save":"Update"))})))}),h=a(12),g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),d=l[0],p=l[1],b=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==d){e.next=6;break}return e.next=3,E.collection("links").doc().set(t);case 3:Object(h.b)("New Link Added",{type:"success"}),e.next=10;break;case 6:return e.next=8,E.collection("links").doc(d).update(t);case 8:Object(h.b)("Link Updated Successfully",{type:"info"}),p("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("are you sure you want to delete this link?")){e.next=4;break}return e.next=3,E.collection("links").doc(t).delete();case 3:Object(h.b)("Link Removed Successfully",{type:"error",autoClose:2e3});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.collection("links").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id}))})),c(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-8 p-2"},r.a.createElement(w,{addOrEditLink:b,currentId:d,Links:a})),r.a.createElement("div",{className:"col-md-8 p-2"},a.map((function(e){return r.a.createElement("div",{className:"card mb-1",key:e.id},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("h4",null,e.websitename),r.a.createElement("div",null,r.a.createElement("i",{className:"material-icons",onClick:function(){return p(e.id)}},"create"),r.a.createElement("i",{className:"material-icons text-danger",onClick:function(){return f(e.id)}},"close"))),r.a.createElement("p",null,e.description),r.a.createElement("a",{href:e.urlweb,target:"_blank",rel:"noopener noreferrer"},"Go to Website")))})))))};a(48);var k=function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"container p-4"},r.a.createElement("div",{className:"row"},r.a.createElement(g,null)),r.a.createElement(h.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49),a(50);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.99f9d4dd.chunk.js.map