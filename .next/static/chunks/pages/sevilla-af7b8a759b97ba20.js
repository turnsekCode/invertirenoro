(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1498],{4737:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sevilla",function(){return n(5159)}])},49:function(e,o,n){"use strict";n.d(o,{Z:function(){return h}});var a=n(5893),i=n(7294),d=n(5702),l=n(9618),t=n.n(l),r=n(8145),s=n.n(r),c=n(6261),u=n(1123),_=n(1108);n(1664);let m=e=>{let{markers:o,ciudad:n}=e,d=o.arrayMarker,[l,t]=(0,i.useState)({longitude:o.markerInicial[0].longitude,latitude:o.markerInicial[0].latitude,zoom:o.markerInicial[0].zoom,cooperativeGestures:!0}),r=(0,i.useRef)(),m=()=>{var e;v(!1),null===(e=r.current)||void 0===e||e.flyTo({center:[o.markerInicial[0].longitude,o.markerInicial[0].latitude],duration:2e3,zoom:o.markerInicial[0].zoom})},[p,v]=(0,i.useState)(null),f=()=>{v(!0)},[x,h]=(0,i.useState)({id:"",longitude:"",latitude:"",tienda:"",telefono:"",direccion:"",comoLlegar:"",nombreTienda:"",duration:"",zoom:"",url:""}),[j,b]=(0,i.useState)(""),g=e=>{var o;h({id:e.id,longitude:e.longitude,latitude:e.latitude,tienda:e.tienda,telefono:e.telefono,direccion:e.direccion,comoLlegar:e.comoLlegar,nombreTienda:e.nombreTienda,duration:e.duration,zoom:e.zoom,url:e.url}),null===(o=r.current)||void 0===o||o.flyTo({center:{lng:e.longitude,lat:e.latitude},duration:1500,zoom:e.zoom}),b(e.id)},T=o.arrayMarker[o.arrayMarker.length-1];return(0,a.jsxs)("section",{className:s().contenedorMapa,children:[(0,a.jsxs)("div",{className:s().contenedorbloqueIzq,children:[(0,a.jsx)("div",{className:s().bloqueIzq,children:(0,a.jsxs)("p",{children:["Tiendas: ",(0,a.jsx)("span",{children:null==T?void 0:T.id})]})}),(0,a.jsx)("div",{className:s().contenedorTiendas,children:d.map(e=>(0,a.jsx)(c.rU,{onClick:()=>{f(),g(e)},to:"contenedorMapa2",smooth:!0,offset:-110,spy:!0,duration:500,children:(0,a.jsxs)("div",{onClick:()=>{f(),g(e)},className:j===e.id&&p?"".concat(s().contenedorInfoTiendaMapa," ").concat(s().contenedorInfoTiendaMapaActivo):" ".concat(s().contenedorInfoTiendaMapa),children:[(0,a.jsx)("h3",{children:null==e?void 0:e.nombreTienda}),(0,a.jsxs)("div",{className:s().tienda,children:[(0,a.jsx)("p",{children:null==e?void 0:e.direccion}),(0,a.jsx)("p",{children:null==e?void 0:e.telefono})]})]})},e.id))})]}),(0,a.jsx)("div",{className:s().bloqueDer,id:"contenedorMapa2",children:(0,a.jsxs)(_.ZP,{onStyleLoad:!0,ref:r,...l,onMove:e=>t(e.viewState),className:s().mapa,mapStyle:"mapbox://styles/mapbox/streets-v9?optimize=true",mapboxAccessToken:"pk.eyJ1IjoicXVpY2tnb2wiLCJhIjoiY2xhbGNvcHAyMDRyNjNwbWthcm1zMm9nbyJ9.tmZYhqn4Z6U3fcCZH647Zw",children:[(0,a.jsx)(_.ot,{})," ",(0,a.jsx)(_.$j,{})," ",(0,a.jsx)(_.Pv,{}),(0,a.jsx)("button",{className:s().reset_map,onClick:()=>{m()},children:"Reset Map"}),d.map(e=>(0,a.jsx)(_.Jx,{longitude:e.longitude,latitude:e.latitude,onClick:()=>{g(e),f()},children:p?(0,a.jsx)(_.GI,{style:{top:-25,maxWidth:255},longitude:null==x?void 0:x.longitude,className:"popup",latitude:null==x?void 0:x.latitude,closeOnClick:!1,anchor:null,onClose:()=>v(!1),children:(0,a.jsxs)("div",{className:s().contenedor_popuop,children:[(0,a.jsx)("p",{className:s().nombre_ciudad_popup,children:null==x?void 0:x.nombreTienda}),(0,a.jsx)("a",{title:"Direcci\xf3n",href:null==x?void 0:x.comoLlegar,rel:"noreferrer",target:"_blank",className:s().direccion_popup,children:null==x?void 0:x.direccion}),(0,a.jsx)("br",{}),(0,a.jsxs)("a",{href:"tel:".concat(null==x?void 0:x.telefono),className:s().telefono_popup,title:"Tel\xe9fono",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)(u.Z,{})," "]}),null==x?void 0:x.telefono]}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:null==x?void 0:x.comoLlegar,rel:"noreferrer",className:s().boton_popUp,children:"C\xf3mo llegar"}),(0,a.jsx)("a",{title:"Llamar",href:"tel:".concat(null==x?void 0:x.telefono),rel:"noreferrer",className:s().boton_popUp,children:"Llamar"}),(0,a.jsx)("a",{title:"C\xf3mo llegar",href:"".concat(null==x?void 0:x.url),rel:"noreferrer",className:s().boton_popUp,children:"Web"})]})}):null},e.id))]})})]})},p=e=>{let{markers:o}=e;return(0,a.jsx)("div",{className:t().contenedorListadoTiendas,children:(0,a.jsx)(m,{markers:o})})};var v=n(2281),f=n.n(v);let x=e=>{let{ciudad:o,comprar:n,markers:i,telefono:l}=e;return(0,a.jsxs)("div",{className:f().contenedorSeccionDos,children:[(0,a.jsx)(d.Z,{comprar:n,ciudad:o,telefono:l}),(0,a.jsx)(p,{ciudad:o,markers:i,telefono:l})]})};var h=x},3381:function(e,o,n){"use strict";var a=n(5893);n(7294);var i=n(1806),d=n.n(i);let l=e=>{let{nombreCiudad:o,telefono:n}=e;return(0,a.jsx)("seccion",{className:d().contenedor,children:(0,a.jsxs)("h1",{className:d().titulo,children:["Tiendas quickgold en ",o]})})};o.Z=l},5159:function(e,o,n){"use strict";n.r(o),n.d(o,{__N_SSG:function(){return c}});var a=n(5893),i=n(9008),d=n.n(i),l=n(3867),t=n(49),r=n(3381);let s=e=>{var o,n,i,s,c;let{ciudad:u,general:_,markers:m}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d(),{children:[(0,a.jsxs)("title",{children:["El mejor cambio de divisas de ",null==u?void 0:null===(o=u.acf)||void 0===o?void 0:o.ciudad_landing," | Quickgold"]}),(0,a.jsx)("meta",{name:"description",content:"La mejor tasa de cambio por tu divisa en ".concat(null==u?void 0:null===(n=u.acf)||void 0===n?void 0:n.ciudad_landing," Tenemos m\xe1s de 30 monedas diferentes al momento y sin comisiones")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/assets/icon.png"})]}),(0,a.jsxs)(l.Z,{ciudad:u,children:[(0,a.jsx)(r.Z,{nombreCiudad:null==u?void 0:null===(i=u.acf)||void 0===i?void 0:i.ciudad_landing}),(0,a.jsx)(t.Z,{ciudad:u,comprar:null==u?void 0:null===(s=u.acf)||void 0===s?void 0:s.vende_divisa,markers:m,telefono:null==u?void 0:null===(c=u.acf)||void 0===c?void 0:c.telefono})]})]})};var c=!0;o.default=s},9618:function(e){e.exports={contenedorListadoTiendas:"listadoTienda_contenedorListadoTiendas__FmudN",img_stars:"listadoTienda_img_stars__Xf4gd",imgValoracion:"listadoTienda_imgValoracion__9pkop",bloqueResenas:"listadoTienda_bloqueResenas__Fx7ea",contenedorValoraciones:"listadoTienda_contenedorValoraciones__gcW1M",valoracionResenas:"listadoTienda_valoracionResenas__m05eL",contenedorResenas:"listadoTienda_contenedorResenas__aVkZe",contenedorLogoGoogle:"listadoTienda_contenedorLogoGoogle__oACQW",numero_reviews:"listadoTienda_numero_reviews__exWNo",resenasGoogle:"listadoTienda_resenasGoogle__e_2MU",verResenas:"listadoTienda_verResenas__TJ0Aa",direccion:"listadoTienda_direccion__1axn0",telefono:"listadoTienda_telefono__HK_ak",mapa:"listadoTienda_mapa__z4xSE",nombreTienda:"listadoTienda_nombreTienda__dH7_T"}},8145:function(e){e.exports={contenedorMapa:"mapaCiudades_contenedorMapa__DHLB8",contenedorbloqueIzq:"mapaCiudades_contenedorbloqueIzq__Rp7gq",bloqueDer:"mapaCiudades_bloqueDer__mH701",bloqueIzq:"mapaCiudades_bloqueIzq__DKR5L",linea:"mapaCiudades_linea__O4vPS",reset_map:"mapaCiudades_reset_map__lr2TZ",contenedorTiendas:"mapaCiudades_contenedorTiendas__hZuvd",tienda:"mapaCiudades_tienda__fBGAS","mapboxgl-popup-close-button":"mapaCiudades_mapboxgl-popup-close-button___PgA_",nombre_ciudad_popup:"mapaCiudades_nombre_ciudad_popup__YLhzk",direccion_popup:"mapaCiudades_direccion_popup__IS9wP",telefono_popup:"mapaCiudades_telefono_popup__eqt8Z",boton_como_llegar:"mapaCiudades_boton_como_llegar__8it0V",boton_popUp:"mapaCiudades_boton_popUp__yw3fW",contenedorInfoTiendaMapa:"mapaCiudades_contenedorInfoTiendaMapa__ibqhv",contenedorInfoTiendaMapaActivo:"mapaCiudades_contenedorInfoTiendaMapaActivo__RvQHD"}},2281:function(e){e.exports={contenedorSeccionDos:"seccionDos_contenedorSeccionDos__hOLQ4"}},1806:function(e){e.exports={contenedor:"seccionUno_contenedor__frWSH",titulo:"seccionUno_titulo__U9UoA",botonLamar:"seccionUno_botonLamar__48xxc"}}},function(e){e.O(0,[959,1643,5911,287,9774,2888,179],function(){return e(e.s=4737)}),_N_E=e.O()}]);