import { createContext, useContext, useState } from "react";

export const newFavoritos = createContext();

newFavoritos.displayName = "MeusFavoritos";

export default function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <newFavoritos.Provider value={{ favoritos, setFavoritos }}>
      {children}
    </newFavoritos.Provider>
  );
}

export function useFavoritos() {
  const { favoritos, setFavoritos } = useContext(newFavoritos);

  //como parametro meu novo video
  function addFavorito(video) {
    //passei numa const
    const { id } = video;
    //setei um novo estado, que vai comparar se o novo id a ser adicionado na lista é igual ao id da lista
    setFavoritos((prevFavoritos) => {
      if (prevFavoritos.some((fav) => fav.id === id)) {
        //retorno um filtro da minha nova lista vendo, se meu novo id adicionado é diferente do id adicionado
        return prevFavoritos.filter((fav) => fav.id !== id);
      } else {
        return [...prevFavoritos, video];
      }
    });
  }

  return {
    favoritos,
    addFavorito,
  };
}
