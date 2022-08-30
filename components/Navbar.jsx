import Link from 'next/link'
import { useContext } from "react";
import styles from '../styles/Layout.module.css'
import navbarContext from '../context/navbarContext';


export default function Navbar(props) {

  //-------------recibes navbar from contexts------------------------
  const { navbarItems } = useContext(navbarContext);

  //----------------------------------------------------------------

  return (
    <div className={styles.navbarContainer}>
      {navbarItems.map((element, index) => {
        if (element.type == "link") {
          return (
            <Link
              href={element.src}
              className={styles.navbarLink}
              key={index}
            >
              <h3 className={styles.navbarLink}>
                {element.navName}
              </h3>
            </Link>
          )
        } else {
          return (
            <h3
              onMouseEnter={() => props.setMenu(true)}
              onMouseLeave={() => props.setMenu(false)}
              className={styles.navbarLink}
              key={index}
            >
              {element.navName}
            </h3>
          )
        }
      })}
    </div>
  )
}
