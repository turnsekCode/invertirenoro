import React from "react";
import Conversor from "../ConversorDivisa/Conversor";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({
  dataReverse,
  dataReverseVenta,
  ciudad,
  comprar,
  arrayTiendas,
}) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor
        dataReverse={dataReverse}
        dataReverseVenta={dataReverseVenta}
        comprar={comprar}
      />
      <ListadoTiendas ciudad={ciudad} arrayTiendas={arrayTiendas} />
    </div>
  );
};

export default SeccionDos;