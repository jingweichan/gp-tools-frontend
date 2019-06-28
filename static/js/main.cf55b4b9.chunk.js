(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t(70)},39:function(e,a,t){},65:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(30),c=t.n(n),o=(t(39),t(22)),m=t(9),s=t(7),u=t(17),d=t(31),i=t(25),h=t(15),p=t.n(h),E=(t(65),function(){var e=Object(s.c)({contentType:s.b,headerDate:s.b,method:s.b,partnerSecret:s.b,requestBody:s.b,requestUrl:s.b}),a=Object(i.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)({hashedPayload:"",hmacDigest:"",requestData:""}),o=Object(i.a)(c,2),m=o[0],h=o[1];Object(r.useEffect)(function(){n({contentType:t.contentType||"application/json",headerDate:t.headerDate||(new Date).toUTCString(),method:t.method||"POST",partnerSecret:t.partnerSecret||"",requestBody:t.requestBody||'{"foo":"bar","baz":"lol","kek":168}',requestUrl:t.requestUrl||"/relative-path"})},[]);var E=Object(r.useCallback)(function(){t.partnerSecret&&h(function(e,a,t,r,l,n){"GET"!==e&&l||(l="");var c=l?p.a.enc.Base64.stringify(p.a.SHA256(l)):"",o=[[e,a,t,r,c].join("\n"),"\n"].join("");return{hashedPayload:c,requestData:o,hmacDigest:p.a.enc.Base64.stringify(p.a.HmacSHA256(o,n))}}(t.method,t.contentType,t.headerDate,t.requestUrl,t.requestBody,t.partnerSecret))},[t]);Object(r.useEffect)(function(){E()},[E,t]);var b=function(e){var a=Object(d.a)({},t,Object(u.a)({},e.target.name,e.target.value));n(a,"push")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"HMAC Calculator"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"partner-secret"},"Secret"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"partner-secret",name:"partnerSecret",onChange:b,required:!0,type:"text",value:t.partnerSecret}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"method"},"Method"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("select",{className:"custom-select",id:"method",name:"method",onChange:b,value:t.method},l.a.createElement("option",{value:"POST"},"POST"),l.a.createElement("option",{value:"GET"},"GET")))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"content-type"},"Header Content Type"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"content-type",name:"contentType",onChange:b,type:"text",value:t.contentType}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"header-date"},"Header Date"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"header-date",name:"headerDate",onChange:b,type:"text",value:t.headerDate}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"request-url"},"Request URL"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("input",{className:"form-control",id:"request-url",name:"requestUrl",onChange:b,type:"text",placeholder:"/relative-path",value:t.requestUrl}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-form-label col-sm-4",htmlFor:"request-body"},"Request Body",l.a.createElement("br",null),"(JSON stringified)"),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("textarea",{className:"form-control monospace",id:"request-body",name:"requestBody",onChange:b,rows:3,value:t.requestBody}))),l.a.createElement("button",{className:"btn btn-primary",id:"submit-btn",onClick:E,type:"button"},"Calculate HMAC"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Result"),l.a.createElement("pre",null,l.a.createElement("code",null,"HMAC: ",l.a.createElement("span",{className:"hmac"},m.hmacDigest)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,"Hashed payload:"," ","GET"===t.method?"N/A":m.hashedPayload),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,"Request data: ",m.requestData))))}),b=function(){return l.a.createElement(o.a,{basename:"/gp-tools-frontend"},l.a.createElement(s.a,{ReactRouterRoute:m.b},l.a.createElement(o.b,{to:"/hmac"},"HMAC Calculator")," | Pop Signature Calculator",l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/hmac",component:E}),l.a.createElement(m.a,{to:"/hmac"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.cf55b4b9.chunk.js.map