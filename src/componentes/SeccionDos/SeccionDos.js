import React from "react";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";
import Tabla2Lingotes from "../InvertirEnOro/Tabla2Lingotes";

const SeccionDos = ({ ciudad, markers, telefono }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Tabla2Lingotes ciudad={ciudad} />
      <ListadoTiendas ciudad={ciudad} markers={markers} telefono={telefono} />
    </div>
  );
};

export default SeccionDos;
