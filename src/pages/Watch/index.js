import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";
import Container from "../../components/Container";
import { useParams } from "react-router-dom";
import videos from "../../json/adb.json";
import ScrolltoTop from "../../components/ScrolltoTop";

function Watch() {
  //use params serve somente para passar o ID do json para a URL externa para levar a uma rota com componente
  const params = useParams();
  const video = videos.find((videos) => {
    return videos.id === params.id;
  });
  console.log(video);
  return (
    <>
      <ScrolltoTop />
      <Header />
      <Container>
        <section className={styles.watch}>
          <h1>{videos.name}</h1>
          <figure className={styles.fig}>
            <iframe
              width="1060"
              height="615"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
