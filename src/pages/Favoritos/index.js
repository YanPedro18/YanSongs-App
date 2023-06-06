import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Favoritos.module.css";
import Card from "../../components/Card";
import VideoList from "../../components/VideoList";
import { newFavoritos } from "../../contexts/Favoritos";
import { useContext } from "react";
import ScrolltoTop from "../../components/ScrolltoTop";

function Favoritos() {
  const { favoritos } = useContext(newFavoritos);
  console.log(favoritos);

  return (
    <>
      <ScrolltoTop />
      <Header />
      <Container>
        <section className={styles.favoritos}>
          <h1>Lista de Favoritos</h1>
          {
            <VideoList
              videos={favoritos}
              emptyHeading={"Nao existe Favoritos ;("}
            />
          }
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favoritos;
{
  /* {favoritos.map((fav) => {
            return <Card id={fav.id} key={fav.id} />;
          })} */
}
