import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";
import BannerPromoUno from "../../componentes/BannerPromoUno/BannerPromoUno";
import BannerPromoDos from "../../componentes/BannerPromoDos/BannerPromoDos";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";
import React from "react";
import Script from "next/script";
import SeccionTres from "@/componentes/SeccionTres/SeccionTres";
const index = ({
  ciudad,
  tiendaGoogle,
  general,
  dataReverse,
  dataReverseVenta,
  dataReverseVentaDolar,
}) => {
  return (
    <>
      <Head>
        <title>
          El mejor cambio de divisas de {ciudad.acf.ciudad_landing} | Quickgold
        </title>
        <meta
          name="description"
          content={`La mejor tasa de cambio por tu divisa en ${ciudad.acf.ciudad_landing} Tenemos más de 30 monedas diferentes al momento y sin comisiones`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../assets/icon.png" />
        {ciudad.acf.nonscript_chat}
      </Head>
      <Script id="livechat" strategy="afterInteractive">
        {ciudad.acf.script_chat}
      </Script>

      <Layout ciudad={ciudad}>
        <SeccionUno
          nombreCiudad={ciudad.acf.ciudad_landing}
          telefono={ciudad.acf.telefono}
        />
        {ciudad?.acf?.promo_activa_cambiardivisa ? (
          <BannerPromoUno
            /*banner para cada tienda o ciudad personalizado (prioridad uno)*/ ciudad={
              ciudad
            }
          />
        ) : ciudad.acf.promo_activa_cambiardivisa == false &&
          general?.acf?.promo_activa_cambiardivisa ? (
          <BannerPromoDos
            /*banner para cada ciudad de las landings solo cambiardivisas (prioridad tres)*/ general={
              general
            }
          />
        ) : general.acf.promo_activa_cambiardivisa == false &&
          general?.acf?.promo_general_activa ? (
          <BannerPromoGeneral
            /*banner general para todas las landings (prioridad dos)*/ general={
              general
            }
          />
        ) : (
          ""
        )}

        <SeccionTres
          dataReverse={dataReverse}
          dataReverseVenta={dataReverseVenta}
          ciudad={ciudad}
          tiendaGoogle={tiendaGoogle}
          comprar={ciudad.acf.vende_divisa}
          dataReverseVentaDolar={dataReverseVentaDolar}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "8973";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress

export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const ciudad1 = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();
  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //datos de google para tiendas
  const tienda = ciudad?.acf?.tienda;
  const google = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda}.txt`
  );
  const tiendaGoogle = await google.json();
  //datos para divisas y metales
  const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const data = await fetch(
    `https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`
  );
  const datos = await data.json();
  const dataReverse1 = [...datos?.result?.Tarifas?.Divisas_Compra].reverse();
  const dataReverseVenta1 = [
    ...datos?.result?.Tarifas?.Divisas_Venta,
  ].reverse();
  const dataReverse = dataReverse1.filter(
    (currency) =>
      currency.Name !== "RUB" &&
      currency.Name !== "HRK" &&
      currency.Name !== "DKK"
  );
  const dataReverseVenta = dataReverseVenta1.filter(
    (currency) => currency.Name !== "HRK" && currency.Name !== "USD"
  );
  const dataReverseVentaDolar = dataReverseVenta1.filter(
    (currency) => currency.Name !== "HRK"
  );
  //fin datos para divisas y metales

  return {
    props: {
      ciudad,
      tiendaGoogle,
      general,
      dataReverse,
      dataReverseVenta,
      dataReverseVentaDolar,
    },
    revalidate: 1,
  };
}
