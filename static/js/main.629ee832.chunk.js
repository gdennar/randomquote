(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(5),a=c.n(s),r=(c(11),c(4)),i=c.n(r),l=c(6),u=c(2),d=c(0);var h=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)(""),a=Object(u.a)(s,2),r=a[0],h=a[1],b=Object(o.useState)(""),j=Object(u.a)(b,2),f=j[0],m=j[1];return Object(o.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://type.fit/api/quotes");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c),o=Math.floor(Math.random()*c.length),h(c[o]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("body",{className:"quote-design",style:{color:f,backgroundColor:f,minHeight:"100vh"},children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{style:{color:"white"},children:"Random Quote Generator"})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{id:"quote-box",children:[Object(d.jsxs)("div",{id:"quote-text",children:[Object(d.jsx)("i",{className:"fas fa-quote-left"}),Object(d.jsx)("span",{id:"quote",className:"text-design",children:r.text})]}),Object(d.jsx)("div",{className:"quote-author",children:Object(d.jsx)("span",{id:"author",className:"text-design",children:r.author||"No author"})}),Object(d.jsxs)("div",{id:"footer",children:[Object(d.jsxs)("div",{className:"footer-socials",children:[Object(d.jsx)("a",{href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+r.text+'" '+r.author),id:"tweet-quote",className:"quote-design",target:"_blank",rel:"noreferrer",style:{backgroundColor:f},children:Object(d.jsx)("i",{className:"fab fa-twitter"})}),Object(d.jsx)("a",{href:"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+encodeURIComponent(r.author)+"&content="+encodeURIComponent(r.text)+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button",id:"tumbler-quote",className:"quote-design",target:"_blank",rel:"noreferrer",style:{backgroundColor:f},children:Object(d.jsx)("i",{className:"fab fa-tumblr"})})]}),Object(d.jsx)("div",{className:"footer-btn",children:Object(d.jsx)("button",{id:"new-quote",className:"quote-design",onClick:function(){var e=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],t=Math.floor(Math.random()*e.length),o=Math.floor(Math.random()*c.length);h(c[o]),m(e[t])},style:{backgroundColor:f},children:"New Quote"})})]})]})})]})};c(14);var b=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(h,{})})};a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.629ee832.chunk.js.map