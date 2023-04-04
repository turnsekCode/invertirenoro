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
  dataReverse,
  dataReverseVenta,
  tienda1,
  tienda1Google,
}) => {
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
  ];
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
      </Head>
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

        <SeccionDos
          dataReverse={dataReverse}
          dataReverseVenta={dataReverseVenta}
          ciudad={ciudad}
          comprar={ciudad.acf.vende_divisa}
          arrayTiendas={arrayTiendas}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "10221";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress
const id1 = "10223";

export async function getStaticProps() {
  //datos de los campos personalizados de la ciudad
  const madrid = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${idPaginaWp}`
  );
  const ciudad = await madrid.json();
  const nombreCiudad = ciudad.acf.ciudad_oro;
  //fin datos de los campos personalizados de la ciudad
  const res = await fetch(
    `https://quickgold.es/wp-json/acf/v3/pages/${apiGeneral}`
  );
  const general = await res.json();
  //datos para divisas y metales
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
  //datos de los campos personalizados de tiendas
  const res1 = await fetch(`https://quickgold.es/wp-json/acf/v3/pages/${id1}`);
  const tienda1 = await res1.json();
  //fin datos de los campos personalizados de tiendas

  //datos de google para tiendas
  const tienda_1 = tienda1.acf?.tienda;
  const google1 = await fetch(
    `https://quickgold.es/archivos-cache/archivos-cache-gmb/cached-place_id-${tienda_1}.txt`
  );
  const tienda1Google = await google1.json();

  return {
    props: {
      ciudad,
      general,
      dataReverse,
      dataReverseVenta,
      tienda1,
      tienda1Google,
    },
    revalidate: 1,
  };
}
