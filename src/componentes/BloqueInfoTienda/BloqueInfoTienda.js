import React from "react";
import styles from "./bloqueInfoTienda.module.css";
import Image from "next/image";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const BloqueInfoTienda = ({ ciudad, tiendaGoogle }) => {
  const tienda = tiendaGoogle?.result?.rating;
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
  const horario = tiendaGoogle?.result?.opening_hours?.weekday_text;
  return (
    <div className={styles.contendorInfoTienda}>
      <h4>{ciudad?.acf?.nombre_tienda}</h4>
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
                {tiendaGoogle?.result?.rating}
              </span>
              <div className={styles.numero_reviews}>
                <span>
                  <a href={ciudad?.acf?.enlace_resenas} target="_blank">
                    Ver reseñas
                  </a>
                </span>
              </div>
            </div>
            <div className={styles.resenasGoogle}>
              {tiendaGoogle?.result?.user_ratings_total}{" "}
              <span>opiniones en Google</span>
            </div>
          </div>
        </div>
        <div className={styles.verResenas}>
          <a href={ciudad?.acf?.escribir_resenas_landings} target="_blank">
            Déjanos tu opinion
          </a>
        </div>
      </div>
      <div className={styles.contenedorHorarios}>
        <div className={styles.bloqueIzq}>
          <p className={styles.bloqueIzqTitulo}>Datos de la tienda:</p>
          <p className={styles.direccion}>
            {tiendaGoogle?.result?.formatted_address}
          </p>
          <a className={styles.botonLlamarTelefono} href="">
            <PhoneInTalkIcon />
            {ciudad?.acf?.telefono}
          </a>
          <a
            className={styles.botonLlamarMobile}
            href={`https://wa.me/${(ciudad?.acf?.mobile).replace(/\s+/g, "")}`}
          >
            <WhatsAppIcon />
            {ciudad?.acf?.mobile}
          </a>
        </div>
        <div className={styles.bloqueDer}>
          <p className={styles.tituloHorario}>Horario Habitual:</p>
          <ul className={styles.horario}>
            {horario.map((dia, i) => (
              <li key={i}>{dia}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.mapa}>
        <p>¿Dónde estamos?</p>
        <div className={styles.contenedorMapa}>
          <iframe
            src={ciudad.acf.mapa_landing}
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BloqueInfoTienda;
