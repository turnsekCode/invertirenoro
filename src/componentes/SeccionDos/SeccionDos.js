import React from "react";
import Conversor from "../ConversorDivisa/Conversor";
import ListadoTiendas from "../ListadoTiendas/ListadoTiendas";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ ciudad, comprar, arrayTiendas }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor comprar={comprar} ciudad={ciudad} />
      <ListadoTiendas ciudad={ciudad} arrayTiendas={arrayTiendas} />
    </div>
  );
};

export default SeccionDos;
