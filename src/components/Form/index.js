import { useState } from "react";
import { titles } from "../Category";
import styles from "./Form.module.css";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  //array vazio estado atual
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  //função para envio dos valores do formulario
  function onSave(e) {
    e.preventDefault();
    if (!category || category === "-") {
      setError("ERRO: Por favor selecione uma categoria!");

      //ele dara um aviso e ira retornar a função ou seja, os blocos de baixo nao serao executados
      return;
    } else {
      setError("");
    }

    function valideUrl(url) {
      const regex =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

      if (!regex.test(url) || url.length < 43) {
        setError("ERRO: URL inválida!");
        return false;
      } else {
        return url.substring(32, 43); // id do video
      }
    }

    //objeto com url e category, um objeto só assim para salvar 2 valores
    const newVideo = { url, category };

    //estado antigo(definido com array vazio), e estado novo que vai ser colocado no final do array
    //spread ... serve para pegar um array que existe e atribuir um novo valor a este array
    setVideos([...videos, newVideo]);
    console.log(videos);

    //salvando o meu spreadarray antigo, com o novo valor dos campos, transformando em JSON e armazenando..
    localStorage.setItem("videoss", JSON.stringify([...videos, newVideo]));

    //limpando form
    setUrl("");
    setCategory("");
  }
  return (
    <>
      <section className={styles.forms}>
        <h2>Cadastro de vídeo</h2>
        {/* //onsubmit para enviar os dados e rodar função */}
        <form onSubmit={onSave}>
          <div>
            <label htmlFor="">Url do Vídeo</label>
            <input
              type="text"
              placeholder="Digite a Url do vídeo"
              required={true}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              minLength="43"
              maxLength="43"
            />
          </div>

          <div>
            <label htmlFor="">Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name=""
              required={true}
              id=""
            >
              <option value="-">Selecione uma Categoria</option>
              {titles.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div>
            <button>Cadastrar!</button>
            <div>{error}</div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
