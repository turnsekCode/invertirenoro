import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionTresTienda from "@/componentes/SeccionTresTienda/SeccionTresTienda";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import BannerPromoUno from "../../componentes/BannerPromoUno/BannerPromoUno";
import BannerPromoDos from "../../componentes/BannerPromoDos/BannerPromoDos";
import React from "react";
import useSWR from "swr";
import Script from "next/script";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const index = ({ ciudad, tiendaGoogle, general }) => {
  const nombreCiudad = ciudad.acf.ciudad_oro;
  const { data } = useSWR(
    `https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`,
    fetcher
  );
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
        {ciudad.acf.foto_1 !== "" ? <BannerPromoUno ciudad={ciudad} /> : ""}
        {general.acf.foto_2 !== "" && ciudad.acf.foto_1 === "" ? (
          <BannerPromoDos general={general} />
        ) : (
          ""
        )}
        <SeccionDos nombreCiudad={ciudad.acf.ciudad_landing} />
        <SeccionTresTienda
          data={data}
          ciudad={ciudad}
          tiendaGoogle={tiendaGoogle}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "5510";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress

export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const ciudad1 = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await ciudad1.json();
  //fin datos de los campos personalizados de la ciudad
  //fin datos para divisas y metales
  const res = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //datos de google para tiendas
  const tienda = ciudad.acf?.tienda;
  const google = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda}.txt`
  );
  const tiendaGoogle = await google.json();

  return {
    props: {
      ciudad,
      tiendaGoogle,
      general,
    },
    revalidate: 1,
  };
}
