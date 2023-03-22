import React from "react";
import Lingotes from "../Lingotes/Lingotes";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad, arrayTiendas, data }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Lingotes data={data} />
      <ListadoTiendas ciudad={ciudad} arrayTiendas={arrayTiendas} />
    </div>
  );
};

export default SeccionDos;
