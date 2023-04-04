import React from "react";
import Lingotes from "../Lingotes/Lingotes";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionTres = ({ ciudad, arrayTiendas, data, loading }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Lingotes data={data} loading={loading} ciudad={ciudad} />
      <ListadoTiendas ciudad={ciudad} arrayTiendas={arrayTiendas} />
    </div>
  );
};

export default SeccionTres;
