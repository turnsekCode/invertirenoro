import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";
import BannerPromoUno from "../../componentes/BannerPromoUno/BannerPromoUno";
import BannerPromoDos from "../../componentes/BannerPromoDos/BannerPromoDos";
import BannerPromoGeneral from "@/componentes/BannerGeneral/BannerPromoGeneral";

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
  const arrayTiendas = [
    {
      id: 1,
      nombreTienda: tienda1?.acf?.nombre_tienda,
      idTienda: tienda1?.acf?.tienda,
      telefono: tienda1?.acf?.telefono,
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
      telefono: tienda2?.acf?.telefono,
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
    {
      id: 3,
      nombreTienda: tienda3?.acf?.nombre_tienda,
      idTienda: tienda3?.acf?.tienda,
      telefono: tienda3?.acf?.telefono,
      mobil: tienda3?.acf?.mobile,
      enlacemobil: tienda3?.acf?.mobile,
      direccion: tienda3Google?.result?.formatted_address,
      mapa: tienda3?.acf?.mapa_landing,
      enlace_resenas: tienda3?.acf?.enlace_resenas,
      escribir_resenas: tienda3?.acf?.escribir_resenas_landings,
      foto1: tienda3?.acf?.foto_1,
      foto2: tienda3?.acf?.foto_2,
      foto3: tienda3?.acf?.foto_3,
      estrellas: tienda3Google?.result?.rating,
      resenas: tienda3Google?.result?.user_ratings_total,
    },
    {
      id: 4,
      nombreTienda: tienda4?.acf?.nombre_tienda,
      idTienda: tienda4?.acf?.tienda,
      telefono: tienda4?.acf?.telefono,
      mobil: tienda4?.acf?.mobile,
      enlacemobil: tienda4?.acf?.mobile,
      direccion: tienda4Google?.result?.formatted_address,
      mapa: tienda4?.acf?.mapa_landing,
      enlace_resenas: tienda4?.acf?.enlace_resenas,
      escribir_resenas: tienda4?.acf?.escribir_resenas_landings,
      foto1: tienda4?.acf?.foto_1,
      foto2: tienda4?.acf?.foto_2,
      foto3: tienda4?.acf?.foto_3,
      estrellas: tienda4Google?.result?.rating,
      resenas: tienda4Google?.result?.user_ratings_total,
    },
    {
      id: 5,
      nombreTienda: tienda5?.acf?.nombre_tienda,
      idTienda: tienda5?.acf?.tienda,
      telefono: tienda5?.acf?.telefono,
      mobil: tienda5?.acf?.mobile,
      enlacemobil: tienda5?.acf?.mobile,
      direccion: tienda5Google?.result?.formatted_address,
      mapa: tienda5?.acf?.mapa_landing,
      enlace_resenas: tienda5?.acf?.enlace_resenas,
      escribir_resenas: tienda5?.acf?.escribir_resenas_landings,
      foto1: tienda5?.acf?.foto_1,
      foto2: tienda5?.acf?.foto_2,
      foto3: tienda5?.acf?.foto_3,
      estrellas: tienda5Google?.result?.rating,
      resenas: tienda5Google?.result?.user_ratings_total,
    },
    {
      id: 6,
      nombreTienda: tienda6?.acf?.nombre_tienda,
      idTienda: tienda6?.acf?.tienda,
      telefono: tienda6?.acf?.telefono,
      mobil: tienda6?.acf?.mobile,
      enlacemobil: tienda6?.acf?.mobile,
      direccion: tienda6Google?.result?.formatted_address,
      mapa: tienda6?.acf?.mapa_landing,
      enlace_resenas: tienda6?.acf?.enlace_resenas,
      escribir_resenas: tienda6?.acf?.escribir_resenas_landings,
      foto1: tienda6?.acf?.foto_1,
      foto2: tienda6?.acf?.foto_2,
      foto3: tienda6?.acf?.foto_3,
      estrellas: tienda6Google?.result?.rating,
      resenas: tienda6Google?.result?.user_ratings_total,
    },
    {
      id: 7,
      nombreTienda: tienda7?.acf?.nombre_tienda,
      idTienda: tienda7?.acf?.tienda,
      telefono: tienda7?.acf?.telefono,
      mobil: tienda7?.acf?.mobile,
      enlacemobil: tienda7?.acf?.mobile,
      direccion: tienda7Google?.result?.formatted_address,
      mapa: tienda7?.acf?.mapa_landing,
      enlace_resenas: tienda7?.acf?.enlace_resenas,
      escribir_resenas: tienda7?.acf?.escribir_resenas_landings,
      foto1: tienda7?.acf?.foto_1,
      foto2: tienda7?.acf?.foto_2,
      foto3: tienda7?.acf?.foto_3,
      estrellas: tienda7Google?.result?.rating,
      resenas: tienda7Google?.result?.user_ratings_total,
    },
    {
      id: 8,
      nombreTienda: tienda8?.acf?.nombre_tienda,
      idTienda: tienda8?.acf?.tienda,
      telefono: tienda8?.acf?.telefono,
      mobil: tienda8?.acf?.mobile,
      enlacemobil: tienda8?.acf?.mobile,
      direccion: tienda8Google?.result?.formatted_address,
      mapa: tienda8?.acf?.mapa_landing,
      enlace_resenas: tienda8?.acf?.enlace_resenas,
      escribir_resenas: tienda8?.acf?.escribir_resenas_landings,
      foto1: tienda8?.acf?.foto_1,
      foto2: tienda8?.acf?.foto_2,
      foto3: tienda8?.acf?.foto_3,
      estrellas: tienda8Google?.result?.rating,
      resenas: tienda8Google?.result?.user_ratings_total,
    },
    {
      id: 9,
      nombreTienda: tienda9?.acf?.nombre_tienda,
      idTienda: tienda9?.acf?.tienda,
      telefono: tienda9?.acf?.telefono,
      mobil: tienda9?.acf?.mobile,
      enlacemobil: tienda9?.acf?.mobile,
      direccion: tienda9Google?.result?.formatted_address,
      mapa: tienda9?.acf?.mapa_landing,
      enlace_resenas: tienda9?.acf?.enlace_resenas,
      escribir_resenas: tienda9?.acf?.escribir_resenas_landings,
      foto1: tienda9?.acf?.foto_1,
      foto2: tienda9?.acf?.foto_2,
      foto3: tienda9?.acf?.foto_3,
      estrellas: tienda9Google?.result?.rating,
      resenas: tienda9Google?.result?.user_ratings_total,
    },
    {
      id: 10,
      nombreTienda: tienda10?.acf?.nombre_tienda,
      idTienda: tienda10?.acf?.tienda,
      telefono: tienda10?.acf?.telefono,
      mobil: tienda10?.acf?.mobile,
      enlacemobil: tienda10?.acf?.mobile,
      direccion: tienda10Google?.result?.formatted_address,
      mapa: tienda10?.acf?.mapa_landing,
      enlace_resenas: tienda10?.acf?.enlace_resenas,
      escribir_resenas: tienda10?.acf?.escribir_resenas_landings,
      foto1: tienda10?.acf?.foto_1,
      foto2: tienda10?.acf?.foto_2,
      foto3: tienda10?.acf?.foto_3,
      estrellas: tienda10Google?.result?.rating,
      resenas: tienda10Google?.result?.user_ratings_total,
    },
    {
      id: 11,
      nombreTienda: tienda11?.acf?.nombre_tienda,
      idTienda: tienda11?.acf?.tienda,
      telefono: tienda11?.acf?.telefono,
      mobil: tienda11?.acf?.mobile,
      enlacemobil: tienda11?.acf?.mobile,
      direccion: tienda11Google?.result?.formatted_address,
      mapa: tienda11?.acf?.mapa_landing,
      enlace_resenas: tienda11?.acf?.enlace_resenas,
      escribir_resenas: tienda11?.acf?.escribir_resenas_landings,
      foto1: tienda11?.acf?.foto_1,
      foto2: tienda11?.acf?.foto_2,
      foto3: tienda11?.acf?.foto_3,
      estrellas: tienda11Google?.result?.rating,
      resenas: tienda11Google?.result?.user_ratings_total,
    },
  ];
  return (
    <>
      <Head>
        <title>
          El mejor cambio de divisas de {ciudad?.acf?.ciudad_landing} |
          Quickgold
        </title>
        <meta
          name="description"
          content={`La mejor tasa de cambio por tu divisa en ${ciudad?.acf?.ciudad_landing} Tenemos más de 30 monedas diferentes al momento y sin comisiones`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon.png" />
      </Head>
      <Layout ciudad={ciudad} telefono={ciudad?.acf?.telefono}>
        <SeccionUno
          nombreCiudad={ciudad?.acf?.ciudad_landing}
          telefono={ciudad?.acf?.telefono}
        />
        {ciudad?.acf?.promo_activa_cambiardivisa ? (
          <BannerPromoUno
            /*banner para cada tienda o ciudad personalizado (prioridad uno)*/ ciudad={
              ciudad
            }
          />
        ) : ciudad?.acf?.promo_activa_cambiardivisa == false &&
          general?.acf?.promo_activa_cambiardivisa ? (
          <BannerPromoDos
            /*banner para cada ciudad de las landings solo cambiardivisas (prioridad tres)*/ general={
              general
            }
          />
        ) : general?.acf?.promo_activa_cambiardivisa == false &&
          general?.acf?.promo_general_activa ? (
          <BannerPromoGeneral
            /*banner general para todas las landings (prioridad dos)*/ general={
              general
            }
          />
        ) : (
          ""
        )}

        <SeccionDos
          ciudad={ciudad}
          comprar={ciudad?.acf?.vende_divisa}
          arrayTiendas={arrayTiendas}
          telefono={ciudad?.acf?.telefono}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "468";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
const id1 = "11108";
const id2 = "6888";
const id3 = "8783";
const id4 = "5458";
const id5 = "5462";
const id6 = "5480";
const id7 = "5470";
const id8 = "5491";
const id9 = "5058";
const id10 = "6186";
const id11 = "14146";
export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const madrid = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await madrid.json();

  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();

  //datos de los campos personalizados de tiendas
  const res1 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id1}`
  );
  const tienda1 = await res1.json();
  const res2 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id2}`
  );
  const tienda2 = await res2.json();
  const res3 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id3}`
  );
  const tienda3 = await res3.json();
  const res4 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id4}`
  );
  const tienda4 = await res4.json();
  const res5 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id5}`
  );
  const tienda5 = await res5.json();
  const res6 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id6}`
  );
  const tienda6 = await res6.json();
  const res7 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id7}`
  );
  const tienda7 = await res7.json();
  const res8 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id8}`
  );
  const tienda8 = await res8.json();
  const res9 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id9}`
  );
  const tienda9 = await res9.json();
  const res10 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id10}`
  );
  const tienda10 = await res10.json();
  const res11 = await fetch(
    `https://panel.quickgold.es/wp-json/acf/v3/pages/${id11}`
  );
  const tienda11 = await res11.json();
  //fin datos de los campos personalizados de tiendas

  //datos de google para tiendas
  const tienda_1 = tienda1.acf?.tienda;
  const tienda_2 = tienda2.acf?.tienda;
  const tienda_3 = tienda3.acf?.tienda;
  const tienda_4 = tienda4.acf?.tienda;
  const tienda_5 = tienda5.acf?.tienda;
  const tienda_6 = tienda6.acf?.tienda;
  const tienda_7 = tienda7.acf?.tienda;
  const tienda_8 = tienda8.acf?.tienda;
  const tienda_9 = tienda9.acf?.tienda;
  const tienda_10 = tienda10.acf?.tienda;
  const tienda_11 = tienda11.acf?.tienda;
  const google1 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_1}.txt`
  );
  const tienda1Google = await google1.json();
  const google2 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_2}.txt`
  );
  const tienda2Google = await google2.json();
  const google3 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_3}.txt`
  );
  const tienda3Google = await google3.json();
  const google4 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_4}.txt`
  );
  const tienda4Google = await google4.json();
  const google5 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_5}.txt`
  );
  const tienda5Google = await google5.json();
  const google6 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_6}.txt`
  );
  const tienda6Google = await google6.json();
  const google7 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_7}.txt`
  );
  const tienda7Google = await google7.json();
  const google8 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_8}.txt`
  );
  const tienda8Google = await google8.json();
  const google9 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_9}.txt`
  );
  const tienda9Google = await google9.json();
  const google10 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_10}.txt`
  );
  const tienda10Google = await google10.json();
  const google11 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_11}.txt`
  );
  const tienda11Google = await google11.json();

  return {
    props: {
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
    },
    revalidate: 1,
  };
}
