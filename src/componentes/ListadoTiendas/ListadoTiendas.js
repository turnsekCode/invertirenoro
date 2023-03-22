import React from "react";
import Image from "next/image";
import styles from "./listadoTienda.module.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  background: "none",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1.4rem", color: "#00dde8" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const ListadoTiendas = ({ ciudad, arrayTiendas }) => {
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.contenedorListadoTiendas}>
      <h2>Listado de tiendas en {ciudad.acf.ciudad_landing}</h2>
      <div>
        {arrayTiendas.map((tienda) => {
          if (tienda.estrellas > 4.7) {
            var img_valoracion = 69;
          } else if (tienda.estrellas < 4.8 && tienda.estrellas < 4.3) {
            var img_valoracion = 62;
          } else if (tienda.estrellas < 4.4 && tienda.estrellas < 3.7) {
            var img_valoracion = 55;
          } else if (tienda.estrellas < 3.8 && tienda.estrellas < 3.3) {
            var img_valoracion = 48;
          } else if (tienda.estrellas < 3.4 && tienda.estrellas < 2.7) {
            var img_valoracion = 41;
          } else if (tienda.estrellas < 2.8 && tienda.estrellas < 2.3) {
            var img_valoracion = 34;
          } else if (tienda.estrellas < 2.4 && tienda.estrellas < 1.7) {
            var img_valoracion = 27;
          } else if (tienda.estrellas < 1.8 && tienda.estrellas < 1.3) {
            var img_valoracion = 20;
          } else if (tienda.estrellas < 1.4 && tienda.estrellas < 0.7) {
            var img_valoracion = 13;
          }
          return (
            <Accordion
              expanded={expanded === `panel${tienda.id}`}
              onChange={handleChange(`panel${tienda.id}`)}
              key={tienda.id}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className={styles.nombreTienda}>{tienda.nombreTienda}</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.bloqueResenas}>
                  <div className={styles.contenedorLogoGoogle}>
                    <Image
                      src="/../public/assets/GOOGLE.png"
                      width={29}
                      height={30}
                      alt="Logo google"
                    />
                    <div className={styles.contenedorValoraciones}>
                      <div className={styles.contenedorResenas}>
                        <span className={styles.img_stars}>
                          <span
                            style={{ width: img_valoracion }}
                            className={styles.imgValoracion}
                          ></span>
                        </span>
                        <span className={styles.valoracionResenas}>
                          {tienda.estrellas}
                        </span>
                        <div className={styles.numero_reviews}>
                          <span>
                            <a href={tienda.enlace_resenas} target="_blank">
                              Ver reseñas
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className={styles.resenasGoogle}>
                        {tienda.resenas} <span>opiniones en Google</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.verResenas}>
                    <a href={tienda.escribir_resenas} target="_blank">
                      Déjanos tu opinion
                    </a>
                  </div>
                </div>
                <p className={styles.direccion}>
                  Dirección: {tienda.direccion}
                </p>
                <a href={`tel:${tienda.telefono}`} className={styles.telefono}>
                  LLAMA GRATIS AL {tienda.telefono}
                </a>
                <div className={styles.mapa}>
                  <iframe
                    src={tienda.mapa}
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ListadoTiendas;
