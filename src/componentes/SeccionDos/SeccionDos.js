import React from "react";
import Conversor from "../ConversorDivisa/Conversor";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad, comprar, arrayTiendas, telefono }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor comprar={comprar} ciudad={ciudad} telefono={telefono} />
      <ListadoTiendas
        ciudad={ciudad}
        arrayTiendas={arrayTiendas}
        telefono={telefono}
      />
    </div>
  );
};

export default SeccionDos;
