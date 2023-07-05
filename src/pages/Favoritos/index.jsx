import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo/Titulo'
import styles from './favoritos.module.css'

export default function Favoritos() {
  return (
    <div>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus Favoritos</h1>
        <section className={styles.container}>
            
        </section>
      </Titulo>
    </div>
  )
}
