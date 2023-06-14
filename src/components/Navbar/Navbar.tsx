import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.list}>
        <li className={styles.item}>
            <Link to='/card'>Card</Link>
        </li>
        <li className={styles.item}>
            <Link to='/form-auth'>Form-Auth</Link>
        </li>
        <li className={styles.item}>
            <Link to='/condicional'>Condicional</Link>
        </li>
    </ul>
  )
}
