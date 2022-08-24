import Link from "next/link";
import styles from '../styles/Header.module.css'


export default function MenuList() {
  return (
    <div className={styles.menulistContainer}>

    <Link href="" className={styles.menulistLinks}>City Host</Link>
    <Link href="" className={styles.menulistLinks}>Actividades</Link>
    <Link href="" className={styles.menulistLinks}>Gastronomía</Link>
    <Link href="" className={styles.menulistLinks}>Eventos</Link>
    </div>
    
  )
}

