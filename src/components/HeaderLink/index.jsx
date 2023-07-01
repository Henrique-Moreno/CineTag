import { Link } from 'react-router-dom';
import styles from './headerLink.module.css';


export default function HeaderLink({url, children}) {
  return (
    <div>
      <Link to={url} className={styles.link}>
        {children}
      </Link>
    </div>
  )
}
