import React from "react";
import styles from "./bannerPromoUno.module.css";

const BannerPromoUno = ({ ciudad }) => {
  console.log(ciudad);
  return (
    <div className={styles.contenedorBannerUno}>
      <img src={ciudad?.acf?.foto_1} alt="Banner uno" />
    </div>
  );
};

export default BannerPromoUno;
