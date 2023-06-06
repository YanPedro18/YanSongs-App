import styles from "./Category.module.css";
import videos from "../../json/adb.json";

export const titles = [
  "Indie",
  "Sad-Songs"
]
// \\nesta função estou filtrando o JSON, e comparando os valores com um Array, depois
//   usando o parametro 'indice' que siginifica cada 'valor que tem no indice json', fazendo um map, e retornando os ids
//   dos videos com base no filtro
export function filterCategory (indice) {
  return videos.filter(category => category.category === titles[indice])
}
console.log(filterCategory)

// trazendo um conteudo filho
function Category({ category, children }) {
  return (
    <section className={styles.category}>
      <h2>{category}</h2>
      
      <div>
        
        {children}
        {/* isso aqui é props */}

      </div>
    </section>
  );
}

export default Category;
//  se usar os colchets na função precisa usar o return
// {/* neste codigo html/js estou fazendo um (map no json, para jogar todos os resultados na tag <card> que é meu elemento) */}
