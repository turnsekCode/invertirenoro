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

const ListadoTiendasMadrid = ({ ciudad, arrayTiendas, tienda1Google }) => {
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const estrellas = tienda1Google?.result?.rating;
  if (estrellas > 4.7) {
    var img_valoracion = 69;
  } else if (estrellas < 4.8 && estrellas < 4.3) {
    var img_valoracion = 62;
  } else if (estrellas < 4.4 && estrellas < 3.7) {
    var img_valoracion = 55;
  } else if (estrellas < 3.8 && estrellas < 3.3) {
    var img_valoracion = 48;
  } else if (estrellas < 3.4 && estrellas < 2.7) {
    var img_valoracion = 41;
  } else if (estrellas < 2.8 && estrellas < 2.3) {
    var img_valoracion = 34;
  } else if (estrellas < 2.4 && estrellas < 1.7) {
    var img_valoracion = 27;
  } else if (estrellas < 1.8 && estrellas < 1.3) {
    var img_valoracion = 20;
  } else if (estrellas < 1.4 && estrellas < 0.7) {
    var img_valoracion = 13;
  }
  return (
    <div className={styles.contenedorListadoTiendas}>
      <h2>Listado de tiendas en {ciudad.acf.ciudad_landing}</h2>
      <div>
        {arrayTiendas.map((tienda) => (
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
                      <span>{tienda?.result?.rating}</span>
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
              <p className={styles.direccion}>Dirección: {tienda.direccion}</p>
              <a href={`tel:${tienda.telefono}`} className={styles.telefono}>
                LLAMA GRATIS AL {tienda.telefono}
              </a>
              <div className={styles.mapa}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.855649447686!2d-3.6483315843656454!3d40.434195162500686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422fe203343743%3A0x975f6472ab87a35a!2sQuickgold%20Madrid%20(Quintana)%20-%20Compro%20Oro%20%26%20Money%20Exchange!5e0!3m2!1ses!2ses!4v1645535145622!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default ListadoTiendasMadrid;
