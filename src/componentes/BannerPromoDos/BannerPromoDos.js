import React from "react";
import styles from "./bannerPromoDos.module.css";

const BannerPromoUno = ({ general }) => {
  return (
    <div className={styles.contenedorBannerUno}>
      <img src={general?.acf?.foto_2} alt="Banner uno" />
    </div>
  );
};

export default BannerPromoUno;
