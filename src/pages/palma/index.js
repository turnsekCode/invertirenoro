import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionTres from "@/componentes/SeccionTres/SeccionTres";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import BannerPromoUno from "../../componentes/BannerPromoUno/BannerPromoUno";
import BannerPromoDos from "../../componentes/BannerPromoDos/BannerPromoDos";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";
import React from "react";
import { useState, useEffect } from "react";
const index = ({
  ciudad,
  general,
  tienda1,
  tienda2,
  tienda3,
  tienda4,
  tienda5,
  tienda6,
  tienda7,
  tienda8,
  tienda9,
  tienda10,
  tienda11,
  tienda1Google,
  tienda2Google,
  tienda3Google,
  tienda4Google,
  tienda5Google,
  tienda6Google,
  tienda7Google,
  tienda8Google,
  tienda9Google,
  tienda10Google,
  tienda11Google,
}) => {
  const nombreCiudad = ciudad.acf.ciudad_oro;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(true);
      });
  }, []);
  const arrayTiendas = [
    {
      id: 1,
      nombreTienda: tienda1?.acf?.nombre_tienda,
      idTienda: tienda1?.acf?.tienda,
      telefono: ciudad?.acf?.telefono,
      mobil: tienda1?.acf?.mobile,
      enlacemobil: tienda1?.acf?.mobile,
      direccion: tienda1Google?.result?.formatted_address,
      mapa: tienda1?.acf?.mapa_landing,
      enlace_resenas: tienda1?.acf?.enlace_resenas,
      escribir_resenas: tienda1?.acf?.escribir_resenas_landings,
      foto1: tienda1?.acf?.foto_1,
      foto2: tienda1?.acf?.foto_2,
      foto3: tienda1?.acf?.foto_3,
      estrellas: tienda1Google?.result?.rating,
      resenas: tienda1Google?.result?.user_ratings_total,
    },
    {
      id: 2,
      nombreTienda: tienda2?.acf?.nombre_tienda,
      idTienda: tienda2?.acf?.tienda,
      telefono: ciudad?.acf?.telefono,
      mobil: tienda2?.acf?.mobile,
      enlacemobil: tienda2?.acf?.mobile,
      direccion: tienda2Google?.result?.formatted_address,
      mapa: tienda2?.acf?.mapa_landing,
      enlace_resenas: tienda2?.acf?.enlace_resenas,
      escribir_resenas: tienda2?.acf?.escribir_resenas_landings,
      foto1: tienda2?.acf?.foto_1,
      foto2: tienda2?.acf?.foto_2,
      foto3: tienda2?.acf?.foto_3,
      estrellas: tienda2Google?.result?.rating,
      resenas: tienda2Google?.result?.user_ratings_total,
    },
  ];
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
      </Head>
      <Layout ciudad={ciudad}>
        <SeccionUno
          nombreCiudad={ciudad.acf.ciudad_landing}
          telefono={ciudad.acf.telefono}
        />
        {ciudad?.acf?.promo_activa_invertiroro ? (
          <BannerPromoUno
            /*banner para cada tienda o ciudad personalizado (prioridad uno)*/ ciudad={
              ciudad
            }
          />
        ) : ciudad.acf.promo_activa_invertiroro == false &&
          general?.acf?.promo_activa_invertiroro ? (
          <BannerPromoDos
            /*banner para cada ciudad de las landings solo invertiroro (prioridad tres)*/ general={
              general
            }
          />
        ) : general.acf.promo_activa_invertiroro == false &&
          general?.acf?.promo_general_activa ? (
          <BannerPromoGeneral
            /*banner general para todas las landings (prioridad dos)*/ general={
              general
            }
          />
        ) : (
          ""
        )}
        <SeccionDos nombreCiudad={ciudad.acf.ciudad_landing} />
        <SeccionTres
          data={data}
          ciudad={ciudad}
          arrayTiendas={arrayTiendas}
          loading={loading}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "5033";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
const id1 = "5543";
const id2 = "5539";
export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const madrid = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await madrid.json();
  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //fin datos para divisas y metales
  //datos de los campos personalizados de tiendas
  const res1 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id1}`);
  const tienda1 = await res1.json();
  const res2 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id2}`);
  const tienda2 = await res2.json();
  //fin datos de los campos personalizados de tiendas

  //datos de google para tiendas
  const tienda_1 = tienda1.acf?.tienda;
  const tienda_2 = tienda2.acf?.tienda;
  const google1 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_1}.txt`
  );
  const tienda1Google = await google1.json();
  const google2 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_2}.txt`
  );
  const tienda2Google = await google2.json();

  return {
    props: {
      ciudad,
      general,
      tienda1,
      tienda2,
      tienda1Google,
      tienda2Google,
    },
    revalidate: 1,
  };
}
