import React from "react";
import BloqueInfoTienda from "../BloqueInfoTienda/BloqueInfoTienda";
import Lingotes from "../Lingotes/Lingotes";
import styles from "../SeccionTres/seccionDos.module.css";

const SeccionTresTienda = ({ ciudad, data, tiendaGoogle, loading }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <Lingotes data={data} loading={loading} />
      <BloqueInfoTienda ciudad={ciudad} tiendaGoogle={tiendaGoogle} />
    </div>
  );
};

export default SeccionTresTienda;
