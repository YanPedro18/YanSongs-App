import styles from "./Videofetch.module.css";



       
function Videofetch ({videos}) {

    return (
        <>
        <section className={styles.props}> 
          {videos.map((video)=> {
            return <h1>{video.id}</h1>
          }) }
        </section>
          
        </>
    );
}
   


export default Videofetch;