(this.webpackJsonpsensdash=this.webpackJsonpsensdash||[]).push([[0],{200:function(e,t,n){},210:function(e,t){},212:function(e,t){},222:function(e,t){},224:function(e,t){},249:function(e,t){},250:function(e,t){},255:function(e,t){},257:function(e,t){},264:function(e,t){},283:function(e,t){},410:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var a,i=n(3),c=n.n(i),r=n(186),s=n.n(r),l=(n(200),n(14)),o=n.n(l),u=n(22),d=n(9),p=n(12),j=n(13),h=n(187),b=n(18),x=Object(h.a)({apiKey:"AIzaSyBWCGso7ConB4uAv-j-QUFCg4wWHwzo_Ng",authDomain:"mysensors-b8cfe.firebaseapp.com",databaseURL:"https://mysensors-b8cfe-default-rtdb.firebaseio.com",projectId:"mysensors-b8cfe",storageBucket:"mysensors-b8cfe.appspot.com",messagingSenderId:"265785378277",appId:"1:265785378277:web:e3f320f541eef441f15b0c",measurementId:"G-8RMGJP5T1Y"}),f=Object(b.b)(x),g=n(4),m=j.a.input(a||(a=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: transparent;\n  border: 2px solid darkgrey;\n  border-radius: 5px;\n  padding: 5px 7px;\n  margin: 0px;\n  appearance: none;\n"])));var O,v=function(e){return Object(g.jsx)(m,{value:e.value,placeholder:e.placeholder,type:e.type,onChange:e.setValue})},y=j.a.div(O||(O=Object(p.a)(["\n  padding: 7px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n"])));var w,k,S,C=function(e){return Object(g.jsx)(y,{onClick:e.clicked,style:{background:e.color||"lightgrey",color:e.textColor||"black",pointerEvents:e.clicked?"auto":"none"},children:e.value})},F={primary:"#FF6F3C",darkPurple:"#3E2F5B",purple:"#E8C7DE",darkBlue:"#345995",blue:"#86BBD8",green:"#DCF2B0",red:"#880D1E",yellow:"#FFCF00",pink:"#CC59D2",black:"#262626",lightRed:"#EF2917"},I=n(204),T=j.a.div(w||(w=Object(p.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),z=j.a.div(k||(k=Object(p.a)(["\n  padding: 20px 20px;\n  min-width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]))),D=j.a.div(S||(S=Object(p.a)(["\n  position: relative;\n  padding: 20px 20px;\n  min-width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));var E,R=function(e){var t=Object(i.useState)(!0),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)([]),s=Object(d.a)(r,2),l=s[0],p=s[1],j=Object(i.useState)(""),h=Object(d.a)(j,2),x=h[0],m=h[1],O=Object(i.useState)(""),y=Object(d.a)(O,2),w=y[0],k=y[1],S=Object(i.useState)(""),E=Object(d.a)(S,2),R=E[0],V=E[1],B=Object(i.useState)(""),L=Object(d.a)(B,2),M=L[0],P=L[1],W=Object(i.useState)(""),U=Object(d.a)(W,2),A=U[0],G=U[1],N=Object(i.useState)(""),J=Object(d.a)(N,2),Y=J[0],H=J[1],_=Object(i.useState)(!1),K=Object(d.a)(_,2),Q=K[0],q=K[1],X=Object(i.useState)(!0),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=Object(i.useState)(!1),ne=Object(d.a)(te,2),ae=ne[0],ie=ne[1],ce=null;return Object(i.useEffect)((function(){ce=setTimeout((function(){ee(!1)}),1e3);var e=Object(b.e)(f,"Users/");return Object(b.c)(e,(function(e){if(e.exists()){var t=e.val(),n=[];for(var a in t){var i=t[a];n.push(i)}p(n)}})),function(){clearTimeout(ce)}}),[]),Object(g.jsx)(T,{children:a?Object(g.jsxs)(z,{children:[Object(g.jsx)("div",{style:{fontSize:"25px",fontWeight:"bold",marginBottom:"20px"},children:"Login"}),Object(g.jsx)(v,{value:x,setValue:function(e){m(e.target.value)},type:"text",placeholder:"username"}),Object(g.jsx)("div",{style:{height:"20px"}}),Object(g.jsx)(v,{value:w,setValue:function(e){k(e.target.value)},type:"password",placeholder:"password"}),Object(g.jsx)("div",{style:{height:"40px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:R}),Object(g.jsx)(C,{clicked:function(){return re.apply(this,arguments)},value:"login",color:F.primary,textColor:"white"}),Object(g.jsx)("div",{onClick:function(){return c(!1)},style:{cursor:"pointer",marginTop:"10px"},children:"register"}),$&&Object(g.jsx)("div",{style:{top:"0px",position:"absolute",height:"100%",width:"100%",background:"black",opacity:.6}})]}):Object(g.jsxs)(D,{children:[Object(g.jsx)("div",{style:{fontSize:"25px",fontWeight:"bold",marginBottom:"20px"},children:"Register"}),Object(g.jsx)(v,{value:M,setValue:function(e){P(e.target.value)},type:"text",placeholder:"username"}),Object(g.jsx)("div",{style:{height:"20px"}}),Object(g.jsx)(v,{value:A,setValue:function(e){G(e.target.value)},type:"password",placeholder:"password"}),Object(g.jsx)("div",{style:{height:"40px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Y}),Object(g.jsx)(C,{clicked:function(){return se.apply(this,arguments)},value:"register",color:F.primary,textColor:"white"}),Object(g.jsx)("div",{onClick:function(){return c(!0)},style:{cursor:"pointer",marginTop:"10px"},children:"go to login"}),Q&&Object(g.jsx)("div",{style:{top:"0px",position:"absolute",height:"100%",width:"100%",background:"black",opacity:.6}}),ae&&Object(g.jsx)("div",{style:{position:"absolute",height:"100%",width:"100%",top:"0px",background:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"25px",fontWeight:"bold"},children:"user registered"})]})});function re(){return(re=Object(u.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(""),n=!1,a=0;case 3:if(!(a<l.length)){t.next=15;break}if(l[a].username!==x){t.next=12;break}return t.next=7,ue(w,l[a].salt);case 7:if(t.sent!==l[a].password){t.next=12;break}return n=!0,e.setLoggedIn(!0),t.abrupt("return");case 12:a++,t.next=3;break;case 15:n||V("username or password incorrect");case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function se(){return(se=Object(u.a)(o.a.mark((function e(){var t,n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(!0),H(""),t=!1,l.forEach((function(e){e.username===M&&(t=!0)})),!t){e.next=8;break}return q(!1),H("username used"),e.abrupt("return");case 8:return e.next=10,le();case 10:return n=e.sent,e.next=13,ue(A,n);case 13:a=e.sent,i=Object(b.e)(f,"Users/"),Object(b.d)(i,{username:M,password:a,salt:n}),ie(!0),ce=setTimeout((function(){q(!1),c(!0),ie(!1)}),2e3);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return oe.apply(this,arguments)}function oe(){return(oe=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.genSalt(6);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t){return de.apply(this,arguments)}function de(){return(de=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.hash(t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},V=n(194),B=j.a.div(E||(E=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var L,M,P,W,U,A,G,N,J=function(e){return Object(g.jsx)(B,{children:Object(g.jsx)(V.a,{data:{labels:["current","average"],datasets:[{backgroundColor:[e.color,"lightgrey"],data:[e.value,e.average]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!0,text:e.title}},scales:{y:{min:e.min?Math.floor(e.min):0,max:e.max?Math.floor(e.max):void 0}}},width:100,height:100})})},Y=n(193),H=j.a.div(L||(L=Object(p.a)(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),_=j.a.div(M||(M=Object(p.a)(["\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: black;\n    opacity: 0.6;\n    z-index: 0;\n"]))),K=j.a.div(P||(P=Object(p.a)(["\n    z-index: 1;\n    height: 300px;\n    max-height: calc(100% - 100px);\n    max-width: calc(100% - 100px);\n    width: 500px;\n    background: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 10px;\n"]))),Q=j.a.div(W||(W=Object(p.a)(["\n    height: 20%;\n    font-size: 25px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n\n"]))),q=j.a.div(U||(U=Object(p.a)(["\n    width: calc(100% - 100px);\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n\n"]))),X=j.a.div(A||(A=Object(p.a)(["\n    width: calc(50% - 20px);\n    display: flex;\n    flex-direction: column;\n    align-items: center\n"]))),Z=j.a.div(G||(G=Object(p.a)(["\n    margin: 20px 0px;\n"]))),$=j.a.div(N||(N=Object(p.a)(["\n    width: calc(100% - 20px);\n"]))),ee=[["time","CO2","NIR","Clear","F1 415nm","F2 445nm","F3 480nm","F4 515nm","F5 555nm","F6 590nm","F7 630nm","F8 680nm"]];var te,ne,ae,ie=function(e){var t=new Date,n=Object(i.useState)(t),a=Object(d.a)(n,2),c=a[0],r=a[1],s=Object(i.useState)(t),l=Object(d.a)(s,2),p=l[0],j=l[1],h=Object(i.useState)(""),x=Object(d.a)(h,2),m=x[0],O=x[1],y=Object(i.useState)(""),w=Object(d.a)(y,2),k=w[0],S=w[1],F=Object(i.useState)(""),I=Object(d.a)(F,2),T=I[0],z=I[1],D=Object(i.useState)(ee),E=Object(d.a)(D,2),R=E[0],V=E[1],B=Object(i.useState)(!1),L=Object(d.a)(B,2);return L[0],L[1],Object(i.useEffect)((function(){var e=M(c);O(e);var t=M(p);S(t)}),[]),Object(g.jsxs)(H,{children:[Object(g.jsx)(_,{onClick:e.close}),Object(g.jsxs)(K,{children:[Object(g.jsx)(Q,{children:"Download CSV"}),Object(g.jsxs)(q,{children:[Object(g.jsxs)(X,{children:[Object(g.jsx)(Z,{children:"from"}),Object(g.jsx)($,{children:Object(g.jsx)(v,{value:m,placeholder:"dd/mm/yy",type:"date",setValue:function(e){var t=new Date(e.target.value);r(t);var n=M(t);O(n)}})})]}),Object(g.jsx)("div",{style:{width:"40px"}}),Object(g.jsxs)(X,{children:[Object(g.jsx)(Z,{children:"to"}),Object(g.jsx)($,{children:Object(g.jsx)(v,{value:k,placeholder:"dd/mm/yy",type:"date",setValue:function(e){var t=new Date(e.target.value);j(t);var n=M(t);S(n)}})})]})]}),Object(g.jsx)("div",{style:{marginTop:"10px"},children:T}),Object(g.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px"},children:Object(g.jsx)(Y.CSVLink,{data:R,target:"_blank",filename:"wavedata.csv",asyncOnClick:!0,onClick:function(e,t){return function(e,t){return P.apply(this,arguments)}(e,t)},style:{border:"0px",outline:"none"},children:Object(g.jsx)(C,{value:"download csv",color:"lightgrey"})})})]})]});function M(e){var t=e.getFullYear(),n="".concat(parseInt(e.getMonth().toString())+1),a=e.getDate().toString();return parseInt(n)<10&&(n="0"+n),parseInt(a)<10&&(a="0"+a),t+"-"+n+"-"+a}function P(){return(P=Object(u.a)(o.a.mark((function e(t,n){var a,i,r,s,l,u,d,j,h,x,g,m,O,v,y,w,k,S,C,F,I;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(b.e)(f,"Readings/"),c>p&&(z("start date must be before end date"),n(!1)),e.next=4,Object(b.a)(a);case 4:if((i=e.sent).exists()){for(l in z(""),r=i.val(),s=[].concat(ee),r)u=r[l].Time,d=u.split(","),(j=new Date("20"+d[0]))<=p&&j>=c&&(h=r[l]["Carbon dioxide"],x=100*r[l].NIR,g=100*r[l].Clear,m=100*r[l]["F1 415nm"],O=100*r[l]["F2 445nm"],v=100*r[l]["F3 480nm"],y=100*r[l]["F4 515nm"],w=100*r[l]["F5 555nm"],k=100*r[l]["F6 590nm"],S=100*r[l]["F7 630nm"],C=100*r[l]["F8 680nm"],F=r[l].Time,I=[F,h,x,g,m,O,v,y,w,k,S,C],s.push(I));console.log(s.length),s.length>1?(V(s),console.log("returning true"),n(!0)):(console.log("returning false"),z("no data in this time period"),n(!1))}else console.log("returning false"),z("server error"),n(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},ce=j.a.div(te||(te=Object(p.a)(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n"]))),re=j.a.div(ne||(ne=Object(p.a)(["\n    font-size: 15px;\n    font-weight: bold;\n    flex-shrink: 0;\n"]))),se=j.a.div(ae||(ae=Object(p.a)(["\n    width: 100%;\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n"])));var le,oe,ue,de,pe,je,he,be,xe=function(e){return Object(g.jsxs)(ce,{children:[Object(g.jsx)(re,{children:e.heading}),Object(g.jsxs)(se,{children:[Object(g.jsx)("input",{type:"range",value:e.val,onChange:e.setVal,step:1,min:0,max:100}),Object(g.jsx)("div",{style:{width:"15px"}}),Object(g.jsx)("div",{style:{height:"20px",marginBottom:"7px"},children:Object(g.jsx)(v,{value:e.val,setValue:e.setVal,type:"number",placeholder:""})}),Object(g.jsx)("div",{style:{marginLeft:"25px",flexShrink:0},children:"%"})]})]})},fe=j.a.div(le||(le=Object(p.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]))),ge=j.a.div(oe||(oe=Object(p.a)(["\n  height: 60px;\n  width: 100%;\n  display: flex;\n  background: #eeeeee;\n  flex-shrink: 0;\n  justify-content: flex-end;\n  align-items: center;\n"]))),me=j.a.div(ue||(ue=Object(p.a)(["\n  height: 100%;\n  width: calc(100% / 3);\n  display: flex;\n  align-items: center;\n"]))),Oe=j.a.div(de||(de=Object(p.a)(["\n    background: #eeeeee;\n    width: 100%;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n"]))),ve=j.a.div(pe||(pe=Object(p.a)(["\n    width: calc(100% - 40px);\n    height: calc(100% - 0px);\n    background: white;\n    display: flex;\n    flex-shrink: 0;\n    display: flex;\n    flex-wrap:wrap;\n    justify-content: flex-start;\n    align-items: center;\n"]))),ye=j.a.div(je||(je=Object(p.a)(["\n    width: calc(100% - 50px);\n    height: calc(100% - 50px);\n    flex-shrink: 0;\n"]))),we=j.a.div(he||(he=Object(p.a)(["\n  position: relative;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n    font-size: 25px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    fle-direction: column;\n    align-items: center;\n    transition: all 0.3s ease;\n    &:hover {\n        color: white;\n        background: ",";\n    }\n \n"])),F.primary),ke=j.a.div(be||(be=Object(p.a)(["\n    font-size: 15px;\n"])));var Se=function(e){var t,n=Object(i.useState)(!1),a=Object(d.a)(n,2),c=a[0],r=a[1],s=Object(i.useState)(0),l=Object(d.a)(s,2),o=l[0],u=l[1],p=Object(i.useState)(0),j=Object(d.a)(p,2),h=j[0],x=j[1],m=Object(i.useState)(null),O=Object(d.a)(m,2),v=O[0],y=O[1],w=Object(i.useState)(null),k=Object(d.a)(w,2),S=k[0],I=k[1];return Object(i.useEffect)((function(){var e=Object(b.e)(f,"Pumps/");return Object(b.c)(e,(function(e){if(e.exists()){var t=e.val();for(var n in console.log(t),t)"pump1"===t[n].pump?u(t[n].value):"pump2"===t[n].pump&&x(t[n].value)}})),function(){clearTimeout(v),clearTimeout(S)}}),[]),Object(g.jsxs)(fe,{children:[Object(g.jsxs)(ge,{children:[Object(g.jsx)(me,{style:{justifyContent:"flex-start",paddingLeft:"20px",fontWeight:"bold"},children:Object(g.jsxs)(ke,{children:["Last updated:",Object(g.jsx)("div",{style:{fontSize:"20px"},children:e.lastUpdated})]})}),Object(g.jsx)(me,{style:{justifyContent:"center",fontWeight:"bold"},children:Object(g.jsxs)(ke,{children:["Current time:",Object(g.jsx)("div",{style:{fontSize:"20px"},children:(t=e.currentTime,"".concat(t.toISOString().substring(0,10),"   ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds()))})]})}),Object(g.jsx)(me,{style:{justifyContent:"flex-end",paddingRight:"20px"},children:Object(g.jsx)(C,{value:"logout",clicked:e.logout,color:F.primary,textColor:"white"})})]}),Object(g.jsx)(Oe,{children:Object(g.jsxs)(ve,{children:[e.waveSamples.map((function(t,n){return Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(ye,{children:Object(g.jsx)(J,{title:"CO2 Graph",average:e.coAverage,value:e.coSamples[0],color:F.green})})})})),Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(ye,{children:Object(g.jsx)(J,{title:"CO2 Graph",average:e.coAverage,value:e.coSamples[0],color:F.green})})}),Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsxs)(ye,{children:[Object(g.jsxs)("div",{style:{height:"70%",width:"100%"},children:[Object(g.jsx)("div",{style:{height:"50%",width:"100%"},children:Object(g.jsx)(xe,{val:o,setVal:function(e){var t=e.target.value;clearTimeout(v),y(setTimeout((function(){T("pump1",t)}),1e3)),u(t)},heading:"Pump 1"})}),Object(g.jsx)("div",{style:{height:"50%",width:"100%"},children:Object(g.jsx)(xe,{val:h,setVal:function(e){var t=e.target.value;clearTimeout(S),I(setTimeout((function(){T("pump2",t)}),1e3)),x(t)},heading:"Pump 2"})})]}),Object(g.jsx)("div",{style:{height:"30%",width:"100%"},children:Object(g.jsxs)(we,{onClick:function(){return r(!0)},children:[Object(g.jsx)("div",{children:"Download"}),Object(g.jsx)("div",{children:"CSV"})]})})]})})]})}),Object(g.jsxs)("div",{style:{width:"100%",height:"30px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#eeeeee"},children:[Object(g.jsx)("div",{style:{marginLeft:"20px",fontSize:"15px"},children:"* all averages calculated using last 10 samples"}),Object(g.jsxs)("div",{style:{fontSize:"15pzx",display:"flex",alignItems:"center",height:"100%"},children:["MCU:",Object(g.jsx)("div",{style:{height:"10px",marginLeft:"5px",marginTop:"2px",marginRight:"5px",width:"10px",borderRadius:"5px",background:e.mcuOnline?"green":"red"}}),e.mcuOnline?"online":"offline"]}),Object(g.jsxs)("div",{style:{marginRight:"20px",fontSize:"15pzx",display:"flex",alignItems:"center",height:"100%"},children:["Server:",Object(g.jsx)("div",{style:{height:"10px",marginLeft:"5px",marginTop:"2px",marginRight:"5px",width:"10px",borderRadius:"5px",background:e.serverOnline?"green":"red"}}),e.serverOnline?"online":"offline"]})]}),c&&Object(g.jsx)(ie,{close:function(){return r(!1)}})]});function T(e,t){var n=Object(b.e)(f,"Pumps/"+e);Object(b.f)(n,{pump:e,value:t})}},Ce=(n(410),"https://sensordash.000webhostapp.com/index.php?dash=one"),Fe=[{name:"415nm",samples:[],average:0},{name:"445nm",samples:[],average:0},{name:"480nm",samples:[],average:0},{name:"515nm",samples:[],average:0},{name:"555nm",samples:[],average:0},{name:"590nm",samples:[],average:0},{name:"630nm",samples:[],average:0},{name:"680nm",samples:[],average:0},{name:"Clear",samples:[],average:0},{name:"NIR",samples:[],average:0}];var Ie=function(){var e=new Date,t=Object(i.useState)(!1),n=Object(d.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)([]),s=Object(d.a)(r,2),l=s[0],p=s[1],j=Object(i.useState)(0),h=Object(d.a)(j,2),x=h[0],m=h[1],O=Object(i.useState)(Fe),v=Object(d.a)(O,2),y=v[0],w=v[1],k=Object(i.useState)(0),S=Object(d.a)(k,2),C=S[0],F=S[1],I=Object(i.useState)(""),T=Object(d.a)(I,2),z=T[0],D=T[1],E=Object(i.useState)(e),V=Object(d.a)(E,2),B=V[0],L=V[1],M=Object(i.useState)(!1),P=Object(d.a)(M,2),W=P[0],U=P[1],A=Object(i.useState)(!1),G=Object(d.a)(A,2),N=G[0],J=G[1];return Object(i.useEffect)((function(){var e=Object(b.e)(f,"Readings/");Object(b.c)(e,function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,i,c,r,s,u,d,p,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exists()){e.next=37;break}for(s in n=t.val(),a=0,i=[].concat(l),c=[].concat(y),r=[],n)r.push(n[s]);u=r.length-1;case 10:if(!(u>=0)){e.next=30;break}if(10!==a){e.next=13;break}return e.abrupt("break",30);case 13:0===a&&(d=K(r[u].Time),D(d)),p=r[u]["Carbon dioxide"],i.push(p),c[0].samples.push(r[u]["F1 415nm"]),c[1].samples.push(r[u]["F2 445nm"]),c[2].samples.push(r[u]["F3 480nm"]),c[3].samples.push(r[u]["F4 515nm"]),c[4].samples.push(r[u]["F5 555nm"]),c[5].samples.push(r[u]["F6 590nm"]),c[6].samples.push(r[u]["F7 630nm"]),c[7].samples.push(r[u]["F8 680nm"]),c[8].samples.push(r[u].Clear),c[9].samples.push(r[u].NIR),a++;case 27:u--,e.next=10;break;case 30:q(c),j=C,c.forEach((function(e,t){e.samples.forEach((function(e,t){e>j&&(j=e)}))})),F(j),Q(i),e.next=38;break;case 37:console.log("No data available");case 38:_(),Y();case 40:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),a?Object(g.jsx)(Se,{coAverage:x,coSamples:l,waveSamples:y,logout:function(){c(!1)},currentTime:B,lastUpdated:z,largestWave:C,serverOnline:W,mcuOnline:N}):Object(g.jsx)(R,{setLoggedIn:c});function Y(){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fetch(Ce,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),"online"===e.status?U(!0):U(!1),"online"===e.mcu?J(!0):J(!1)})).catch((function(e){U(!1)})),e.abrupt("return",setTimeout(Y,12e4));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){var e=new Date;return L(e),setTimeout(_,1e3)}function K(e){var t=e.split(","),n=t[1].split("+"),a=new Date("20"+t[0]);return"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate(),"  at  ").concat(n[0])}function Q(e){var t=0;e.forEach((function(e){t+=e}));var n=t/e.length;p(e),m(n)}function q(e){var t=[0,0,0,0,0,0,0,0];e.forEach((function(e,n){var a=0;e.samples.forEach((function(e,t){a+=e})),t[n]=a/e.samples.length}));for(var n=[].concat(e),a=0;a<n.length;a++)n[a].average=t[a];w(n)}},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,412)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(Ie,{})}),document.getElementById("root")),Te()}},[[411,1,2]]]);
//# sourceMappingURL=main.aa64adab.chunk.js.map