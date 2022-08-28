import Link from "next/link";
import styles from '../styles/Header.module.css'


export default function MenuList() {
  return (
    <div className={styles.menulistContainer}>
      <Link href="" >
        <h4 className={styles.menulistLinks}>City Host</h4>
      </Link>
      <Link href="" >
        <h4 className={styles.menulistLinks}>Actividades</h4>
      </Link>
      <Link href="" >
        <h4 className={styles.menulistLinks}>Gastronomía</h4>
      </Link>
      <Link href="" >
        <h4 className={styles.menulistLinks}>Eventos</h4>
      </Link>
    </div>
  )
}

