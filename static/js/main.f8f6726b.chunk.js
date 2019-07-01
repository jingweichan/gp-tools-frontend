(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a,t){e.exports=t(71)},40:function(e,a,t){},66:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(30),c=t.n(n),o=(t(40),t(23)),m=t(9),s=t(7),u=t(34),d=t(17),i=t(31),h=t(18),p=t(15),E=t.n(p),b=(t(66),function(){var e=Object(s.c)({contentType:s.b,headerDate:s.b,method:s.b,partnerSecret:s.b,requestBody:s.b,requestUrl:s.b}),a=Object(h.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)({hashedPayload:"",hmacDigest:"",requestData:""}),o=Object(h.a)(c,2),m=o[0],p=o[1],b=Object(r.useState)([]),f=Object(h.a)(b,2),v=f[0],y=f[1];Object(r.useEffect)(function(){n({contentType:t.contentType||"application/json",headerDate:t.headerDate||(new Date).toUTCString(),method:t.method||"POST",partnerSecret:t.partnerSecret||"",requestBody:t.requestBody||'{"foo":"bar","baz":"lol","kek":168}',requestUrl:t.requestUrl||"/relative-path"})},[]);var N=Object(r.useCallback)(function(){t.partnerSecret&&(y([]),p(function(e,a,t,r,l,n){"GET"!==e&&l||(l="");var c=l?E.a.enc.Base64.stringify(E.a.SHA256(l)):"",o=[[e,a,t,r,c].join("\n"),"\n"].join("");return{hashedPayload:c,requestData:o,hmacDigest:E.a.enc.Base64.stringify(E.a.HmacSHA256(o,n))}}(t.method,t.contentType,t.headerDate,t.requestUrl,t.requestBody,t.partnerSecret)))},[t]);Object(r.useEffect)(function(){N()},[N,t]);var g=function(e){var a=Object(i.a)({},t,Object(d.a)({},e.target.name,e.target.value));n(a,"push")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"HMAC Calculator"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"partner-secret"},"Secret"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"partner-secret",name:"partnerSecret",onChange:g,required:!0,type:"text",value:t.partnerSecret}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"method"},"Method"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("select",{className:"custom-select",id:"method",name:"method",onChange:g,value:t.method},l.a.createElement("option",{value:"POST"},"POST"),l.a.createElement("option",{value:"GET"},"GET")))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"content-type"},"Header Content Type"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"content-type",name:"contentType",onChange:g,type:"text",value:t.contentType}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"header-date"},"Header Date"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"header-date",name:"headerDate",onChange:g,type:"text",value:t.headerDate}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"request-url"},"Request URL"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"request-url",name:"requestUrl",onChange:g,type:"text",placeholder:"/relative-path",value:t.requestUrl}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"request-body"},"Request Body",l.a.createElement("br",null),"(JSON stringified)"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("textarea",{className:"form-control monospace",id:"request-body",name:"requestBody",onChange:g,rows:3,value:t.requestBody}))),l.a.createElement("button",{className:"btn btn-primary",id:"submit-btn",onClick:function(e){e.preventDefault(),t.partnerSecret?N():y([].concat(Object(u.a)(v),["Please enter secret."]))},type:"button"},"Calculate HMAC"),v.map(function(e){return l.a.createElement("div",{className:"error"},e)}),l.a.createElement("hr",null),l.a.createElement("h3",null,"Result"),l.a.createElement("pre",null,l.a.createElement("code",null,"HMAC: ",l.a.createElement("span",{className:"hmac"},m.hmacDigest)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,"Hashed payload:"," ","GET"===t.method?"N/A":m.hashedPayload),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,"Request data: ",m.requestData))))}),f=function(){return l.a.createElement(o.a,{basename:"/gp-tools-frontend"},l.a.createElement(s.a,{ReactRouterRoute:m.b},l.a.createElement(o.b,{to:"/hmac"},"HMAC Calculator")," | Pop Signature Calculator",l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/hmac",component:b}),l.a.createElement(m.a,{to:"/hmac"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.f8f6726b.chunk.js.map