import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MenuList from './MenuList';
import Reserve from './Reserve';
import styles from '../styles/Header.module.css'
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';


function Header() {

  const [menu, setMenu] = useState(false)
  const [reserve, setReserve] = useState(false)
  const [show, setShow] = useState(true)

  //---reserve button animation---
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#bc0084" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ae15d4" });
  };

  //---Header & scroll----

  useEffect(() => {

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setShow(false)
      } else {
        setShow(true)
      }
      lastScrollTop = st;
    }, false);

  }, [])



  return (
    <>
      {show &&
        <div className={styles.headerContainerFixed} id="top">
          <a href="/" className={styles.headerLogo}>
            <Image src="/img/logo.png" width="100px" height="18px" alt="logo" />
          </a>
          <div className={styles.headerContainer}>
            <div className={styles.navContainer}>
              <Navbar menu={menu} setMenu={setMenu} />
              <h3 className={styles.headerLanguage}>English</h3>
              <Link href="#top">
              <button
                onClick={() => setReserve(!reserve)}
                className={styles.headerButton}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}>
                <div className={styles.bagIcon}>
                  <Image src="/img/bag.png" width="20px" height="20px" alt="bag"></Image>
                </div>
                <h4 className={styles.btnSmile} >Reservar</h4>
              </button>
              </Link>            
            </div>
            {menu && <MenuList />}
            {reserve && <Reserve setReserve={setReserve} />}
          </div>
        </div>
      }
      
    </>
  )
}

export default Header
