import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Search.module.css";
import SearchVideoList from "../../components/SearchVideoList";
import videos from "../../json/adb.json";
import ScrolltoTop from "../../components/ScrolltoTop";
function Search() {
  return (
    <>
      <ScrolltoTop />
      <Header />
      <Container>
        <section className={styles.search}>
          <h2>Pesquisar</h2>
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
