import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Error404 from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favoritos from "./pages/Favoritos";
import FavoritosProvider from "./contexts/Favoritos";
import Cadastro from "./pages/Cadastro";

function AppRoutes() {
  return (
    <BrowserRouter>
      {/* //o favoritosProvider tem como children, todas as rotas */}
      <FavoritosProvider>
        <Routes>
          {/* //iremos passar 2 PROPS AQUI */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="*" element={<Error404 />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Favoritos" element={<Favoritos />}></Route>
          <Route path="/Cadastro" element={<Cadastro />}></Route>
        </Routes>
      </FavoritosProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;

//* asterisco seria o seletor GLOBAL
// o / seria a RAIZ do diretorio, do site, no caso a pagina aonde começa o site
