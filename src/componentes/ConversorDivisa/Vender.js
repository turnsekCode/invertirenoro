import React, { useState, useEffect } from "react";
import styles from "./conversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import Image from "next/image";
//import { useFetchData } from "../../utilities/DataTiendas";
/*El dia que y no haya dolar de cotizacion reemplazar donde el data-acronimo "USD" por este codigo {dataReverseVenta[1].Productos[0].Acronimo}
y volver habilitar el usd en los index y comentar el div que pinta el precio del dolar de cotizacion*/
const Comprar = ({
  dataReverseVenta,
  valorMoneda,
  DataAcronimo,
  setAcronimo,
  setValorMoneda,
  setSelectDivisa,
  selectDivisa,
  setActiveId,
  ciudad,
  replace,
  setUsdGoogleActivo,
  dataReverseVentaDolar,
  select,
  setSelect,
}) => {
  const precioLibra = dataReverseVenta[0]?.Productos[0].Precio / 1000;
  const precioDolar = dataReverseVentaDolar[1]?.Productos[0].Precio / 1000;
  const [switched, setSwitched] = useState(null);
  const [valorInput, setValorInput] = useState("");
  const [valorGoogle, setValorGoogle] = useState("");
  const precioDividido = valorMoneda / 1000;
  const precioDividido2 = 1 / precioDividido;
  const valorFinal = valorInput * precioDividido;
  const valorFinal2 = valorInput / precioDividido;
  const captureCodigo = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    setValorMoneda(e.target.dataset.precio);
    setActiveId(e.target.dataset.acronimo);
    setUsdGoogleActivo(false);
  };
  const MonedaSeleccionada = () => {
    setSelectDivisa(false);
  };
  const captureHabitual = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    setValorMoneda(e.target.dataset.precio);
    setSelectDivisa(false);
    setActiveId(e.target.dataset.acronimo);
  };
  return (
    <div className={styles.bloqueDer}>
      <div className={styles.bloqueDivHabituales}>
        <div className={styles.bloqueTituloSuperior}>
          <h6>
            Conversor <span></span> de divisa
          </h6>
          <p className={styles.tituloDivisaHabitual}>Divisas más habituales</p>
        </div>

        <div className={styles.divisasHabituales}>
          {ciudad.acf.ciudad_oro === "madrid" ? (
            <div
              className={styles.dolar}
              onClick={(e) => {
                captureHabitual(e);
                setUsdGoogleActivo(true);
                setSelect(false);
              }}
              data-acronimo="USD"
              data-precio={replace * 1000}
            >
              <div
                className={styles.imgMoneda}
                onClick={(e) => {
                  captureHabitual(e);
                  setUsdGoogleActivo(true);
                  setSelect(false);
                }}
                data-acronimo="USD"
                data-precio={replace * 1000}
              >
                <Image
                  src="/assets/banderaUSA.png"
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo="USD"
                  data-precio={replace * 1000}
                  width={40}
                  height={30}
                  alt="Bandera USA"
                />
                <span
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo="USD"
                  data-precio={replace * 1000}
                >
                  USD
                </span>
              </div>
              <div className={styles.nombreMoneda}>
                <p
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo="USD"
                  data-precio={replace * 1000}
                >
                  Dólar USA
                </p>
                <p
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo="USD"
                  data-precio={replace * 1000}
                >
                  <span
                    onClick={(e) => {
                      captureHabitual(e);
                      setUsdGoogleActivo(true);
                      setSelect(false);
                    }}
                    data-acronimo="USD"
                    data-precio={replace * 1000}
                  >
                    {replace} €
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div
              className={styles.dolar}
              onClick={(e) => {
                captureHabitual(e);
                setUsdGoogleActivo(true);
                setSelect(false);
              }}
              data-acronimo={dataReverseVentaDolar[1].Productos[0].Acronimo}
              data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
            >
              <div
                className={styles.imgMoneda}
                onClick={(e) => {
                  captureHabitual(e);
                  setUsdGoogleActivo(true);
                  setSelect(false);
                }}
                data-acronimo={dataReverseVentaDolar[1].Productos[0].Acronimo}
                data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
              >
                <Image
                  src="/assets/banderaUSA.png"
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo={dataReverseVentaDolar[1].Productos[0].Acronimo}
                  data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                  width={40}
                  height={30}
                  alt="Bandera USA"
                />
                <span
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo={dataReverseVentaDolar[1].Productos[0].Acronimo}
                  data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                >
                  USD
                </span>
              </div>
              <div className={styles.nombreMoneda}>
                <p
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo={dataReverseVentaDolar[1].Productos[0].Acronimo}
                  data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                >
                  Dólar USA
                </p>
                <p
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(true);
                    setSelect(false);
                  }}
                  data-acronimo={dataReverseVentaDolar[1].Productos[0].Acronimo}
                  data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                >
                  <span
                    onClick={(e) => {
                      captureHabitual(e);
                      setUsdGoogleActivo(true);
                      setSelect(false);
                    }}
                    data-acronimo={
                      dataReverseVentaDolar[1].Productos[0].Acronimo
                    }
                    data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                  >
                    {precioDolar.toFixed(4)} €
                  </span>
                </p>
              </div>
            </div>
          )}
          <div
            className={styles.libra}
            onClick={(e) => {
              captureHabitual(e);
              setUsdGoogleActivo(false);
              setSelect(false);
            }}
            data-acronimo={dataReverseVenta[0].Productos[0].Acronimo}
            data-precio={dataReverseVenta[0].Productos[0].Precio}
          >
            <div
              className={styles.imgMoneda}
              onClick={(e) => {
                captureHabitual(e);
                setUsdGoogleActivo(false);
                setSelect(false);
              }}
              data-acronimo={dataReverseVenta[0].Productos[0].Acronimo}
              data-precio={dataReverseVenta[0].Productos[0].Precio}
            >
              <Image
                src="/assets/banderaGBP.png"
                onClick={(e) => {
                  captureHabitual(e);
                  setUsdGoogleActivo(false);
                  setSelect(false);
                }}
                data-acronimo={dataReverseVenta[0].Productos[0].Acronimo}
                data-precio={dataReverseVenta[0].Productos[0].Precio}
                width={40}
                height={30}
                alt="Bandera GBP"
              />
              <span
                onClick={(e) => {
                  captureHabitual(e);
                  setUsdGoogleActivo(false);
                  setSelect(false);
                }}
                data-acronimo={dataReverseVenta[0].Productos[0].Acronimo}
                data-precio={dataReverseVenta[0].Productos[0].Precio}
              >
                GBP
              </span>
            </div>
            <div className={styles.nombreMoneda}>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                  setUsdGoogleActivo(false);
                  setSelect(false);
                }}
                data-acronimo={dataReverseVenta[0].Productos[0].Acronimo}
                data-precio={dataReverseVenta[0].Productos[0].Precio}
              >
                Libra Esterlina
              </p>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                  setUsdGoogleActivo(false);
                  setSelect(false);
                }}
                data-acronimo={dataReverseVenta[0].Productos[0].Acronimo}
                data-precio={dataReverseVenta[0].Productos[0].Precio}
              >
                <span
                  onClick={(e) => {
                    captureHabitual(e);
                    setUsdGoogleActivo(false);
                    setSelect(false);
                  }}
                  data-acronimo={dataReverseVenta[0].Productos[0].Acronimo}
                  data-precio={dataReverseVenta[0].Productos[0].Precio}
                >
                  {precioLibra.toFixed(4)} €
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contenedorInputSuperior}>
        <div className={styles.bloqueIzqInput}>
          <div
            className={styles.select}
            onClick={() => {
              setSelect(!select);
            }}
          >
            {selectDivisa ? (
              <>
                <p>Seleccione Divisa</p>
                <KeyboardArrowDownIcon />
              </>
            ) : (
              <>
                {DataAcronimo} <KeyboardArrowDownIcon />
              </>
            )}
            <div
              className={
                select
                  ? `${styles.select_monedas} ${styles.select_activo}`
                  : `${styles.select_monedas}`
              }
            >
              {ciudad.acf.ciudad_oro === "madrid" ? (
                <div
                  data-acronimo="USD"
                  data-precio={replace * 1000}
                  className={styles.contenedorDolarGoogle}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                    setUsdGoogleActivo(true);
                  }}
                >
                  <div className={styles.bandera}>
                    <Image
                      width={35}
                      height={23}
                      src={`/assets/USD.png`}
                      data-acronimo="USD"
                      data-precio={replace * 1000}
                      alt="USD"
                    />
                  </div>
                  <div
                    className={styles.nombreDolarGoogle}
                    data-acronimo="USD"
                    data-precio={replace * 1000}
                  >
                    <p data-acronimo="USD" data-precio={replace * 1000}>
                      USD
                    </p>
                    <p data-acronimo="USD" data-precio={replace * 1000}>
                      DOLARES USA
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  data-acronimo="USD"
                  data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                  className={styles.contenedorDolarGoogle}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                    setUsdGoogleActivo(true);
                  }}
                >
                  <div className={styles.bandera}>
                    <Image
                      width={35}
                      height={23}
                      src={`/assets/USD.png`}
                      data-acronimo="USD"
                      data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                      alt="USD"
                    />
                  </div>
                  <div
                    className={styles.nombreDolarGoogle}
                    data-acronimo="USD"
                    data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                  >
                    <p
                      data-acronimo="USD"
                      data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                    >
                      USD
                    </p>
                    <p
                      data-acronimo="USD"
                      data-precio={dataReverseVentaDolar[1].Productos[0].Precio}
                    >
                      DOLARES USA
                    </p>
                  </div>
                </div>
              )}
              {dataReverseVenta?.map((data, i) => (
                <div
                  key={i}
                  className={styles.contenedor_list}
                  data-acronimo={data?.Productos[0].Acronimo}
                  data-precio={data?.Productos[0].Precio}
                  onClick={(e) => {
                    captureCodigo(e);
                    MonedaSeleccionada();
                  }}
                >
                  <div className={styles.bandera}>
                    <Image
                      width={35}
                      height={23}
                      src={`/assets/${data?.Productos[0].Acronimo}.png`}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                      alt={data?.Productos[0].Acronimo}
                    />
                  </div>
                  <div className={styles.moneda}>
                    <p
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                    >
                      {data?.Productos[0].Acronimo}
                    </p>
                    <span
                      className={styles.nombre}
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-precio={data?.Productos[0].Precio}
                    >
                      {data?.Productos[0].Nombre}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            <PowerInputIcon />
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  style={{ border: "none" }}
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  readOnly
                  //id="input-izquierdo"
                  //ref={refInput1}
                  //onChange={calcularCambio}
                  value={valorFinal.toFixed(2)}
                  //onChange={(event) => setValorInput(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  //readOnly
                  //id="input-izquierdo"
                  //ref={refInput1}
                  //onChange={calcularCambio}
                  //value={valorFinal.toFixed(2)}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              )}
              <span>EUR</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1EUR = {precioDividido2.toFixed(4)}
              {DataAcronimo}
            </p>
          )}
        </div>
      </div>
      <div className={styles.botonSwith}>
        <ImportExportIcon
          onClick={(e) => {
            setSwitched(!switched);
          }}
        />
      </div>
      <div className={styles.contenedorInputInferior}>
        {selectDivisa ? (
          <PowerInputIcon />
        ) : (
          <div className={styles.monedaInferior}>{DataAcronimo}</div>
        )}

        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            <PowerInputIcon />
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  //id="input-derecho"
                  //ref={refInput2}
                  //onChange={calcularCambio}
                  //value={valorFinal.toFixed(2)}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  //id="input-derecho"
                  //ref={refInput2}
                  //onChange={calcularCambio}
                  value={valorFinal2.toFixed(2)}
                  readOnly
                  style={{ border: "none" }}
                  //onChange={(event) => setValorInput(event.target.value)}
                />
              )}
              <span>{DataAcronimo}</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1{DataAcronimo} = {precioDividido.toFixed(4)}
              EUR
            </p>
          )}
        </div>
      </div>
      <a
        className={styles.botonLlamarTienda}
        href={`tel:${ciudad?.acf?.telefono}`}
      >
        LLAMA GRATIS AL {ciudad?.acf?.telefono}
      </a>
    </div>
  );
};

export default Comprar;
