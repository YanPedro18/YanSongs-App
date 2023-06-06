import VideoList from "../VideoList";
import styles from "./SearchList.module.css";
import videos from "../../json/adb.json";
import { useEffect, useState } from "react";
import Loader from "../Loader";

function SearchVideoList(event) {
  //desafio fazer um filtro de pesquisa com react use state, ou seja pegar valor do input e filtrar os videos com base nisso!
  const [searchText, setSearchText] = useState("");

  //CRIEI UM FILTRO DE INPUT COM BASE NO COMPONENTE CARD QUE VIRO VIDEO LIST DEPOIS FILTRO SEARCHVIDEO LIST PRA DEPOIS RENDERIZAR NO SEARCH

  //peguei meu json, usei o filtro para me trazer, apenas os json.name, se contiver(includes) o meu estado(searchtext) valor do input em tempo real
  const filtervideos = videos.filter((video) => {
    //se existir o valor do meu input === ao valor do json.name, vai me retorna somente o video do filtro, e transforma tanto o texto do json tanto a pesquisa do user em minusculo.
    return (
      video.name.toLowerCase().includes(searchText.toLowerCase()) ||
      video.category.toLowerCase().includes(searchText.toLowerCase())
    );
    //se a pesquisa buscada estiver inclusa na minha lista de names ele vai exibir o card
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 900);
  }, []);
  return (
    <section className={styles.searchvideoslist}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText} //aqui estou armazenando(setando) o valor do input em tempo real, na variavel searchText
        onChange={(event) => setSearchText(event.target.value)}
      />
      {/* 
      //eu coloquei componente inteiro num {} e fiz se loading(meu componente import) existir renderiza ele se NAO, renderiza o componente Video List */}
      {loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={filtervideos}
          emptyHeading={`sem videos sobre "${searchText}"`}
        />
      )}
    </section>
  );
}

export default SearchVideoList;
