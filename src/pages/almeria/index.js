import Head from "next/head";
import Layout from "@/componentes/Layout/Layout";
import SeccionDos from "@/componentes/SeccionDos/SeccionDos";
import SeccionUno from "@/componentes/SeccionUno/SeccionUno";
import Script from "next/script";

const index = ({ ciudad, general, markers }) => {
  return (
    <>
      <Head>
        <title>
          Reserva tu lingote de oro en {ciudad?.acf?.ciudad_landing} | Quickgold
        </title>
        <meta
          name="description"
          content={`Conoce el precio por gramo de oro de ${ciudad?.acf?.ciudad_landing}. Reserva tu lingote de oro con el mejor servicio garantizado`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon.png" />
        {ciudad?.acf?.nonscript_chat}
      </Head>
      <Script id="livechat" strategy="afterInteractive">
        {ciudad?.acf?.script_chat}
      </Script>
      <Layout ciudad={ciudad}>
        <SeccionUno nombreCiudad={ciudad?.acf?.ciudad_landing} />

        <SeccionDos
          ciudad={ciudad}
          markers={markers}
          comprar={ciudad?.acf?.vende_divisa}
          telefono={ciudad?.acf?.telefono}
        />
      </Layout>
    </>
  );
};

export default index;
const idPaginaWp = "4995";
const apiGeneral = "13848";
//variables id de tiendas de la api de wordpress

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
  const tienda = ciudad?.acf?.ciudad_oro;
  const marker = await fetch(
    `https://panel.quickgold.es/markersMapaLandings/markers${tienda}.json`
  );
  const markers = await marker.json();
  return {
    props: {
      ciudad,
      general,
      markers,
    },
    revalidate: 1,
  };
}
