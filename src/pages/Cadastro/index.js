import Header from "../../components/Header";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import ScrolltoTop from "../../components/ScrolltoTop";

function Cadastro() {
  return (
    <>
      <ScrolltoTop />
      <Header />
      <Container>
        <Form />
      </Container>
      <Footer />
    </>
  );
}

export default Cadastro;
