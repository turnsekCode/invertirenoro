import React from "react";
import styles from "./seccionDos.module.css";

const SeccionDos = ({ nombreCiudad }) => {
  return (
    <div className={styles.contenedorSeccionDos}>
      <h2>¿Cómo invertir en oro en {nombreCiudad}?</h2>
      <p>
        En Quickgold puedes comprar oro fácilmente en forma de lingotes. Elige
        el gramaje que quieras de nuestro catálogo y resérvalo al momento. Elige
        un valor seguro de inversión en el mejor momento. Además, obtendrás
        asesoramiento y consejo de nuestro equipo y, si lo deseas, seguimiento
        de la cotización de forma personalizada para que llegado el momento,
        seas avisado/a y obtengas el máximo beneficio de la inversión realizada.
        <strong>
          <br />
          <br />
          {nombreCiudad === "Santa Cruz de Tenerife"
            ? "Los precios reflejados en esta página no incluyen gastos de envío, seguro y transporte a las islas canarias."
            : ""}
        </strong>
      </p>
    </div>
  );
};

export default SeccionDos;
