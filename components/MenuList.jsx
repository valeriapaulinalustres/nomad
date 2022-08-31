import Link from "next/link";
import styles from '../styles/Header.module.css';
import navbarContext from '../context/navbarContext';
import { useContext } from "react";


export default function MenuList() {


  //-------------recibes footer from context------------------------
  const { headerItems } = useContext(navbarContext);
  //----------------------------------------------------------------
  console.log(headerItems)

  return (
    <div className={styles.menulistContainer}>
      <Link href="" >
        <h4 className={styles.menulistLinks}>
          {headerItems.menuCity}
        </h4>
      </Link>
      <Link href="" >
        <h4 className={styles.menulistLinks}>
          {headerItems.menuActivities}
        </h4>
      </Link>
      <Link href="" >
        <h4 className={styles.menulistLinks}>
          {headerItems.menuGastronomy}
        </h4>
      </Link>
      <Link href="" >
        <h4 className={styles.menulistLinks}>
          {headerItems.menuEvents}
        </h4>
      </Link>
    </div>
  )
}

