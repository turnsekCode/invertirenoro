import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./conversor.module.css";
import logoDivisa from "../../../public/assets/logodivisa.png";
import Vender from "../ConversorDivisa/Vender";
import Comprar from "../ConversorDivisa/Comprar";

const Conversor = ({ comprar, ciudad }) => {
  const [switched, setSwitched] = useState(null);
  const [valorMoneda, setValorMoneda] = useState("0");
  const [DataAcronimo, setAcronimo] = useState("");
  const [selectDivisa, setSelectDivisa] = useState(true);
  const [select, setSelect] = useState(null);
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
  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTMm1jsqMJYy06TXURw9EVyFqalRHk_m0vTJmoGjBd2ss0YIG0mi8oifYw2CvMsl5R4K0rHrJ5CsI2x/pub?gid=0&single=true&output=csv",
      {
        cache: "no-cache",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setValorGoogle(data);
        //setLoading(true);
      });
  }, []);

  const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const [valorGoogle, setValorGoogle] = useState("");
  const [usdGoogleActivo, setUsdGoogleActivo] = useState(false);
  const replace = valorGoogle.toString().replace(",", ".");
  const [data, setData] = useState([]);
  const [dataVenta, setDataVenta] = useState([]);
  //const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response?.result?.Tarifas?.Divisas_Compra.reverse());
        setDataVenta(response?.result?.Tarifas?.Divisas_Venta.reverse());
        //setLoading(true);
      });
  }, []);
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
          {/*<button
            onClick={() => {
              setSwitched(false);
              setSelectDivisa(true);
              setSelect(false);
            }}
            className={
              switched
                ? `${styles.botonComprar}`
                : `${styles.botonComprar} ${styles.botonActivo}`
            }
          >
            QUIERO EUROS
          </button>*/}
          {comprar ? (
            <>
              <button
                onClick={() => {
                  setSwitched(false);
                  setSelectDivisa(true);
                  setSelect(false);
                }}
                className={
                  switched
                    ? `${styles.botonComprar}`
                    : `${styles.botonComprar} ${styles.botonActivo}`
                }
              >
                QUIERO EUROS
              </button>
              <button
                className={
                  switched
                    ? `${styles.botonVender} ${styles.botonActivo}`
                    : ` ${styles.botonVender}`
                }
                onClick={() => {
                  setSwitched(true);
                  setSelectDivisa(true);
                  setSelect(false);
                }}
              >
                TENGO EUROS
              </button>
            </>
          ) : null}
        </div>
        {switched ? (
          <Vender
            setValorMoneda={setValorMoneda}
            setAcronimo={setAcronimo}
            valorMoneda={valorMoneda}
            DataAcronimo={DataAcronimo}
            setSelectDivisa={setSelectDivisa}
            setSelect={setSelect}
            select={select}
            selectDivisa={selectDivisa}
            setActiveId={setActiveId}
            ciudad={ciudad}
            replace={replace}
            setUsdGoogleActivo={setUsdGoogleActivo}
          />
        ) : (
          <Comprar
            setValorMoneda={setValorMoneda}
            setAcronimo={setAcronimo}
            valorMoneda={valorMoneda}
            DataAcronimo={DataAcronimo}
            setSelectDivisa={setSelectDivisa}
            selectDivisa={selectDivisa}
            setActiveId={setActiveId}
            ciudad={ciudad}
            setSelect={setSelect}
            select={select}
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
            {/*ciudad.acf.ciudad_oro === "madrid" ? (
              <div
                id="USD"
                onClick={(e) => {
                  captureCodigo(e);
                  MonedaSeleccionada();
                  setUsdGoogleActivo(true);
                  setSelect(false);
                }}
                className={
                  usdGoogleActivo
                    ? `${styles.contenedorBanderaGoogle} ${styles.banderaActiva}`
                    : `${styles.contenedorBanderaGoogle}`
                }
                data-acronimo="USD"
                data-precio={replace * 1000}
              >
                <Image
                  data-acronimo="USD"
                  data-precio={replace * 1000}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                    //setUsdGoogleActivo(false);
                  }}
                  src={`/assets/USD.png`}
                  alt="USD"
                  width={36}
                  height={27}
                />
                <div
                  data-acronimo="USD"
                  data-precio={replace * 1000}
                  className={styles.contenedorDatosGoogle}
                >
                  <p data-acronimo="USD" data-precio={replace * 1000}>
                    USD - dolares usa
                  </p>
                  <p data-acronimo="USD" data-precio={replace * 1000}>
                    {replace}€
                  </p>
                </div>
              </div>
            ) : (
              <div
                data-acronimo="USD"
                data-precio={dataVenta[1]?.Productos[0].Precio}
                id="USD"
                onClick={(e) => {
                  captureCodigo(e);
                  MonedaSeleccionada();
                  setUsdGoogleActivo(true);
                  setSelect(false);
                }}
                className={
                  usdGoogleActivo
                    ? `${styles.contenedorBanderaGoogle} ${styles.banderaActiva}`
                    : `${styles.contenedorBanderaGoogle}`
                }
              >
                <Image
                  data-acronimo="USD"
                  data-precio={dataVenta[1]?.Productos[0].Precio}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                    setUsdGoogleActivo(false);
                  }}
                  src={`/assets/USD.png`}
                  alt="USD"
                  width={36}
                  height={27}
                />
                <div
                  data-acronimo="USD"
                  data-precio={dataVenta[1]?.Productos[0].Precio}
                  className={styles.contenedorDatosGoogle}
                >
                  <p
                    data-acronimo="USD"
                    data-precio={dataVenta[1]?.Productos[0].Precio}
                  >
                    USD - dolares usa
                  </p>
                  <p
                    data-acronimo="USD"
                    data-precio={dataVenta[1]?.Productos[0].Precio}
                  >
                    {(dataVenta[1]?.Productos[0].Precio / 1000).toFixed(4)}€
                  </p>
                </div>
              </div>
                )*/}
            {dataVenta
              ?.filter(
                (currency) => currency.Name !== "HRK" //&& currency.Name !== "USD"
              )
              .map((data, i) => (
                <div
                  id={data?.Productos[0].Acronimo}
                  key={i}
                  className={`${styles.contenedorBandera} ${styles.data?.Productos[0].Acronimo}`}
                  data-acronimo={data?.Productos[0].Acronimo}
                  data-precio={data?.Productos[0].Precio}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                    setUsdGoogleActivo(false);
                    setSelect(false);
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
                      setUsdGoogleActivo(false);
                    }}
                  >
                    <div
                      className={styles.banderas}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      onClick={(e) => {
                        captureCodigo(e);
                        MonedaSeleccionada();
                        setUsdGoogleActivo(false);
                      }}
                    >
                      <Image
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                        onClick={(e) => {
                          captureCodigo(e);
                          MonedaSeleccionada();
                          setUsdGoogleActivo(false);
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
                        setUsdGoogleActivo(false);
                      }}
                    >
                      <p
                        className={styles.nombreMoneda}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                        onClick={(e) => {
                          captureCodigo(e);
                          MonedaSeleccionada();
                          setUsdGoogleActivo(false);
                        }}
                      >
                        {data?.Productos[0].Acronimo} -
                        <span
                          data-acronimo={data?.Productos[0].Acronimo}
                          data-precio={data?.Productos[0].Precio}
                          onClick={(e) => {
                            captureCodigo(e);
                            MonedaSeleccionada();
                            setUsdGoogleActivo(false);
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
                          setUsdGoogleActivo(false);
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
            {data
              ?.filter(
                (currency) =>
                  currency.Name !== "HRK" &&
                  currency.Name !== "DKK" &&
                  currency.Name !== "RUB" &&
                  currency.Name !== "NOK" &&
                  currency.Name !== "SEK"
              )
              .map((data, i) => (
                <div
                  id={data?.Productos[0].Acronimo}
                  key={i}
                  className={`${styles.contenedorBandera} ${styles.data?.Productos[0].Acronimo}`}
                  data-acronimo={data?.Productos[0].Acronimo}
                  data-precio={data?.Productos[0].Precio}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                    setSelect(false);
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
