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
}) => {
  return (
    <>
      <Head>
        <title>
          Reserva tu lingote de oro en {ciudad.acf.ciudad_landing} | Quickgold
        </title>
        <meta
          name="description"
          content={`Conoce el precio por gramo de oro de ${ciudad.acf.ciudad_landing}. Reserva tu lingote de oro con el mejor servicio garantizado`}
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
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "10223";
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
    (currency) => currency.Name !== "RUB" && currency.Name !== "HRK"
  );
  const dataReverseVenta = dataReverseVenta1.filter(
    (currency) =>
      currency.Name !== "RUB" &&
      currency.Name !== "HRK" &&
      currency.Name !== "DKK" &&
      currency.Name !== "USD"
  );
  //fin datos para divisas y metales

  return {
    props: {
      ciudad,
      tiendaGoogle,
      general,
      dataReverse,
      dataReverseVenta,
    },
    revalidate: 1,
  };
}
