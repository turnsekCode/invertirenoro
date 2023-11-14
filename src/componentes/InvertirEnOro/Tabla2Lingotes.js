//import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Lingotes.module.css";
//import imagenMarcaLingotes from "../../../public/assets/imagenMarcaLingote.png";
//import lingote2_5 from "../../../assets/lingote2.5.png";
//import lingote5 from "../../../public/assets/lingote5.png";
//import lingote10 from "../../../public/assets/lingote10.png";
//import lingote20 from "../../../public/assets/lingote20.png";
//import lingote1oz from "../../../public/assets/lingote1oz.png";
//import lingote50 from "../../../public/assets/lingote50.png";
//import lingote100 from "../../../public/assets/lingote100.png";
//import lingote250 from "../../../public/assets/lingote250.png";
//import lingote500 from "../../../public/assets/lingote500.png";
//import lingote1000 from "../../../public/assets/lingote1000.png";

const Tabla2Lingotes = ({ ciudad }) => {
  const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(
      `https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`,
      {
        cache: "no-cache",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        //setLoading(true);
      });
  }, []);

  const precio2_5 = (
    data?.result?.Tarifas?.Lingotes[4].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio5 = (
    data?.result?.Tarifas?.Lingotes[5].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio10 = (
    data?.result?.Tarifas?.Lingotes[10].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio20 = (
    data?.result?.Tarifas?.Lingotes[11].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio1Oz = (
    data?.result?.Tarifas?.Lingotes[12].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio50 = (
    data?.result?.Tarifas?.Lingotes[13].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio100 = (
    data?.result?.Tarifas?.Lingotes[14].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio250 = (
    data?.result?.Tarifas?.Lingotes[15].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio500 = (
    data?.result?.Tarifas?.Lingotes[0].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });
  const precio1000 = (
    data?.result?.Tarifas?.Lingotes[16].Productos[0].Precio / 1000
  ).toLocaleString("es", {
    style: "currency",
    currency: "EUR",
  });

  const arrayLingotes = [
    {
      id: 1,
      //imagenLingote: lingote2_5,
      nombreLingote: "Lingote de 2.5gr",
      precioLingote: precio2_5,
      medidaBlister: "17,82 x 10,82 x 1,349mm",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 2,
      //imagenLingote: lingote5,
      nombreLingote: "Lingote de 5gr",
      precioLingote: precio5,
      medidaBlister: "14,95 x 7,95 x 0,437mm",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 3,
      //imagenLingote: lingote10,
      nombreLingote: "Lingote de 10gr",
      precioLingote: precio10,
      medidaBlister: "27,82 x 13,82 x 1,358mm",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 4,
      //imagenLingote: lingote20,
      nombreLingote: "Lingote de 20gr",
      precioLingote: precio20,
      medidaBlister: "31,82 x 15,82 x 2,070mm",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 5,
      //imagenLingote: lingote1oz,
      nombreLingote: "Lingote de 1oz",
      precioLingote: precio1Oz,
      medidaBlister: "31,82 x 15,82 x 3,219mm",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 6,
      //imagenLingote: lingote50,
      nombreLingote: "Lingote de 50gr",
      precioLingote: precio50,
      medidaBlister: "41,82 x 23,82 x 2,610pxmm",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 7,
      //imagenLingote: lingote100,
      nombreLingote: "Lingote de 100gr",
      precioLingote: precio100,
      medidaBlister: "41,82 x 23,82 x 5,220mm",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 8,
      //imagenLingote: lingote250,
      nombreLingote: "Lingote de 250gr",
      precioLingote: precio250,
      medidaBlister: "sin blister",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 9,
      //imagenLingote: lingote500,
      nombreLingote: "Lingote de 500gr",
      precioLingote: precio500,
      medidaBlister: "sin blister",
      telefono: ciudad?.acf?.telefono,
    },
    {
      id: 10,
      //imagenLingote: lingote1000,
      nombreLingote: "Lingote de 1000gr",
      precioLingote: precio1000,
      medidaBlister: "sin blister",
      telefono: ciudad?.acf?.telefono,
    },
  ];
  return (
    <div className={styles.contenedorAmbosTablaLingotes}>
      <h2>Invertir en oro</h2>
      <h3 className={styles.subTituloServicio}>
        Venta de lingotes de oro con las mejores condiciones. El oro, como valor
        refugio está claramente por encima de otro tipo de inversiones.
      </h3>
      <div className={styles.contenedorInfo}>
        <div className={styles.contenedorTablas}>
          {arrayLingotes.map((lingote, index) => (
            <div key={index} className={styles.contendorDatos}>
              <div className={styles.nombrePrecio}>
                <p>{lingote.nombreLingote}</p>
                <p>{lingote.precioLingote}</p>
              </div>
              <p className={styles.oroFino}>Oro fino 999,9</p>
              <p className={styles.medidaBlister}>
                <strong>Medidas del blister:</strong> {lingote.medidaBlister}
              </p>
              <span className={styles.separador}></span>
            </div>
          ))}
        </div>
      </div>
      <a
        title={`Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`}
        href={`tel:${ciudad?.acf?.telefono}`}
        className={styles.botonLlamarTienda}
      >
        LLAMA GRATIS
      </a>
    </div>
  );
};

export default Tabla2Lingotes;
