import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Conversor from "../ConversorDivisa/Conversor";
import styles from "./seccionDos.module.css";

const SeccionTres = ({
  ciudad,
  dataReverse,
  dataReverseVenta,
  tiendaGoogle,
  comprar,
  dataReverseVentaDolar,
}) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Conversor
        dataReverse={dataReverse}
        dataReverseVenta={dataReverseVenta}
        comprar={comprar}
        ciudad={ciudad}
        dataReverseVentaDolar={dataReverseVentaDolar}
      />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTres;
