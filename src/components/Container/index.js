import styles from "./Container.module.css";

function Container({ children }) {

    return (
        <section className={styles.container}>
            {children}
        </section>
    );
}




export default Container;

//children recebe um parametro que é filho do componente
//children é um parametro filho do meu componente container

//esse container vai receber qualquer filho aqui dentro