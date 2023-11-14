import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Tabla2Lingotes from "../InvertirEnOro/Tabla2Lingotes";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, tiendaGoogle }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Tabla2Lingotes ciudad={ciudad} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTres;
