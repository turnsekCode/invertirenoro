import Image from "next/image";
import React, { useState } from "react";
import styles from "./conversor.module.css";
import logoDivisa from "../../../public/assets/logodivisa.png";
import Vender from "../ConversorDivisa/Vender";
import Comprar from "../ConversorDivisa/Comprar";

const Conversor = ({ dataReverse, dataReverseVenta, comprar, ciudad }) => {
  const [switched, setSwitched] = useState(null);
  const [valorMoneda, setValorMoneda] = useState("0");
  const [DataAcronimo, setAcronimo] = useState("");
  const [selectDivisa, setSelectDivisa] = useState(true);
  const captureCodigo = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    //setDataNombre(e.target.dataset.nombre);
    setValorMoneda(e.target.dataset.precio);
    setActiveId(e.target.dataset.acronimo);
  };
  const MonedaSeleccionada = () => {
    setSelectDivisa(false);
  };
  const [activeId, setActiveId] = useState("");
  return (
    <div className={styles.contenedorConversorBanderas}>
      <div className={styles.contenedorConversor}>
        <div className={styles.conversorTitulo}>
          <Image src={logoDivisa} width={50} height={50} alt="Logo Divisa" />
          <div className={styles.conversorTexto}>
            <h2>Cambio de Divisas</h2>
            <p>Descubre el valor de la moneda que te interesa.</p>
          </div>
        </div>
        <div className={styles.contenedorBotones}>
          <button
            onClick={() => {
              setSwitched(false);
              setSelectDivisa(true);
            }}
            className={
              switched
                ? `${styles.botonComprar}`
                : `${styles.botonComprar} ${styles.botonActivo}`
            }
          >
            QUIERO EUROS
          </button>
          {comprar ? (
            <button
              className={
                switched
                  ? `${styles.botonVender} ${styles.botonActivo}`
                  : ` ${styles.botonVender}`
              }
              onClick={() => {
                setSwitched(true);
                setSelectDivisa(true);
              }}
            >
              TENGO EUROS
            </button>
          ) : null}
        </div>
        {switched ? (
          <Vender
            dataReverseVenta={dataReverseVenta}
            setValorMoneda={setValorMoneda}
            setAcronimo={setAcronimo}
            valorMoneda={valorMoneda}
            DataAcronimo={DataAcronimo}
            setSelectDivisa={setSelectDivisa}
            selectDivisa={selectDivisa}
            setActiveId={setActiveId}
            ciudad={ciudad}
          />
        ) : (
          <Comprar
            dataReverse={dataReverse}
            setValorMoneda={setValorMoneda}
            setAcronimo={setAcronimo}
            valorMoneda={valorMoneda}
            DataAcronimo={DataAcronimo}
            setSelectDivisa={setSelectDivisa}
            selectDivisa={selectDivisa}
            setActiveId={setActiveId}
            ciudad={ciudad}
          />
        )}
        <p className={styles.textoInferiorConversor}>
          ¿Sabías que hacemos mejoras de precio por cantidad? ¡Llámanos!
        </p>
      </div>
      {switched ? (
        <div className={styles.bloqueBanderas}>
          <p className={styles.titulo1}>Todos nuestros cambios</p>
          <p className={styles.titulo2}>WE SELL</p>
          <p className={styles.textoBanderas}>
            También puedes seleccionar desde aquí la divisa para la calculadora
          </p>
          <div className={styles.contenedorBanderaColumna}>
            {dataReverseVenta?.map((data, i) => (
              <div
                id={data?.Productos[0].Acronimo}
                key={i}
                className={`${styles.contenedorBandera} ${styles.data?.Productos[0].Acronimo}`}
                data-acronimo={data?.Productos[0].Acronimo}
                data-precio={data?.Productos[0].Precio}
                onClick={(e) => {
                  captureCodigo(e);
                  MonedaSeleccionada();
                }}
              >
                <div
                  className={
                    activeId === data?.Productos[0].Acronimo
                      ? `${styles.contenedorBloquesBanderas} ${styles.banderaActiva}`
                      : `${styles.contenedorBloquesBanderas}`
                  }
                  data-acronimo={data?.Productos[0].Acronimo}
                  data-precio={data?.Productos[0].Precio}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                  }}
                >
                  <div
                    className={styles.banderas}
                    data-acronimo={data?.Productos[0].Acronimo}
                    data-precio={data?.Productos[0].Precio}
                    onClick={(e) => {
                      captureCodigo(e);
                      MonedaSeleccionada();
                    }}
                  >
                    <Image
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      onClick={(e) => {
                        captureCodigo(e);
                        MonedaSeleccionada();
                      }}
                      src={`/assets/${data?.Productos[0].Acronimo}.png`}
                      alt={data?.Productos[0].Acronimo}
                      width={36}
                      height={27}
                    />
                  </div>
                  <div
                    className={styles.contenedorData}
                    data-acronimo={data?.Productos[0].Acronimo}
                    data-precio={data?.Productos[0].Precio}
                    onClick={(e) => {
                      captureCodigo(e);
                      MonedaSeleccionada();
                    }}
                  >
                    <p
                      className={styles.nombreMoneda}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      onClick={(e) => {
                        captureCodigo(e);
                        MonedaSeleccionada();
                      }}
                    >
                      {data?.Productos[0].Acronimo} -
                      <span
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                        onClick={(e) => {
                          captureCodigo(e);
                          MonedaSeleccionada();
                        }}
                      >
                        {data?.Productos[0].Nombre}
                      </span>
                    </p>
                    <p
                      className={styles.precioMoneda}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      onClick={(e) => {
                        captureCodigo(e);
                        MonedaSeleccionada();
                      }}
                    >
                      {(data?.Productos[0].Precio / 1000).toFixed(4)}€
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.bloqueBanderas}>
          <p className={styles.titulo1}>Todos nuestros cambios</p>
          <p className={styles.titulo2}>WE BUY</p>
          <p className={styles.textoBanderas}>
            También puedes seleccionar desde aquí la divisa para la calculadora
          </p>
          <div className={styles.contenedorBanderaColumna}>
            {dataReverse?.map((data, i) => (
              <div
                id={data?.Productos[0].Acronimo}
                key={i}
                className={`${styles.contenedorBandera} ${styles.data?.Productos[0].Acronimo}`}
                data-acronimo={data?.Productos[0].Acronimo}
                data-precio={data?.Productos[0].Precio}
                onClick={(e) => {
                  captureCodigo(e);
                  MonedaSeleccionada();
                }}
              >
                <div
                  className={
                    activeId === data?.Productos[0].Acronimo
                      ? `${styles.contenedorBloquesBanderas} ${styles.banderaActiva}`
                      : `${styles.contenedorBloquesBanderas}`
                  }
                  data-acronimo={data?.Productos[0].Acronimo}
                  data-precio={data?.Productos[0].Precio}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                  }}
                >
                  <div
                    className={styles.banderas}
                    data-acronimo={data?.Productos[0].Acronimo}
                    data-precio={data?.Productos[0].Precio}
                    onClick={(e) => {
                      captureCodigo(e);
                      MonedaSeleccionada();
                    }}
                  >
                    <Image
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      onClick={(e) => {
                        captureCodigo(e);
                        MonedaSeleccionada();
                      }}
                      src={`/assets/${data?.Productos[0].Acronimo}.png`}
                      alt={data?.Productos[0].Acronimo}
                      width={36}
                      height={27}
                    />
                  </div>
                  <div
                    className={styles.contenedorData}
                    data-acronimo={data?.Productos[0].Acronimo}
                    data-precio={data?.Productos[0].Precio}
                    onClick={(e) => {
                      captureCodigo(e);
                      MonedaSeleccionada();
                    }}
                  >
                    <p
                      className={styles.nombreMoneda}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      onClick={(e) => {
                        captureCodigo(e);
                        MonedaSeleccionada();
                      }}
                    >
                      {data?.Productos[0].Acronimo} -
                      <span
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                        onClick={(e) => {
                          captureCodigo(e);
                          MonedaSeleccionada();
                        }}
                      >
                        {data?.Productos[0].Nombre}
                      </span>
                    </p>
                    <p
                      className={styles.precioMoneda}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      onClick={(e) => {
                        captureCodigo(e);
                        MonedaSeleccionada();
                      }}
                    >
                      {(data?.Productos[0].Precio / 1000).toFixed(4)}€
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Conversor;
