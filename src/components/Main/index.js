import styles from "./Main.module.css";

function Main({ imagem }) {
  return (
    <main
      className={styles.main}
      style={{ backgroundImage: `url('/images/banner-${imagem}.png')` }}
    >
      <h1>Songs Life</h1>
    </main>
  );
}

//usando js para puxar as imgs style={{ backgroundImage: URL('') }}

export default Main;
