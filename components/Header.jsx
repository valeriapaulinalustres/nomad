import { useState } from 'react';
import { Link } from 'next/link';
import Navbar from './Navbar';
import MenuList from './MenuList';
import Reserve from './Reserve';
import styles from '../styles/Header.module.css'
import Image from 'next/image'


function Header() {

  const [menu, setMenu] = useState(false)
  const [reserve, setReserve] = useState(false)

  return (
    <div >
     
        <a href="/" className={styles.headerLogo}>
          <Image src="/img/logo.png" width="100px" height="18px" alt="logo" />
        </a>
     

      <div className={styles.headerContainer}>
        <div className={styles.navContainer}>
          <Navbar menu={menu} setMenu={setMenu} />
          <h3 className={styles.headerLanguage}>English</h3>
          <button onClick={() => setReserve(!reserve)} className={styles.headerButton}>
            <div className={styles.bagIcon}>
              <Image src="/img/bag.png" width="20px" height="20px" alt="bag"></Image>
            </div>
            <h4 className={styles.btnSmile}>Reservar</h4>
          </button>
        </div>
        {menu && <MenuList />}
        {reserve && <Reserve setReserve={setReserve} />}
      </div>

    </div>


  )
}

export default Header
