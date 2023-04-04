import React from "react";
import styles from "./bannerPromoDos.module.css";

const BannerPromoDos = ({ general }) => {
  return (
    <div className={styles.contenedorBannerUno}>
      <img
        className={styles.bannerDesktop}
        src={general?.acf?.imagen_invertirenoro_desktop}
        alt="Banner dos"
      />
      <img
        className={styles.bannerMobil}
        src={general?.acf?.imagen_invertirenoro_mobil}
        alt="Banner udos mobil"
      />
    </div>
  );
};

export default BannerPromoDos;
