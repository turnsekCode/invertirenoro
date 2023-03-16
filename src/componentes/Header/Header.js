import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import LogoQuickgold from "../../../public/assets/logo.png";

const Header = ({ nombreCiudad }) => {
  return (
    <header className={styles.contenedorHeader}>
      <div className={styles.logos}>
        <Image
          priority
          src={LogoQuickgold}
          alt="Logo Quickgold"
          width={163}
          height={30}
        />
        <p>{nombreCiudad}</p>
      </div>
    </header>
  );
};

export default Header;
