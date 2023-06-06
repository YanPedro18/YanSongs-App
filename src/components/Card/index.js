import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFav from "./favorite.png";
import iconUnfav from "./unfavorite.png";
import { useFavoritos } from "../../contexts/Favoritos";

function Card({ id }) {
  const { favoritos, addFavorito } = useFavoritos();
  const isFavorito = favoritos.some((fav) => fav.id === id);
  const icone = !isFavorito ? iconFav : iconUnfav;

  return (
    <section className={`${styles.card}`}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
          className={styles.capa}
        />
      </Link>
      <figure className={styles.icons}>
        <img src={icone} alt="icone" onClick={() => addFavorito({ id })} />
      </figure>
    </section>
  );
}

export default Card;

/* //estou passando a rota que quando o usuario clicar no video o url externo,
            vai gerar um rota dentro de watch que sera o id do video dinamicamente, tambem passando um tepmplate string com crasses,
            para realmente colocar a rota eo ID dinamico. */

// useEffect(() => {
//   console.log("useEffect executed");
//   const sr = ScrollReveal();
//   sr.reveal(".card", {
//     distance: "50px",
//     duration: 600,
//     easing: "cubic-bezier(0.175, 0.885, 0.32, 3.275)",
//     interval: 400,
//     delay: 200,
//     origin: "left",
//     reset: true,
//   });
// }, []);
