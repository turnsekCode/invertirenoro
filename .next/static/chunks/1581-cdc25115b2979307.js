(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1581],{5939:function(o,e,n){"use strict";var r=n(5893);n(7294);var a=n(5188),s=n.n(a);let c=o=>{var e,n;let{general:a}=o;return(0,r.jsxs)("div",{className:s().contenedorBannerUno,children:[(0,r.jsx)("img",{className:s().bannerDesktop,src:null==a?void 0:null===(e=a.acf)||void 0===e?void 0:e.imagen_general_desktop,alt:"Banner general"}),(0,r.jsx)("img",{className:s().bannerMobil,src:null==a?void 0:null===(n=a.acf)||void 0===n?void 0:n.imagen_general_mobil,alt:"Banner general mobil"})]})};e.Z=c},4284:function(o,e,n){"use strict";var r=n(5893);n(7294);var a=n(2741),s=n.n(a);let c=o=>{var e,n;let{general:a}=o;return(0,r.jsxs)("div",{className:s().contenedorBannerUno,children:[(0,r.jsx)("img",{className:s().bannerDesktop,src:null==a?void 0:null===(e=a.acf)||void 0===e?void 0:e.imagen_cambiardivisa_desktop,alt:"Banner dos"}),(0,r.jsx)("img",{className:s().bannerMobil,src:null==a?void 0:null===(n=a.acf)||void 0===n?void 0:n.imagen_cambiardivisa_mobil,alt:"Banner udos mobil"})]})};e.Z=c},8332:function(o,e,n){"use strict";var r=n(5893);n(7294);var a=n(3584),s=n.n(a);let c=o=>{var e,n;let{ciudad:a}=o;return(0,r.jsxs)("div",{className:s().contenedorBannerUno,children:[(0,r.jsx)("img",{className:s().bannerDesktop,src:null==a?void 0:null===(e=a.acf)||void 0===e?void 0:e.imagen_cambiardivisa_desktop,alt:"Banner uno"}),(0,r.jsx)("img",{className:s().bannerMobil,src:null==a?void 0:null===(n=a.acf)||void 0===n?void 0:n.imagen_cambiardivisa_mobil,alt:"Banner uno mobil"})]})};e.Z=c},7337:function(o,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(5893),a=n(5675),s=n.n(a),c=n(7294),i=n(4431),t=n.n(i),l={src:"/_next/static/media/logodivisa.5be0b770.png",height:112,width:112,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEUgMToCjdkEkM8HkMwTAAAFZ5MxebEEj81MaXECbJfyOHrEUIdFiaG+qzP/vQAEd6oCkdIOhsJVaKZ1pHIlj6lIm5UkmLKlccCWAAAAEHRSTlMKb3ZOAkn91wBt+/z5/PlvOjN4SgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADpJREFUeJwtxlkOgCAMQMHH2tYtBYX7H9VEnK9BUwwhJgXxe7oAMq5j5Tn3+sXr1ldabwK5mJmVjP5eR7MCCebnZnQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},d=n(5503),u=n(5399),v=n(2014);let m=o=>{var e;let{valorMoneda:n,DataAcronimo:a,setAcronimo:i,setValorMoneda:l,setSelectDivisa:m,selectDivisa:_,setActiveId:x,ciudad:p,replace:h,setUsdGoogleActivo:j,select:b,setSelect:A,telefono:N}=o,g=null==p?void 0:null===(e=p.acf)||void 0===e?void 0:e.ciudad_oro,[P,f]=(0,c.useState)([]),[C,B]=(0,c.useState)(null);(0,c.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos/archivos-cache/Fixing".concat(g,".txt"),{cache:"no-cache"}).then(o=>o.json()).then(o=>{var e,n;f(null==o?void 0:null===(e=o.result)||void 0===e?void 0:null===(n=e.Tarifas)||void 0===n?void 0:n.Divisas_Venta.reverse()),B(!0)})},[]);let[S,k]=(0,c.useState)(""),[I,D]=(0,c.useState)(null),M=n/1e3,q=o=>{i(o.target.dataset.acronimo),l(o.target.dataset.precio),x(o.target.dataset.acronimo)},U=()=>{m(!1)};return(0,r.jsxs)("div",{className:t().bloqueDer,children:[(0,r.jsx)("div",{className:t().bloqueDivHabituales,children:(0,r.jsx)("div",{className:t().bloqueTituloSuperior,children:(0,r.jsxs)("h6",{children:["Conversor ",(0,r.jsx)("span",{})," de divisa"]})})}),(0,r.jsxs)("div",{className:t().contenedorInputSuperior,children:[(0,r.jsx)("div",{className:t().bloqueIzqInput,children:(0,r.jsxs)("div",{className:t().select,onClick:()=>{A(!b)},children:[_?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Seleccione Divisa"}),(0,r.jsx)(d.Z,{})]}):(0,r.jsxs)(r.Fragment,{children:[a," ",(0,r.jsx)(d.Z,{})]}),(0,r.jsx)("div",{className:b?"".concat(t().select_monedas," ").concat(t().select_activo):"".concat(t().select_monedas),children:null==P?void 0:P.filter(o=>"HRK"!==o.Name).map((o,e)=>b?(0,r.jsxs)("div",{className:t().contenedor_list,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{q(o),U(),j(!1)},children:[(0,r.jsx)("div",{className:t().bandera,children:(0,r.jsx)(s(),{width:35,height:23,src:"/assets/".concat(null==o?void 0:o.Productos[0].Acronimo,".png"),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,alt:null==o?void 0:o.Productos[0].Acronimo})}),(0,r.jsxs)("div",{className:t().moneda,children:[(0,r.jsx)("p",{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Acronimo}),(0,r.jsx)("span",{className:t().nombre,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Nombre})]})]},e):"")})]})}),(0,r.jsxs)("div",{className:t().bloqueDerInput,children:[_?(0,r.jsx)(u.Z,{}):(0,r.jsxs)("div",{className:t().contenedorInput,children:[I?(0,r.jsx)("input",{style:{border:"none"},type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",readOnly:!0,value:(S*M).toFixed(2)}):(0,r.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",className:t().inputInferior,onChange:o=>k(o.target.value)}),(0,r.jsx)("span",{children:"EUR"})]}),_?(0,r.jsx)("p",{}):(0,r.jsxs)("p",{children:["1EUR = ",(1/M).toFixed(4),a]})]})]}),(0,r.jsx)("div",{className:t().botonSwith,children:(0,r.jsx)(v.Z,{onClick:o=>{D(!I)}})}),(0,r.jsxs)("div",{className:t().contenedorInputInferior,children:[_?(0,r.jsx)(u.Z,{}):(0,r.jsx)("div",{className:t().monedaInferior,children:a}),(0,r.jsxs)("div",{className:t().bloqueDerInput,children:[_?(0,r.jsx)(u.Z,{}):(0,r.jsxs)("div",{className:t().contenedorInput,children:[I?(0,r.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",className:t().inputInferior,onChange:o=>k(o.target.value)}):(0,r.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",value:(S/M).toFixed(2),readOnly:!0,style:{border:"none"}}),(0,r.jsx)("span",{children:a})]}),_?(0,r.jsx)("p",{}):(0,r.jsxs)("p",{children:["1",a," = ",M.toFixed(4),"EUR"]})]})]}),(0,r.jsxs)("a",{className:t().botonLlamarTienda,href:"tel:".concat(N),children:["LLAMA GRATIS AL ",N]})]})},_=o=>{var e;let{valorMoneda:n,DataAcronimo:a,setAcronimo:i,setValorMoneda:l,setSelectDivisa:m,selectDivisa:_,setActiveId:x,ciudad:p,select:h,setSelect:j,telefono:b}=o,A=null==p?void 0:null===(e=p.acf)||void 0===e?void 0:e.ciudad_oro,[N,g]=(0,c.useState)([]),[P,f]=(0,c.useState)(null);(0,c.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos/archivos-cache/Fixing".concat(A,".txt"),{cache:"no-cache"}).then(o=>o.json()).then(o=>{var e,n;g(null==o?void 0:null===(e=o.result)||void 0===e?void 0:null===(n=e.Tarifas)||void 0===n?void 0:n.Divisas_Compra.reverse()),f(!0)})},[]);let[C,B]=(0,c.useState)(""),[S,k]=(0,c.useState)(null),I=n/1e3,D=o=>{i(o.target.dataset.acronimo),l(o.target.dataset.precio),x(o.target.dataset.acronimo)},M=()=>{m(!1)};return(0,r.jsxs)("div",{className:t().bloqueDer,children:[(0,r.jsx)("div",{className:t().bloqueDivHabituales,children:(0,r.jsx)("div",{className:t().bloqueTituloSuperior,children:(0,r.jsxs)("h6",{children:["Conversor ",(0,r.jsx)("span",{})," de divisa"]})})}),(0,r.jsxs)("div",{className:t().contenedorInputSuperior,children:[(0,r.jsx)("div",{className:t().bloqueIzqInput,children:(0,r.jsxs)("div",{className:t().select,onClick:()=>{j(!h)},children:[_?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Seleccione Divisa"}),(0,r.jsx)(d.Z,{})]}):(0,r.jsxs)(r.Fragment,{children:[a," ",(0,r.jsx)(d.Z,{})]}),(0,r.jsx)("div",{className:h?"".concat(t().select_monedas," ").concat(t().select_activo):"".concat(t().select_monedas),children:N.filter(o=>"HRK"!==o.Name&&"DKK"!==o.Name&&"RUB"!==o.Name&&"NOK"!==o.Name&&"SEK"!==o.Name).map((o,e)=>h?(0,r.jsxs)("div",{className:t().contenedor_list,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{D(o),M()},children:[(0,r.jsx)("div",{className:t().bandera,children:(0,r.jsx)(s(),{width:35,height:23,src:"/assets/".concat(null==o?void 0:o.Productos[0].Acronimo,".png"),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,alt:null==o?void 0:o.Productos[0].Acronimo})}),(0,r.jsxs)("div",{className:t().moneda,children:[(0,r.jsx)("p",{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Acronimo}),(0,r.jsx)("span",{className:t().nombre,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,children:null==o?void 0:o.Productos[0].Nombre})]})]},e):"")})]})}),(0,r.jsxs)("div",{className:t().bloqueDerInput,children:[_?(0,r.jsx)(u.Z,{}):(0,r.jsxs)("div",{className:t().contenedorInput,children:[S?(0,r.jsx)("input",{style:{border:"none"},type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",readOnly:!0,value:(C/I).toFixed(2)}):(0,r.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"0.00",inputMode:"numeric",className:t().inputInferior,onChange:o=>B(o.target.value)}),(0,r.jsx)("span",{children:a})]}),_?(0,r.jsx)("p",{}):(0,r.jsxs)("p",{children:["1",a," = ",I.toFixed(4),"EUR"]})]})]}),(0,r.jsx)("div",{className:t().botonSwith,children:(0,r.jsx)(v.Z,{onClick:o=>{k(!S)}})}),(0,r.jsxs)("div",{className:t().contenedorInputInferior,children:[_?(0,r.jsx)(u.Z,{}):(0,r.jsx)("div",{className:t().monedaInferior,children:"EUR"}),(0,r.jsxs)("div",{className:t().bloqueDerInput,children:[_?(0,r.jsx)(u.Z,{}):(0,r.jsxs)("div",{className:t().contenedorInput,children:[S?(0,r.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",className:t().inputInferior,onChange:o=>B(o.target.value)}):(0,r.jsx)("input",{type:"text",pattern:"[0-9]*",placeholder:"Cantidad",inputMode:"numeric",value:(C*I).toFixed(2),readOnly:!0,style:{border:"none"}}),(0,r.jsx)("span",{children:"EUR"})]}),_?(0,r.jsx)("p",{}):(0,r.jsxs)("p",{children:["1EUR = ",(1/I).toFixed(4),a]})]})]}),(0,r.jsxs)("a",{className:t().botonLlamarTienda,href:"tel:".concat(b),children:["LLAMA GRATIS AL ",b]})]})},x=o=>{var e;let{comprar:n,ciudad:a,telefono:i}=o,[d,u]=(0,c.useState)(null),[v,x]=(0,c.useState)("0"),[p,h]=(0,c.useState)(""),[j,b]=(0,c.useState)(!0),[A,N]=(0,c.useState)(null),g=o=>{h(o.target.dataset.acronimo),x(o.target.dataset.precio),C(o.target.dataset.acronimo)},P=()=>{b(!1)},[f,C]=(0,c.useState)("");(0,c.useEffect)(()=>{fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTMm1jsqMJYy06TXURw9EVyFqalRHk_m0vTJmoGjBd2ss0YIG0mi8oifYw2CvMsl5R4K0rHrJ5CsI2x/pub?gid=0&single=true&output=csv",{cache:"no-cache"}).then(o=>o.json()).then(o=>{k(o)})},[]);let B=null==a?void 0:null===(e=a.acf)||void 0===e?void 0:e.ciudad_oro,[S,k]=(0,c.useState)(""),[I,D]=(0,c.useState)(!1),M=S.toString().replace(",","."),[q,U]=(0,c.useState)([]),[E,R]=(0,c.useState)([]);return(0,c.useEffect)(()=>{fetch("https://panel.quickgold.es/archivos/archivos-cache/Fixing".concat(B,".txt"),{cache:"no-cache"}).then(o=>o.json()).then(o=>{var e,n,r,a;U(null==o?void 0:null===(e=o.result)||void 0===e?void 0:null===(n=e.Tarifas)||void 0===n?void 0:n.Divisas_Compra.reverse()),R(null==o?void 0:null===(r=o.result)||void 0===r?void 0:null===(a=r.Tarifas)||void 0===a?void 0:a.Divisas_Venta.reverse())})},[]),(0,r.jsxs)("div",{className:t().contenedorConversorBanderas,children:[(0,r.jsxs)("div",{className:t().contenedorConversor,children:[(0,r.jsxs)("div",{className:t().conversorTitulo,children:[(0,r.jsx)(s(),{src:l,width:50,height:50,alt:"Logo Divisa"}),(0,r.jsxs)("div",{className:t().conversorTexto,children:[(0,r.jsx)("h2",{children:"Cambio de Divisas"}),(0,r.jsx)("p",{children:"Descubre el valor de la moneda que te interesa."})]})]}),(0,r.jsx)("div",{className:t().contenedorBotones,children:n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>{u(!1),b(!0),N(!1)},className:d?"".concat(t().botonComprar):"".concat(t().botonComprar," ").concat(t().botonActivo),children:"QUIERO EUROS"}),(0,r.jsx)("button",{className:d?"".concat(t().botonVender," ").concat(t().botonActivo):" ".concat(t().botonVender),onClick:()=>{u(!0),b(!0),N(!1)},children:"TENGO EUROS"})]}):null}),d?(0,r.jsx)(m,{telefono:i,setValorMoneda:x,setAcronimo:h,valorMoneda:v,DataAcronimo:p,setSelectDivisa:b,setSelect:N,select:A,selectDivisa:j,setActiveId:C,ciudad:a,replace:M,setUsdGoogleActivo:D}):(0,r.jsx)(_,{telefono:i,setValorMoneda:x,setAcronimo:h,valorMoneda:v,DataAcronimo:p,setSelectDivisa:b,selectDivisa:j,setActiveId:C,ciudad:a,setSelect:N,select:A}),(0,r.jsx)("p",{className:t().textoInferiorConversor,children:"\xbfSab\xedas que hacemos mejoras de precio por cantidad? \xa1Ll\xe1manos!"})]}),d?(0,r.jsxs)("div",{className:t().bloqueBanderas,children:[(0,r.jsx)("p",{className:t().titulo1,children:"Todos nuestros cambios"}),(0,r.jsx)("p",{className:t().titulo2,children:"WE SELL"}),(0,r.jsx)("p",{className:t().textoBanderas,children:"Tambi\xe9n puedes seleccionar desde aqu\xed la divisa para la calculadora"}),(0,r.jsx)("div",{className:t().contenedorBanderaColumna,children:null==E?void 0:E.filter(o=>"HRK"!==o.Name).map((o,e)=>{var n;return(0,r.jsx)("div",{id:null==o?void 0:o.Productos[0].Acronimo,className:"".concat(t().contenedorBandera," ").concat(null===(n=t().data)||void 0===n?void 0:n.Productos[0].Acronimo),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1),N(!1)},children:(0,r.jsxs)("div",{className:f===(null==o?void 0:o.Productos[0].Acronimo)?"".concat(t().contenedorBloquesBanderas," ").concat(t().banderaActiva):"".concat(t().contenedorBloquesBanderas),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1)},children:[(0,r.jsx)("div",{className:t().banderas,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1)},children:(0,r.jsx)(s(),{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1)},src:"/assets/".concat(null==o?void 0:o.Productos[0].Acronimo,".png"),alt:null==o?void 0:o.Productos[0].Acronimo,width:36,height:27})}),(0,r.jsxs)("div",{className:t().contenedorData,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1)},children:[(0,r.jsxs)("p",{className:t().nombreMoneda,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1)},children:[null==o?void 0:o.Productos[0].Acronimo," -",(0,r.jsx)("span",{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1)},children:null==o?void 0:o.Productos[0].Nombre})]}),(0,r.jsxs)("p",{className:t().precioMoneda,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),D(!1)},children:[((null==o?void 0:o.Productos[0].Precio)/1e3).toFixed(4),"€"]})]})]})},e)})})]}):(0,r.jsxs)("div",{className:t().bloqueBanderas,children:[(0,r.jsx)("p",{className:t().titulo1,children:"Todos nuestros cambios"}),(0,r.jsx)("p",{className:t().titulo2,children:"WE BUY"}),(0,r.jsx)("p",{className:t().textoBanderas,children:"Tambi\xe9n puedes seleccionar desde aqu\xed la divisa para la calculadora"}),(0,r.jsx)("div",{className:t().contenedorBanderaColumna,children:null==q?void 0:q.filter(o=>"HRK"!==o.Name&&"DKK"!==o.Name&&"RUB"!==o.Name&&"NOK"!==o.Name&&"SEK"!==o.Name).map((o,e)=>{var n;return(0,r.jsx)("div",{id:null==o?void 0:o.Productos[0].Acronimo,className:"".concat(t().contenedorBandera," ").concat(null===(n=t().data)||void 0===n?void 0:n.Productos[0].Acronimo),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P(),N(!1)},children:(0,r.jsxs)("div",{className:f===(null==o?void 0:o.Productos[0].Acronimo)?"".concat(t().contenedorBloquesBanderas," ").concat(t().banderaActiva):"".concat(t().contenedorBloquesBanderas),"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P()},children:[(0,r.jsx)("div",{className:t().banderas,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P()},children:(0,r.jsx)(s(),{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P()},src:"/assets/".concat(null==o?void 0:o.Productos[0].Acronimo,".png"),alt:null==o?void 0:o.Productos[0].Acronimo,width:36,height:27})}),(0,r.jsxs)("div",{className:t().contenedorData,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P()},children:[(0,r.jsxs)("p",{className:t().nombreMoneda,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P()},children:[null==o?void 0:o.Productos[0].Acronimo," -",(0,r.jsx)("span",{"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P()},children:null==o?void 0:o.Productos[0].Nombre})]}),(0,r.jsxs)("p",{className:t().precioMoneda,"data-acronimo":null==o?void 0:o.Productos[0].Acronimo,"data-precio":null==o?void 0:o.Productos[0].Precio,onClick:o=>{g(o),P()},children:[((null==o?void 0:o.Productos[0].Precio)/1e3).toFixed(4),"€"]})]})]})},e)})})]})]})};var p=x},6075:function(o,e,n){"use strict";n.d(e,{Z:function(){return C}});var r=n(5893);n(7294);var a=n(1826),s=n.n(a);let c=o=>{let{ciudad:e,telefono:n}=o;return(0,r.jsx)("div",{className:s().contenedorBotonFijo,children:(0,r.jsxs)("a",{href:"tel:".concat(n),children:["LLAMAR AL ",n]})})};var i=n(3501),t=n.n(i);let l=o=>{var e,n;let{ciudad:a}=o;return(0,r.jsxs)("div",{className:t().contenedorBotones,children:[(0,r.jsx)("a",{className:t().botonLlamar,href:"tel:".concat(null==a?void 0:null===(e=a.acf)||void 0===e?void 0:e.telefono),children:"LLAMAR"}),(0,r.jsx)("a",{className:t().botonWhatsapp,target:"_blank",href:"https://wa.me/+34".concat((null==a?void 0:null===(n=a.acf)||void 0===n?void 0:n.mobile).replace(/\s+/g,"")),children:"WHATSAPP"})]})};var d=n(2061),u=n.n(d),v=n(5675),m=n.n(v),_={src:"/_next/static/media/logo.57953c16.png",height:60,width:310,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX////////////////////+9Nb+9NfRfZjXAAAAB3RSTlNgb39XlDk7T70vhQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGVmYGRkZmBiYGNiZGBgYWIAAAE+AB+KXlDNAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},x=n(1664),p=n.n(x),h=n(3595),j=n(888);let b=()=>(0,r.jsx)("footer",{className:u().footer,children:(0,r.jsxs)("div",{className:u().contenedorFooter,children:[(0,r.jsx)("div",{className:u().logoFooter,children:(0,r.jsx)("a",{href:"https://quickgold.es/",children:(0,r.jsx)(m(),{priority:!0,src:_,alt:"Logo Quickgold",width:163,height:30})})}),(0,r.jsxs)("div",{className:u().contenedorEnlaces,children:[(0,r.jsx)(p(),{title:"pol\xedtica de privacidad",href:"https://quickgold.es/politica-de-privacidad/",children:(0,r.jsxs)("p",{children:[(0,r.jsx)(h.Z,{})," pol\xedtica de privacidad"]})}),(0,r.jsx)(p(),{target:"_blank",title:"pol\xedtica de calidad",href:"https://quickgold.es/doc/politica-calidad-quickgold.pdf",children:(0,r.jsxs)("p",{children:[(0,r.jsx)(j.Z,{}),"pol\xedtica de calidad"]})})]}),(0,r.jsx)("p",{className:u().contenedorTexto,children:"\xa9 2023 Quickgold | GRUNGO, S.L. - B53910071 - RONDA AUGUSTE Y LOUIS LUMIERE, 23, NAVE 9 46980 PATERNA, VALENCIA - central@quickgold.es - 900 373 629 Registro Mercantil de Valencia , Tomo 9220, Libro 6503, Folio 215, Hoja V-140170, Inscripci\xf3n 2\xaa."})]})});var A=n(4265),N=n.n(A);let g=o=>{let{nombreCiudad:e}=o;return(0,r.jsx)("header",{className:N().contenedorHeader,children:(0,r.jsxs)("div",{className:N().logos,children:[(0,r.jsx)(m(),{priority:!0,src:_,alt:"Logo Quickgold",width:163,height:30}),(0,r.jsx)("p",{children:e})]})})};var P=n(159),f=n.n(P);function C(o){var e,n;let{children:a,ciudad:s,telefono:i}=o;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:f().contenedor,children:[(0,r.jsx)(g,{nombreCiudad:null==s?void 0:null===(e=s.acf)||void 0===e?void 0:e.ciudad_landing}),a,(0,r.jsx)(b,{}),(null==s?void 0:null===(n=s.acf)||void 0===n?void 0:n.tienda)===""?(0,r.jsx)(c,{ciudad:s,telefono:i}):(0,r.jsx)(l,{ciudad:s})]})})}},3381:function(o,e,n){"use strict";var r=n(5893);n(7294);var a=n(1806),s=n.n(a);let c=o=>{let{nombreCiudad:e,telefono:n}=o;return(0,r.jsxs)("seccion",{className:s().contenedor,children:[(0,r.jsxs)("h1",{className:s().titulo,children:["Casas de Cambio en ",e]}),(0,r.jsx)("p",{children:"Hacemos mejoras por cantidad \xbfquieres saber tu precio?"}),(0,r.jsxs)("a",{className:s().botonLamar,href:"tel:".concat(n),children:["LLAMA GRATIS AL ",n]})]})};e.Z=c},5188:function(o){o.exports={contenedorBannerUno:"bannerPromoDos_contenedorBannerUno__xsmnM",bannerDesktop:"bannerPromoDos_bannerDesktop__4ie_G",bannerMobil:"bannerPromoDos_bannerMobil__potrp"}},2741:function(o){o.exports={contenedorBannerUno:"bannerPromoDos_contenedorBannerUno__i2ggu",bannerDesktop:"bannerPromoDos_bannerDesktop__Ru_w7",bannerMobil:"bannerPromoDos_bannerMobil__HvNNa"}},3584:function(o){o.exports={contenedorBannerUno:"bannerPromoUno_contenedorBannerUno__f8nVC",bannerDesktop:"bannerPromoUno_bannerDesktop__Mttwa",bannerMobil:"bannerPromoUno_bannerMobil__pk1q3"}},1826:function(o){o.exports={contenedorBotonFijo:"botonLlamarFijo_contenedorBotonFijo__os4Jx"}},3501:function(o){o.exports={botonLlamar:"botonesLlamar_botonLlamar__c3u_8",botonWhatsapp:"botonesLlamar_botonWhatsapp__2CULg",contenedorBotones:"botonesLlamar_contenedorBotones__oTO56"}},4431:function(o){o.exports={contenedorConversor:"conversor_contenedorConversor__tM9yw",conversorTitulo:"conversor_conversorTitulo__Jlftn",conversorTexto:"conversor_conversorTexto__JpA2L",contenedorBotones:"conversor_contenedorBotones__YiOts",botonComprar:"conversor_botonComprar__qt__y",botonVender:"conversor_botonVender__PI_MI",botonActivo:"conversor_botonActivo__JqF9s",bloqueDivHabituales:"conversor_bloqueDivHabituales__Seosg",bloqueTituloSuperior:"conversor_bloqueTituloSuperior__PHx8X",tituloDivisaHabitual:"conversor_tituloDivisaHabitual__sWieE",divisasHabituales:"conversor_divisasHabituales__glhkN",bloqueDer:"conversor_bloqueDer__SZIko",bloqueDerInput:"conversor_bloqueDerInput__0Ve46",contenedorInput:"conversor_contenedorInput__DNGji",dolar:"conversor_dolar__YDHSO",libra:"conversor_libra__6fKYE",imgMoneda:"conversor_imgMoneda__D7RBU",nombreMoneda:"conversor_nombreMoneda___mTds",contenedorInputSuperior:"conversor_contenedorInputSuperior__Hj3lO",contenedorInputInferior:"conversor_contenedorInputInferior__wz2i4",bloqueIzqInput:"conversor_bloqueIzqInput__sy_en",select:"conversor_select__2Y6yS",select_monedas:"conversor_select_monedas__tfSnx",contenedor_list:"conversor_contenedor_list__6swL1",moneda:"conversor_moneda__WWPSE",nombre:"conversor_nombre__B5hai",select_activo:"conversor_select_activo__X2N8F",bandera:"conversor_bandera__XYlK_",botonSwith:"conversor_botonSwith__BKS1r",monedaInferior:"conversor_monedaInferior__mABYy",botonLlamarTienda:"conversor_botonLlamarTienda__wGy5c",textoInferiorConversor:"conversor_textoInferiorConversor__fwuwQ",bloqueBanderas:"conversor_bloqueBanderas__n6tyC",contenedorBloquesBanderas:"conversor_contenedorBloquesBanderas__qo391",banderaActiva:"conversor_banderaActiva__9E3wg",contenedorBanderaColumna:"conversor_contenedorBanderaColumna__wfNaq",banderas:"conversor_banderas__osZKO",precioMoneda:"conversor_precioMoneda___UWwE",HRK:"conversor_HRK__eNX4u",titulo1:"conversor_titulo1__HQYfK",titulo2:"conversor_titulo2__TMT0y",textoBanderas:"conversor_textoBanderas__PNzw9",contenedorDolarGoogle:"conversor_contenedorDolarGoogle__lvOk_",nombreDolarGoogle:"conversor_nombreDolarGoogle__Cu2_l",contenedorBanderaGoogle:"conversor_contenedorBanderaGoogle__hsUmV",contenedorDatosGoogle:"conversor_contenedorDatosGoogle__wxeN2"}},2061:function(o){o.exports={footer:"footer_footer__hHpYC",contenedorFooter:"footer_contenedorFooter__dIRp5",logoFooter:"footer_logoFooter__FJGlN",contenedorEnlaces:"footer_contenedorEnlaces__Swl9R",contenedorTexto:"footer_contenedorTexto__woBfl"}},4265:function(o){o.exports={contenedorHeader:"header_contenedorHeader__dZ5F3",logos:"header_logos__4MN84"}},159:function(){},1806:function(o){o.exports={contenedor:"seccionUno_contenedor__frWSH",titulo:"seccionUno_titulo__U9UoA",botonLamar:"seccionUno_botonLamar__48xxc"}}}]);