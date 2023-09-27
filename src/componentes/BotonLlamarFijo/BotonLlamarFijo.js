import React from "react";
import styles from "./botonLlamarFijo.module.css";

const BotonLlamarFijo = ({ ciudad, telefono }) => {
  return (
    <div className={styles.contenedorBotonFijo}>
      <a href={`tel:${telefono}`}>LLAMAR AL {telefono}</a>
    </div>
  );
};

export default BotonLlamarFijo;
