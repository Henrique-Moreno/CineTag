import { Link } from 'react-router-dom'
import styles from './header.module.css'
import logo from './Logo-cinetag-branco 1.png'
import HeaderLink from '../HeaderLink'

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt='logo da empresa' />
        </Link>

        <nav>
          <HeaderLink url="/">
            Home
          </HeaderLink>
          <HeaderLink url="/favoritos">
            Favoritos
          </HeaderLink>
        </nav>
      </header>
    </div>
  )
}
