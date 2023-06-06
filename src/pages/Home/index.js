import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Videofetch from "../../components/Videofetch";
import videos from "../../json/adb.json";
import ScrolltoTop from "../../components/ScrolltoTop";
import Category, { titles, filterCategory } from "../../components/Category";

import Carrosel from "../../components/Carrosel";

// se tem algo dentro do category como uma const e voce quer usala, use o export nela e import ela aqui  e função tambem

function Home() {
  //limpa o campo
  //let nomeDigitado = "";
  //passando como parametro ''event'' porque qual foi o tipo de parametro passado ? ''evento tip Click, OnChange" etc.
  // function buscarName(event) {
  //     // let nomeDigitado = event.target.value;
  //     //estou setando para a variavel NOME um novo valor.
  //     setNome(event.target.value);
  //   }
  //   //1* parametro nome da variavel - (aonde podemos acessar o conteudo)
  //   //2* parametro nome da função setter (função usada para atribuir ou alterar valores) modificar.
  //   //Hook = gancho -> useState - hook de estado
  //   const [nome, setNome] = useState("Yan"); //nao atribui nenhum valor no meu useState, somente no setter.
  //   //useState serve para principalmente controla o valor de uma variavel
  //   //criei um estado inicial no caso vazio, e alterei o estado setando um novo valor a ele no setNome que atribui para variavel nome
  //   console.log(nome);

  return (
    <>
      <ScrolltoTop />
      <Header />
      <Main imagem="home" />
      <Container>
        {/* //valor de category titulo, index(indice atual da lista começa com item 0 e vai te 1 porque sao 2 categorias) */}
        {/* vou percorrer o array, para cada, index, vai ter um novo componente category com cards. */}
        {titles.map((category, index) => (
          <Category key={index} category={category}>
            <Carrosel>
              {/* //nesta função nao me retorna o indice das categorias? 0 e 1 (2 elementos) pois é,  a cada titulo ele vai trazer os cards com id de cada 0 e 1 */}
              {filterCategory(index).map(({ id }) => {
                return <Card id={id} key={id} />;
              })}
            </Carrosel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
