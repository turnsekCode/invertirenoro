exports.id = 5660;
exports.ids = [5660];
exports.modules = {

/***/ 8778:
/***/ ((module) => {

// Exports
module.exports = {
	"contendorInfoTienda": "bloqueInfoTienda_contendorInfoTienda___4v3w",
	"img_stars": "bloqueInfoTienda_img_stars__HmeY1",
	"imgValoracion": "bloqueInfoTienda_imgValoracion__PKOEd",
	"bloqueResenas": "bloqueInfoTienda_bloqueResenas__bTbpj",
	"contenedorValoraciones": "bloqueInfoTienda_contenedorValoraciones__crsPG",
	"valoracionResenas": "bloqueInfoTienda_valoracionResenas__WFVHR",
	"contenedorResenas": "bloqueInfoTienda_contenedorResenas__UT9HT",
	"contenedorLogoGoogle": "bloqueInfoTienda_contenedorLogoGoogle__wwBuZ",
	"numero_reviews": "bloqueInfoTienda_numero_reviews__3Er4_",
	"resenasGoogle": "bloqueInfoTienda_resenasGoogle__dSQ17",
	"verResenas": "bloqueInfoTienda_verResenas__1W8Gd",
	"contenedorHorarios": "bloqueInfoTienda_contenedorHorarios__fD7Nt",
	"bloqueIzq": "bloqueInfoTienda_bloqueIzq__dduDM",
	"bloqueIzqTitulo": "bloqueInfoTienda_bloqueIzqTitulo__gLJ6E",
	"tituloHorario": "bloqueInfoTienda_tituloHorario__h4pTC",
	"direccion": "bloqueInfoTienda_direccion__Vk8e1",
	"botonLlamarTelefono": "bloqueInfoTienda_botonLlamarTelefono__FEyds",
	"botonLlamarMobile": "bloqueInfoTienda_botonLlamarMobile__2Leer",
	"horario": "bloqueInfoTienda_horario__Z3Stw",
	"mapa": "bloqueInfoTienda_mapa__tGEgs",
	"contenedorMapa": "bloqueInfoTienda_contenedorMapa__WKgfj"
};


/***/ }),

/***/ 700:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionDos": "seccionDos_contenedorSeccionDos__lgTMZ"
};


/***/ }),

/***/ 5660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SeccionTres_SeccionTres)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/componentes/BloqueInfoTienda/bloqueInfoTienda.module.css
var bloqueInfoTienda_module = __webpack_require__(8778);
var bloqueInfoTienda_module_default = /*#__PURE__*/__webpack_require__.n(bloqueInfoTienda_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mui/icons-material/PhoneInTalk"
var PhoneInTalk_ = __webpack_require__(8377);
var PhoneInTalk_default = /*#__PURE__*/__webpack_require__.n(PhoneInTalk_);
// EXTERNAL MODULE: external "@mui/icons-material/WhatsApp"
var WhatsApp_ = __webpack_require__(2232);
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_);
;// CONCATENATED MODULE: ./src/componentes/BloqueInfoTienda/BloqueInfoTienda.js






const BloqueInfoTienda = ({ ciudad , tiendaGoogle  })=>{
    const tienda = tiendaGoogle?.result?.rating;
    if (tienda?.estrellas > 4.7) {
        var img_valoracion = 69;
    } else if (tienda?.estrellas < 4.8 && tienda?.estrellas < 4.3) {
        var img_valoracion = 62;
    } else if (tienda?.estrellas < 4.4 && tienda?.estrellas < 3.7) {
        var img_valoracion = 55;
    } else if (tienda?.estrellas < 3.8 && tienda?.estrellas < 3.3) {
        var img_valoracion = 48;
    } else if (tienda?.estrellas < 3.4 && tienda?.estrellas < 2.7) {
        var img_valoracion = 41;
    } else if (tienda?.estrellas < 2.8 && tienda?.estrellas < 2.3) {
        var img_valoracion = 34;
    } else if (tienda?.estrellas < 2.4 && tienda?.estrellas < 1.7) {
        var img_valoracion = 27;
    } else if (tienda?.estrellas < 1.8 && tienda?.estrellas < 1.3) {
        var img_valoracion = 20;
    } else if (tienda?.estrellas < 1.4 && tienda?.estrellas < 0.7) {
        var img_valoracion = 13;
    }
    const horario = tiendaGoogle?.result?.opening_hours?.weekday_text;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (bloqueInfoTienda_module_default()).contendorInfoTienda,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: ciudad?.acf?.nombre_tienda
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (bloqueInfoTienda_module_default()).bloqueResenas,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (bloqueInfoTienda_module_default()).contenedorLogoGoogle,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/../public/assets/GOOGLE.png",
                                width: 29,
                                height: 30,
                                alt: "Logo google"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (bloqueInfoTienda_module_default()).contenedorValoraciones,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (bloqueInfoTienda_module_default()).contenedorResenas,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (bloqueInfoTienda_module_default()).img_stars,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    style: {
                                                        width: img_valoracion
                                                    },
                                                    className: (bloqueInfoTienda_module_default()).imgValoracion
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (bloqueInfoTienda_module_default()).valoracionResenas,
                                                children: tiendaGoogle?.result?.rating
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (bloqueInfoTienda_module_default()).numero_reviews,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: ciudad?.acf?.enlace_resenas,
                                                        target: "_blank",
                                                        children: "Ver rese\xf1as"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (bloqueInfoTienda_module_default()).resenasGoogle,
                                        children: [
                                            tiendaGoogle?.result?.user_ratings_total,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "opiniones en Google"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (bloqueInfoTienda_module_default()).verResenas,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: ciudad?.acf?.escribir_resenas_landings,
                            target: "_blank",
                            children: "D\xe9janos tu opinion"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (bloqueInfoTienda_module_default()).contenedorHorarios,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (bloqueInfoTienda_module_default()).bloqueIzq,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (bloqueInfoTienda_module_default()).bloqueIzqTitulo,
                                children: "Datos de la tienda:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (bloqueInfoTienda_module_default()).direccion,
                                children: tiendaGoogle?.result?.formatted_address
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: (bloqueInfoTienda_module_default()).botonLlamarTelefono,
                                href: `tel:${ciudad?.acf?.telefono}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((PhoneInTalk_default()), {}),
                                    ciudad?.acf?.telefono
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: (bloqueInfoTienda_module_default()).botonLlamarMobile,
                                href: `https://wa.me/${(ciudad?.acf?.mobile).replace(/\s+/g, "")}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((WhatsApp_default()), {}),
                                    ciudad?.acf?.mobile
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (bloqueInfoTienda_module_default()).bloqueDer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (bloqueInfoTienda_module_default()).tituloHorario,
                                children: "Horario Habitual:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (bloqueInfoTienda_module_default()).horario,
                                children: horario.map((dia, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: dia
                                    }, i))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (bloqueInfoTienda_module_default()).mapa,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\xbfD\xf3nde estamos?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (bloqueInfoTienda_module_default()).contenedorMapa,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            src: ciudad?.acf?.mapa_landing,
                            width: "100%",
                            height: "100%",
                            allowFullScreen: "",
                            loading: "lazy"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BloqueInfoTienda_BloqueInfoTienda = (BloqueInfoTienda);

// EXTERNAL MODULE: ./src/componentes/ConversorDivisa/Conversor.js + 3 modules
var Conversor = __webpack_require__(7337);
// EXTERNAL MODULE: ./src/componentes/SeccionTres/seccionDos.module.css
var seccionDos_module = __webpack_require__(700);
var seccionDos_module_default = /*#__PURE__*/__webpack_require__.n(seccionDos_module);
;// CONCATENATED MODULE: ./src/componentes/SeccionTres/SeccionTres.js





const SeccionTres = ({ ciudad , tiendaGoogle , comprar  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (seccionDos_module_default()).contenedorSeccionDos,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Conversor/* default */.Z, {
                comprar: comprar,
                ciudad: ciudad
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BloqueInfoTienda_BloqueInfoTienda, {
                ciudad: ciudad,
                tiendaGoogle: tiendaGoogle
            })
        ]
    });
};
/* harmony default export */ const SeccionTres_SeccionTres = (SeccionTres);


/***/ })

};
;