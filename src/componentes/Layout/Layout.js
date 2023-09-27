import BotonLlamarFijo from "../BotonLlamarFijo/BotonLlamarFijo";
import BotonesLlamar from "../BotonesLlamarWT/BotonesLlamar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./layout.module.css";

export default function Layout({ children, ciudad, telefono }) {
  return (
    <>
      <main className={styles.contenedor}>
        <Header nombreCiudad={ciudad?.acf?.ciudad_landing} />
        {children}
        <Footer />
        {ciudad?.acf?.tienda === "" ? (
          <BotonLlamarFijo ciudad={ciudad} telefono={telefono} />
        ) : (
          <BotonesLlamar ciudad={ciudad} />
        )}
      </main>
    </>
  );
}
