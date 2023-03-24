import Image from "next/image";
import React from "react";
import styles from "./Lingotes.module.css";
import imagenMarcaLingotes from "../../../public/assets/imagenMarcaLingote.png";
import lingote2_5 from "../../../public/assets/lingote2.5.png";
import lingote5 from "../../../public/assets/lingote5.png";
import lingote10 from "../../../public/assets/lingote10.png";
import lingote20 from "../../../public/assets/lingote20.png";
import lingote1oz from "../../../public/assets/lingote1oz.png";
import lingote50 from "../../../public/assets/lingote50.png";
import lingote100 from "../../../public/assets/lingote100.png";
import lingote250 from "../../../public/assets/lingote250.png";
import lingote500 from "../../../public/assets/lingote500.png";
import lingote1000 from "../../../public/assets/lingote1000.png";

const TablaLingotes = ({ data, loading }) => {
  const precio2_5 = (
    data?.result?.Tarifas?.Lingotes[4].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio5 = (
    data?.result?.Tarifas?.Lingotes[5].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio10 = (
    data?.result?.Tarifas?.Lingotes[10].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio20 = (
    data?.result?.Tarifas?.Lingotes[11].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio1Oz = (
    data?.result?.Tarifas?.Lingotes[12].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio50 = (
    data?.result?.Tarifas?.Lingotes[13].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio100 = (
    data?.result?.Tarifas?.Lingotes[14].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio250 = (
    data?.result?.Tarifas?.Lingotes[15].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio500 = (
    data?.result?.Tarifas?.Lingotes[0].Productos[0].Precio / 1000
  ).toLocaleString();
  const precio1000 = (
    data?.result?.Tarifas?.Lingotes[16].Productos[0].Precio / 1000
  ).toLocaleString();

  const arrayLingotes = [
    {
      id: 1,
      imagenLingote: lingote2_5,
      nombreLingote: "Lingote de 2.5gr",
      precioLingote: precio2_5,
      medidaBlister: "17,82 x 10,82 x 1,349mm",
      telefono: "900 373 629",
    },
    {
      id: 2,
      imagenLingote: lingote5,
      nombreLingote: "Lingote de 5gr",
      precioLingote: precio5,
      medidaBlister: "14,95 x 7,95 x 0,437mm",
      telefono: "900 373 629",
    },
    {
      id: 3,
      imagenLingote: lingote10,
      nombreLingote: "Lingote de 10gr",
      precioLingote: precio10,
      medidaBlister: "27,82 x 13,82 x 1,358mm",
      telefono: "900 373 629",
    },
    {
      id: 4,
      imagenLingote: lingote20,
      nombreLingote: "Lingote de 20gr",
      precioLingote: precio20,
      medidaBlister: "31,82 x 15,82 x 2,070mm",
      telefono: "900 373 629",
    },
    {
      id: 5,
      imagenLingote: lingote1oz,
      nombreLingote: "Lingote de 1oz",
      precioLingote: precio1Oz,
      medidaBlister: "31,82 x 15,82 x 3,219mm",
      telefono: "900 373 629",
    },
    {
      id: 6,
      imagenLingote: lingote50,
      nombreLingote: "Lingote de 50gr",
      precioLingote: precio50,
      medidaBlister: "41,82 x 23,82 x 2,610mm",
      telefono: "900 373 629",
    },
    {
      id: 7,
      imagenLingote: lingote100,
      nombreLingote: "Lingote de 100gr",
      precioLingote: precio100,
      medidaBlister: "41,82 x 23,82 x 5,220mm",
      telefono: "900 373 629",
    },
    {
      id: 8,
      imagenLingote: lingote250,
      nombreLingote: "Lingote de 250gr",
      precioLingote: precio250,
      medidaBlister: "sin blister",
      telefono: "900 373 629",
    },
    {
      id: 9,
      imagenLingote: lingote500,
      nombreLingote: "Lingote de 500gr",
      precioLingote: precio500,
      medidaBlister: "sin blister",
      telefono: "900 373 629",
    },
    {
      id: 10,
      imagenLingote: lingote1000,
      nombreLingote: "Lingote de 1000gr",
      precioLingote: precio1000,
      medidaBlister: "sin blister",
      telefono: "900 373 629",
    },
  ];
  return (
    <div className={styles.contenedorAmbosTablaLingotes}>
      <div className={styles.contenedorImagen}>
        <Image
          src={imagenMarcaLingotes}
          width={196}
          height={70}
          alt="Marca Lingotes"
        />
      </div>
      <div className={styles.contenedorTablas}>
        {arrayLingotes.map((lingote) => (
          <div key={lingote.id} className={styles.tabla}>
            <Image
              src={lingote.imagenLingote}
              width={170}
              height={124}
              alt=""
            />
            <p className={styles.nombreLingote}>{lingote.nombreLingote}</p>
            <p className={styles.precioLingote}>
              {!loading ? "Cargando..." : `${lingote.precioLingote}€`}
            </p>
            <div className={styles.detallesLingote}>
              <p>Oro fino 999,9</p>
              <p>
                <strong>Medidas del blister:</strong>
              </p>
              <p>{lingote.medidaBlister}</p>
            </div>
            <a className={styles.botonLlamar} href={`tel:${lingote.telefono}`}>
              RESERVAR
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablaLingotes;
