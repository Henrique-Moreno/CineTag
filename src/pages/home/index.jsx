import styles from './home.module.css';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo/Titulo';
import Card from '../../components/Card/Card';
import videos from '../../json/db.json';

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
        <Titulo>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <section className={styles.container}>
          {videos.map((video) => {
            return (
              <Card {...video} key={video.id} />
            )
          })}
        </section>
      </section>
    </main>
  )
}
