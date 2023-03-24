import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Lingotes from "../Lingotes/Lingotes";
import styles from "../SeccionTres/seccionDos.module.css";

const SeccionTresTienda = ({ ciudad, data, tiendaGoogle }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Lingotes data={data} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTresTienda;
