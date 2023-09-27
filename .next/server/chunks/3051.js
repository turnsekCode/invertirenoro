exports.id = 3051;
exports.ids = [3051];
exports.modules = {

/***/ 7331:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorListadoTiendas": "listadoTienda_contenedorListadoTiendas__FmudN",
	"img_stars": "listadoTienda_img_stars__Xf4gd",
	"imgValoracion": "listadoTienda_imgValoracion__9pkop",
	"bloqueResenas": "listadoTienda_bloqueResenas__Fx7ea",
	"contenedorValoraciones": "listadoTienda_contenedorValoraciones__gcW1M",
	"valoracionResenas": "listadoTienda_valoracionResenas__m05eL",
	"contenedorResenas": "listadoTienda_contenedorResenas__aVkZe",
	"contenedorLogoGoogle": "listadoTienda_contenedorLogoGoogle__oACQW",
	"numero_reviews": "listadoTienda_numero_reviews__exWNo",
	"resenasGoogle": "listadoTienda_resenasGoogle__e_2MU",
	"verResenas": "listadoTienda_verResenas__TJ0Aa",
	"direccion": "listadoTienda_direccion__1axn0",
	"telefono": "listadoTienda_telefono__HK_ak",
	"mapa": "listadoTienda_mapa__z4xSE",
	"nombreTienda": "listadoTienda_nombreTienda__dH7_T"
};


/***/ }),

/***/ 1599:
/***/ ((module) => {

// Exports
module.exports = {
	"contenedorSeccionDos": "seccionDos_contenedorSeccionDos__hOLQ4"
};


/***/ }),

/***/ 8664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SeccionDos_SeccionDos)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/componentes/ConversorDivisa/Conversor.js + 3 modules
var Conversor = __webpack_require__(7337);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/componentes/ListadoTiendas/listadoTienda.module.css
var listadoTienda_module = __webpack_require__(7331);
var listadoTienda_module_default = /*#__PURE__*/__webpack_require__.n(listadoTienda_module);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForwardIosSharp"
var ArrowForwardIosSharp_ = __webpack_require__(5245);
var ArrowForwardIosSharp_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIosSharp_);
// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__(9409);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__(4604);
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);
// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__(8279);
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);
;// CONCATENATED MODULE: ./src/componentes/ListadoTiendas/ListadoTiendas.js









const Accordion = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((Accordion_default()), {
        disableGutters: true,
        elevation: 0,
        square: true,
        ...props
    }))(({ theme  })=>({
        border: `0px solid ${theme.palette.divider}`,
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        background: "none"
    }));
const AccordionSummary = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
        expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIosSharp_default()), {
            sx: {
                fontSize: "1.4rem",
                color: "#00dde8"
            }
        }),
        ...props
    }))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)"
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: theme.spacing(1)
        }
    }));
const AccordionDetails = (0,styles_.styled)((AccordionDetails_default()))(({ theme  })=>({
        padding: theme.spacing(0),
        borderTop: "1px solid rgba(0, 0, 0, .125)"
    }));
const ListadoTiendas = ({ ciudad , arrayTiendas  })=>{
    const [expanded, setExpanded] = external_react_default().useState("");
    const handleChange = (panel)=>(event, newExpanded)=>{
            setExpanded(newExpanded ? panel : false);
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (listadoTienda_module_default()).contenedorListadoTiendas,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    "Listado de tiendas en ",
                    ciudad?.acf?.ciudad_landing
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: arrayTiendas.map((tienda)=>{
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
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion, {
                        expanded: expanded === `panel${tienda?.id}`,
                        onChange: handleChange(`panel${tienda?.id}`),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(AccordionSummary, {
                                "aria-controls": "panel1d-content",
                                id: "panel1d-header",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: (listadoTienda_module_default()).nombreTienda,
                                    children: tienda?.nombreTienda
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AccordionDetails, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (listadoTienda_module_default()).bloqueResenas,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: (listadoTienda_module_default()).contenedorLogoGoogle,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: "/assets/GOOGLE.png",
                                                        width: 29,
                                                        height: 30,
                                                        alt: "Logo google"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: (listadoTienda_module_default()).contenedorValoraciones,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (listadoTienda_module_default()).contenedorResenas,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (listadoTienda_module_default()).img_stars,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            style: {
                                                                                width: img_valoracion
                                                                            },
                                                                            className: (listadoTienda_module_default()).imgValoracion
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: (listadoTienda_module_default()).valoracionResenas,
                                                                        children: tienda?.estrellas
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: (listadoTienda_module_default()).numero_reviews,
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: tienda?.enlace_resenas,
                                                                                target: "_blank",
                                                                                children: "Ver rese\xf1as"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: (listadoTienda_module_default()).resenasGoogle,
                                                                children: [
                                                                    tienda?.resenas,
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
                                                className: (listadoTienda_module_default()).verResenas,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: tienda?.escribir_resenas,
                                                    target: "_blank",
                                                    children: "D\xe9janos tu opinion"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: (listadoTienda_module_default()).direccion,
                                        children: [
                                            "Direcci\xf3n: ",
                                            tienda?.direccion
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: `tel:${tienda?.telefono}`,
                                        className: (listadoTienda_module_default()).telefono,
                                        children: [
                                            "LLAMA GRATIS AL ",
                                            tienda?.telefono
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (listadoTienda_module_default()).mapa,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                            src: tienda?.mapa,
                                            width: "100%",
                                            height: "100%",
                                            allowFullScreen: "",
                                            loading: "lazy"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, tienda?.id);
                })
            })
        ]
    });
};
/* harmony default export */ const ListadoTiendas_ListadoTiendas = (ListadoTiendas);

// EXTERNAL MODULE: ./src/componentes/SeccionDos/seccionDos.module.css
var seccionDos_module = __webpack_require__(1599);
var seccionDos_module_default = /*#__PURE__*/__webpack_require__.n(seccionDos_module);
;// CONCATENATED MODULE: ./src/componentes/SeccionDos/SeccionDos.js





const SeccionDos = ({ ciudad , comprar , arrayTiendas , telefono  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (seccionDos_module_default()).contenedorSeccionDos,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Conversor/* default */.Z, {
                comprar: comprar,
                ciudad: ciudad,
                telefono: telefono
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ListadoTiendas_ListadoTiendas, {
                ciudad: ciudad,
                arrayTiendas: arrayTiendas,
                telefono: telefono
            })
        ]
    });
};
/* harmony default export */ const SeccionDos_SeccionDos = (SeccionDos);


/***/ })

};
;