import styles from "./VideoList.module.css";
import Card from "../Card";

//o componente "videoList" recebe um objeto chamado "props", que contém as propriedades "videos" e "children"
//estamos dizendo ao JavaScript para extrair automaticamente os valores das propriedades "videos" e "children" do objeto "props
//e atribuí-los a duas variáveis separadas, que são chamadas de "videos" e "children".
function VideoList({ videos, emptyHeading }) {
  //quantos index json tem? 6
  const count = videos.length;
  //esse parametro serve pra nada, só pra nao deixar vatiavel vazio pois eu mutei ela
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "videos" : "video";
    heading = `${count} ${noun}`;
  }
  return (
    <>
      <h2>{heading}</h2>
      <section className={styles.videolist}>
        {/* //eu estou criando 1 card, a cada 1 id do json, chave do video */}
        {videos.map((video) => {
          return <Card id={video.id} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default VideoList;
