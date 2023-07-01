import styles from './banner.module.css';
import bannerHome from '../../assets/Banner Home.png'

export default function Banner({assets}) {
  return (
    <div className={styles.capa}>
      <img src={bannerHome} alt="banner" />
    </div>
  )
}
