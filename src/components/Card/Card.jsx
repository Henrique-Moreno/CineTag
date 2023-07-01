import styles from './card.module.css';
import iconeFavoritar from './desfavoritar.png';

export default function Card({ id, titulo, capa }) {
  return (
    <article className={styles.container}>
      <img
        src={capa}
        alt={titulo}
        className={styles.capa}
      />
      <h2>{titulo}</h2>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </article>
  )
}
