(this.webpackJsonpsensdash=this.webpackJsonpsensdash||[]).push([[0],{200:function(e,t,n){},210:function(e,t){},212:function(e,t){},222:function(e,t){},224:function(e,t){},249:function(e,t){},250:function(e,t){},255:function(e,t){},257:function(e,t){},264:function(e,t){},283:function(e,t){},410:function(e,t,n){"use strict";n.r(t);var a,c=n(3),i=n.n(c),r=n(186),s=n.n(r),l=(n(200),n(14)),o=n.n(l),u=n(21),d=n(10),p=n(12),j=n(13),b=n(187),h=n(23),x=Object(b.a)({apiKey:"AIzaSyBWCGso7ConB4uAv-j-QUFCg4wWHwzo_Ng",authDomain:"mysensors-b8cfe.firebaseapp.com",databaseURL:"https://mysensors-b8cfe-default-rtdb.firebaseio.com",projectId:"mysensors-b8cfe",storageBucket:"mysensors-b8cfe.appspot.com",messagingSenderId:"265785378277",appId:"1:265785378277:web:e3f320f541eef441f15b0c",measurementId:"G-8RMGJP5T1Y"}),f=Object(h.b)(x),g=n(4),m=j.a.input(a||(a=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  outline: none;\n  background: transparent;\n  border: 2px solid darkgrey;\n  border-radius: 5px;\n  padding: 5px 7px;\n  margin: 0px;\n"])));var O,v=function(e){return Object(g.jsx)(m,{value:e.value,placeholder:e.placeholder,type:e.type,onChange:e.setValue})},y=j.a.div(O||(O=Object(p.a)(["\n  padding: 7px 10px;\n  border-radius: 5px;\n  cursor: pointer;\n"])));var w,k,S,C=function(e){return Object(g.jsx)(y,{onClick:e.clicked,style:{background:e.color||"lightgrey",color:e.textColor||"black",pointerEvents:e.clicked?"auto":"none"},children:e.value})},F={primary:"#FF6F3C",darkPurple:"#3E2F5B",purple:"#E8C7DE",darkBlue:"#345995",blue:"#86BBD8",green:"#DCF2B0",red:"#880D1E",yellow:"#FFCF00",pink:"#CC59D2",black:"#262626",lightRed:"#EF2917"},I=n(204),T=j.a.div(w||(w=Object(p.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),D=j.a.div(k||(k=Object(p.a)(["\n  padding: 20px 20px;\n  min-width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]))),E=j.a.div(S||(S=Object(p.a)(["\n  position: relative;\n  padding: 20px 20px;\n  min-width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"])));var R,z=function(e){var t=Object(c.useState)(!0),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),l=s[0],p=s[1],j=Object(c.useState)(""),b=Object(d.a)(j,2),x=b[0],m=b[1],O=Object(c.useState)(""),y=Object(d.a)(O,2),w=y[0],k=y[1],S=Object(c.useState)(""),R=Object(d.a)(S,2),z=R[0],B=R[1],L=Object(c.useState)(""),V=Object(d.a)(L,2),W=V[0],M=V[1],N=Object(c.useState)(""),U=Object(d.a)(N,2),A=U[0],G=U[1],P=Object(c.useState)(""),J=Object(d.a)(P,2),Y=J[0],H=J[1],_=Object(c.useState)(!1),K=Object(d.a)(_,2),Q=K[0],q=K[1],X=Object(c.useState)(!0),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ne=Object(d.a)(te,2),ae=ne[0],ce=ne[1],ie=null;return Object(c.useEffect)((function(){ie=setTimeout((function(){ee(!1)}),1e3);var e=Object(h.e)(f,"Users/");return Object(h.c)(e,(function(e){if(e.exists()){var t=e.val(),n=[];for(var a in t){var c=t[a];n.push(c)}p(n)}})),function(){clearTimeout(ie)}}),[]),Object(g.jsx)(T,{children:a?Object(g.jsxs)(D,{children:[Object(g.jsx)("div",{style:{fontSize:"25px",fontWeight:"bold",marginBottom:"20px"},children:"Login"}),Object(g.jsx)(v,{value:x,setValue:function(e){m(e.target.value)},type:"text",placeholder:"username"}),Object(g.jsx)("div",{style:{height:"20px"}}),Object(g.jsx)(v,{value:w,setValue:function(e){k(e.target.value)},type:"password",placeholder:"password"}),Object(g.jsx)("div",{style:{height:"40px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:z}),Object(g.jsx)(C,{clicked:function(){return re.apply(this,arguments)},value:"login",color:F.primary,textColor:"white"}),Object(g.jsx)("div",{onClick:function(){return i(!1)},style:{cursor:"pointer",marginTop:"10px"},children:"register"}),$&&Object(g.jsx)("div",{style:{top:"0px",position:"absolute",height:"100%",width:"100%",background:"black",opacity:.6}})]}):Object(g.jsxs)(E,{children:[Object(g.jsx)("div",{style:{fontSize:"25px",fontWeight:"bold",marginBottom:"20px"},children:"Register"}),Object(g.jsx)(v,{value:W,setValue:function(e){M(e.target.value)},type:"text",placeholder:"username"}),Object(g.jsx)("div",{style:{height:"20px"}}),Object(g.jsx)(v,{value:A,setValue:function(e){G(e.target.value)},type:"password",placeholder:"password"}),Object(g.jsx)("div",{style:{height:"40px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Y}),Object(g.jsx)(C,{clicked:function(){return se.apply(this,arguments)},value:"register",color:F.primary,textColor:"white"}),Object(g.jsx)("div",{onClick:function(){return i(!0)},style:{cursor:"pointer",marginTop:"10px"},children:"go to login"}),Q&&Object(g.jsx)("div",{style:{top:"0px",position:"absolute",height:"100%",width:"100%",background:"black",opacity:.6}}),ae&&Object(g.jsx)("div",{style:{position:"absolute",height:"100%",width:"100%",top:"0px",background:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"25px",fontWeight:"bold"},children:"user registered"})]})});function re(){return(re=Object(u.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(""),n=!1,a=0;case 3:if(!(a<l.length)){t.next=15;break}if(l[a].username!==x){t.next=12;break}return t.next=7,ue(w,l[a].salt);case 7:if(t.sent!==l[a].password){t.next=12;break}return n=!0,e.setLoggedIn(!0),t.abrupt("return");case 12:a++,t.next=3;break;case 15:n||B("username or password incorrect");case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function se(){return(se=Object(u.a)(o.a.mark((function e(){var t,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(!0),H(""),t=!1,l.forEach((function(e){e.username===W&&(t=!0)})),!t){e.next=8;break}return q(!1),H("username used"),e.abrupt("return");case 8:return e.next=10,le();case 10:return n=e.sent,e.next=13,ue(A,n);case 13:a=e.sent,c=Object(h.e)(f,"Users/"),Object(h.d)(c,{username:W,password:a,salt:n}),ce(!0),ie=setTimeout((function(){q(!1),i(!0),ce(!1)}),2e3);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return oe.apply(this,arguments)}function oe(){return(oe=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.genSalt(6);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t){return de.apply(this,arguments)}function de(){return(de=Object(u.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.hash(t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},B=n(194),L=j.a.div(R||(R=Object(p.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));var V,W,M,N,U,A,G,P,J=function(e){return Object(g.jsx)(L,{children:Object(g.jsx)(B.a,{data:{labels:["current","average"],datasets:[{backgroundColor:[e.color,"lightgrey"],data:[e.value,e.average]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!0,text:e.title}},scales:{y:{min:e.min?Math.floor(e.min):0,max:e.max?Math.floor(e.max):void 0}}},width:100,height:100})})},Y=n(193),H=j.a.div(V||(V=Object(p.a)(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),_=j.a.div(W||(W=Object(p.a)(["\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background: black;\n    opacity: 0.6;\n    z-index: 0;\n"]))),K=j.a.div(M||(M=Object(p.a)(["\n    z-index: 1;\n    height: 300px;\n    max-height: calc(100% - 100px);\n    max-width: calc(100% - 100px);\n    width: 500px;\n    background: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 10px;\n"]))),Q=j.a.div(N||(N=Object(p.a)(["\n    height: 20%;\n    font-size: 25px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n\n"]))),q=j.a.div(U||(U=Object(p.a)(["\n    width: calc(100% - 100px);\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n\n"]))),X=j.a.div(A||(A=Object(p.a)(["\n    width: calc(50% - 20px);\n    display: flex;\n    flex-direction: column;\n    align-items: center\n"]))),Z=j.a.div(G||(G=Object(p.a)(["\n    margin: 20px 0px;\n"]))),$=j.a.div(P||(P=Object(p.a)(["\n    width: calc(100% - 20px);\n"]))),ee=[["time","CO2","NIR","Clear","F1 415nm","F2 445nm","F3 480nm","F4 515nm","F5 555nm","F6 590nm","F7 630nm","F8 680nm"]];var te,ne,ae,ce,ie,re,se,le,oe=function(e){var t=new Date,n=Object(c.useState)(t),a=Object(d.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(t),l=Object(d.a)(s,2),p=l[0],j=l[1],b=Object(c.useState)(""),x=Object(d.a)(b,2),m=x[0],O=x[1],y=Object(c.useState)(""),w=Object(d.a)(y,2),k=w[0],S=w[1],F=Object(c.useState)(""),I=Object(d.a)(F,2),T=I[0],D=I[1],E=Object(c.useState)(ee),R=Object(d.a)(E,2),z=R[0],B=R[1],L=Object(c.useState)(!1),V=Object(d.a)(L,2);return V[0],V[1],Object(c.useEffect)((function(){var e=W(i);O(e);var t=W(p);S(t)}),[]),Object(g.jsxs)(H,{children:[Object(g.jsx)(_,{onClick:e.close}),Object(g.jsxs)(K,{children:[Object(g.jsx)(Q,{children:"Download CSV"}),Object(g.jsxs)(q,{children:[Object(g.jsxs)(X,{children:[Object(g.jsx)(Z,{children:"from"}),Object(g.jsx)($,{children:Object(g.jsx)(v,{value:m,placeholder:"dd/mm/yy",type:"date",setValue:function(e){var t=new Date(e.target.value);r(t);var n=W(t);O(n)}})})]}),Object(g.jsx)("div",{style:{width:"40px"}}),Object(g.jsxs)(X,{children:[Object(g.jsx)(Z,{children:"to"}),Object(g.jsx)($,{children:Object(g.jsx)(v,{value:k,placeholder:"dd/mm/yy",type:"date",setValue:function(e){var t=new Date(e.target.value);j(t);var n=W(t);S(n)}})})]})]}),Object(g.jsx)("div",{style:{marginTop:"10px"},children:T}),Object(g.jsx)("div",{style:{marginTop:"20px",marginBottom:"20px"},children:Object(g.jsx)(Y.CSVLink,{data:z,target:"_blank",filename:"wavedata.csv",asyncOnClick:!0,onClick:function(e,t){return function(e,t){return M.apply(this,arguments)}(e,t)},style:{border:"0px",outline:"none"},children:Object(g.jsx)(C,{value:"download csv",color:"lightgrey"})})})]})]});function W(e){var t=e.getFullYear(),n="".concat(parseInt(e.getMonth().toString())+1),a=e.getDate().toString();return parseInt(n)<10&&(n="0"+n),parseInt(a)<10&&(a="0"+a),t+"-"+n+"-"+a}function M(){return(M=Object(u.a)(o.a.mark((function e(t,n){var a,c,r,s,l,u,d,j,b,x,g,m,O,v,y,w,k,S,C,F,I;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(h.e)(f,"Readings/"),i>p&&(D("start date must be before end date"),n(!1)),e.next=4,Object(h.a)(a);case 4:if((c=e.sent).exists()){for(l in D(""),r=c.val(),s=[].concat(ee),r)u=r[l].Time,d=u.split(","),(j=new Date("20"+d[0]))<=p&&j>=i&&(b=r[l]["Carbon dioxide"],x=100*r[l].NIR,g=100*r[l].Clear,m=100*r[l]["F1 415nm"],O=100*r[l]["F2 445nm"],v=100*r[l]["F3 480nm"],y=100*r[l]["F4 515nm"],w=100*r[l]["F5 555nm"],k=100*r[l]["F6 590nm"],S=100*r[l]["F7 630nm"],C=100*r[l]["F8 680nm"],F=r[l].Time,I=[F,b,x,g,m,O,v,y,w,k,S,C],s.push(I));console.log(s.length),s.length>1?(B(s),console.log("returning true"),n(!0)):(console.log("returning false"),D("no data in this time period"),n(!1))}else console.log("returning false"),D("server error"),n(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},ue=[F.darkPurple,F.purple,F.blue,F.green,F.darkBlue,F.primary,F.lightRed,F.red,"black","black"],de=j.a.div(te||(te=Object(p.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]))),pe=j.a.div(ne||(ne=Object(p.a)(["\n  height: 60px;\n  width: 100%;\n  display: flex;\n  background: #eeeeee;\n  flex-shrink: 0;\n  justify-content: flex-end;\n  align-items: center;\n"]))),je=j.a.div(ae||(ae=Object(p.a)(["\n  height: 100%;\n  width: calc(100% / 3);\n  display: flex;\n  align-items: center;\n"]))),be=j.a.div(ce||(ce=Object(p.a)(["\n    background: #eeeeee;\n    width: 100%;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n"]))),he=j.a.div(ie||(ie=Object(p.a)(["\n    width: calc(100% - 40px);\n    height: calc(100% - 0px);\n    background: white;\n    display: flex;\n    flex-shrink: 0;\n    display: flex;\n    flex-wrap:wrap;\n    justify-content: flex-start;\n    align-items: center;\n"]))),xe=j.a.div(re||(re=Object(p.a)(["\n    width: calc(100% - 50px);\n    height: calc(100% - 50px);\n    flex-shrink: 0;\n"]))),fe=j.a.div(se||(se=Object(p.a)(["\n  position: relative;\n    height: 100%;\n    width: 100%;\n    cursor: pointer;\n    font-size: 25px;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    fle-direction: column;\n    align-items: center;\n    transition: all 0.3s ease;\n    &:hover {\n        color: white;\n        background: ",";\n    }\n \n"])),F.primary),ge=j.a.div(le||(le=Object(p.a)(["\n    font-size: 15px;\n"])));var me=function(e){var t,n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],r=a[1];return Object(g.jsxs)(de,{children:[Object(g.jsxs)(pe,{children:[Object(g.jsx)(je,{style:{justifyContent:"flex-start",paddingLeft:"20px",fontWeight:"bold"},children:Object(g.jsxs)(ge,{children:["Last updated:",Object(g.jsx)("div",{style:{fontSize:"20px"},children:e.lastUpdated})]})}),Object(g.jsx)(je,{style:{justifyContent:"center",fontWeight:"bold"},children:Object(g.jsxs)(ge,{children:["Current time:",Object(g.jsx)("div",{style:{fontSize:"20px"},children:(t=e.currentTime,"".concat(t.toISOString().substring(0,10),"   ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds()))})]})}),Object(g.jsx)(je,{style:{justifyContent:"flex-end",paddingRight:"20px"},children:Object(g.jsx)(C,{value:"logout",clicked:e.logout,color:F.primary,textColor:"white"})})]}),Object(g.jsx)(be,{children:Object(g.jsxs)(he,{children:[e.waveSamples.map((function(t,n){return Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(xe,{children:Object(g.jsx)(J,{title:t.name,average:t.average,value:t.samples[0],color:ue[n],min:0,max:1.1*e.largestWave})})})})),Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(xe,{children:Object(g.jsx)(J,{title:"CO2 Graph",average:e.coAverage,value:e.coSamples[0],color:F.green})})}),Object(g.jsx)("div",{style:{width:"calc(100% / 4)",height:"calc(100% / 3)",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(g.jsx)(xe,{children:Object(g.jsxs)(fe,{onClick:function(){return r(!0)},children:[Object(g.jsx)("div",{children:"Download"}),Object(g.jsx)("div",{children:"CSV"})]})})})]})}),Object(g.jsxs)("div",{style:{width:"100%",height:"30px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#eeeeee"},children:[Object(g.jsx)("div",{style:{marginLeft:"20px",fontSize:"15px"},children:"* all averages calculated using last 10 samples"}),Object(g.jsxs)("div",{style:{marginRight:"20px",fontSize:"15pzx",display:"flex",alignItems:"center",height:"100%"},children:["Server:",Object(g.jsx)("div",{style:{height:"10px",marginLeft:"5px",marginTop:"2px",marginRight:"5px",width:"10px",borderRadius:"5px",background:e.serverOnline?"green":"red"}}),e.serverOnline?"online":"offline"]})]}),i&&Object(g.jsx)(oe,{close:function(){return r(!1)}})]})},Oe="https://sensordash.000webhostapp.com/index.php",ve=[{name:"415nm",samples:[],average:0},{name:"445nm",samples:[],average:0},{name:"480nm",samples:[],average:0},{name:"515nm",samples:[],average:0},{name:"555nm",samples:[],average:0},{name:"590nm",samples:[],average:0},{name:"630nm",samples:[],average:0},{name:"680nm",samples:[],average:0},{name:"Clear",samples:[],average:0},{name:"NIR",samples:[],average:0}];var ye=function(){var e=new Date,t=Object(c.useState)(!1),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),l=s[0],p=s[1],j=Object(c.useState)(0),b=Object(d.a)(j,2),x=b[0],m=b[1],O=Object(c.useState)(ve),v=Object(d.a)(O,2),y=v[0],w=v[1],k=Object(c.useState)(0),S=Object(d.a)(k,2),C=S[0],F=S[1],I=Object(c.useState)(""),T=Object(d.a)(I,2),D=T[0],E=T[1],R=Object(c.useState)(e),B=Object(d.a)(R,2),L=B[0],V=B[1],W=Object(c.useState)(!1),M=Object(d.a)(W,2),N=M[0],U=M[1];return Object(c.useEffect)((function(){var e=Object(h.e)(f,"Readings/");Object(h.c)(e,function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c,i,r,s,u,d,p,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exists()){e.next=37;break}for(s in n=t.val(),a=0,c=[].concat(l),i=[].concat(y),r=[],n)r.push(n[s]);u=r.length-1;case 10:if(!(u>=0)){e.next=30;break}if(10!==a){e.next=13;break}return e.abrupt("break",30);case 13:0===a&&(d=J(r[u].Time),E(d)),p=r[u]["Carbon dioxide"],c.push(p),i[0].samples.push(r[u]["F1 415nm"]),i[1].samples.push(r[u]["F2 445nm"]),i[2].samples.push(r[u]["F3 480nm"]),i[3].samples.push(r[u]["F4 515nm"]),i[4].samples.push(r[u]["F5 555nm"]),i[5].samples.push(r[u]["F6 590nm"]),i[6].samples.push(r[u]["F7 630nm"]),i[7].samples.push(r[u]["F8 680nm"]),i[8].samples.push(r[u].Clear),i[9].samples.push(r[u].NIR),a++;case 27:u--,e.next=10;break;case 30:H(i),j=C,i.forEach((function(e,t){e.samples.forEach((function(e,t){e>j&&(j=e)}))})),F(j),Y(c),e.next=38;break;case 37:console.log("No data available");case 38:P(),A();case 40:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),a?Object(g.jsx)(me,{coAverage:x,coSamples:l,waveSamples:y,logout:function(){i(!1)},currentTime:L,lastUpdated:D,largestWave:C,serverOnline:N}):Object(g.jsx)(z,{setLoggedIn:i});function A(){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fetch(Oe,{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),"online"===e.status?U(!0):U(!1)})).catch((function(e){U(!1)})),e.abrupt("return",setTimeout(A,12e4));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){var e=new Date;return V(e),setTimeout(P,1e3)}function J(e){var t=e.split(","),n=t[1].split("+"),a=new Date("20"+t[0]);return"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate(),"  at  ").concat(n[0])}function Y(e){var t=0;e.forEach((function(e){t+=e}));var n=t/e.length;p(e),m(n)}function H(e){var t=[0,0,0,0,0,0,0,0];e.forEach((function(e,n){var a=0;e.samples.forEach((function(e,t){a+=e})),t[n]=a/e.samples.length}));for(var n=[].concat(e),a=0;a<n.length;a++)n[a].average=t[a];w(n)}},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(ye,{})}),document.getElementById("root")),we()}},[[410,1,2]]]);
//# sourceMappingURL=main.582987aa.chunk.js.map