import './home.module.css';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo/Titulo';
import Card from '../../components/Card/Card';

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <Banner />
        <Titulo>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <Card
          id='1'
          titulo='Um componente no espaço'
          capa='https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img1.png'
        />
      </section>
      <Footer />
    </main>
  )
}
