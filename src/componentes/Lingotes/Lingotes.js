import Image from "next/image";
import styles from "./Lingotes.module.css";
import logoLingote from "../../../public/assets/logoLingote.png";
import TablaLingotes from "./tablaLingotes";

const Conversor = ({ data, loading }) => {
  return (
    <div className={styles.contenedorConversorBanderas}>
      <div className={styles.contenedorConversor}>
        <div className={styles.conversorTitulo}>
          <Image src={logoLingote} width={50} height={50} alt="Logo Divisa" />
          <div className={styles.conversorTexto}>
            <h2>Invertir en Oro</h2>
            <p>Da el paso e invierte en el oro</p>
          </div>
        </div>
        <TablaLingotes data={data} loading={loading} />
      </div>
    </div>
  );
};

export default Conversor;
