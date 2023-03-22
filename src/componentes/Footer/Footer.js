import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import LogoQuickgold from "../../../public/assets/logo.png";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedorFooter}>
        <div className={styles.logoFooter}>
          <a href="https://quickgold.es/">
            <Image
              priority
              src={LogoQuickgold}
              alt="Logo Quickgold"
              width={163}
              height={30}
            />
          </a>
        </div>
        <div className={styles.contenedorEnlaces}>
          <Link
            title="política de privacidad"
            href={"https://quickgold.es/politica-de-privacidad/"}
          >
            <p>
              <LockIcon /> política de privacidad
            </p>
          </Link>
          <Link
            target="_blank"
            title="política de calidad"
            href={"https://quickgold.es/doc/politica-calidad-quickgold.pdf"}
          >
            <p>
              <CheckCircleIcon />
              política de calidad
            </p>
          </Link>
        </div>
        <p className={styles.contenedorTexto}>
          © 2023 Quickgold | GRUNGO, S.L. - B53910071 - RONDA AUGUSTE Y LOUIS
          LUMIERE, 23, NAVE 9 46980 PATERNA, VALENCIA - central@quickgold.es -
          900 373 629 Registro Mercantil de Valencia , Tomo 9220, Libro 6503,
          Folio 215, Hoja V-140170, Inscripción 2ª.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
