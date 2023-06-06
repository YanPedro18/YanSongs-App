import styles from "./PageNotFound.module.css";
import error from "./error.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

function PageNotFound() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <section className={styles.container}>
        <h1>Pagina não encontrada ;(</h1>
        <img src={error} alt="Logo de Página não localizada" />

          <div>
            <h2>User Profile</h2>
            <div>User ID: {id}</div>
          </div>
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
