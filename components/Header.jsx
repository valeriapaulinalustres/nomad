import { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar';
import MenuList from './MenuList';
import Reserve from './Reserve';
import styles from '../styles/Header.module.css'
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import navbarContext from '../context/navbarContext';
import { useRouter } from 'next/router'


function Header() {

  const [menu, setMenu] = useState(false)
  const [reserve, setReserve] = useState(false)
  const [show, setShow] = useState(true)

  //-------------recibes footer from context------------------------
  const { headerItems } = useContext(navbarContext);
  //----------------------------------------------------------------


  //---change Language------------

  const router = useRouter()


  function handleLanguage() {
    const language = router.locale == "es" ? "en" : "es"
    router.push(router.pathname, router.pathname, {
      locale: language
    })
  }

  //---reserve button animation---
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#AA2275" });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#17A3AB" });
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
          <div className={styles.headerLogo}>
            <Link href="/" >
              <Image src={headerItems.nomad} width="100px" height="18px" alt="logo" />
            </Link>
          </div>

          <div className={styles.headerContainer}>
            <div className={styles.navContainer}>
              <Navbar menu={menu} setMenu={setMenu} />
              <h3 className={styles.headerLanguage} onClick={handleLanguage}>{headerItems.language}</h3>
              <Link href="#top">
                <button
                  onClick={() => setReserve(!reserve)}
                  className={styles.headerButton}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}>
                  <div className={styles.bagIcon}>
                    <Image src={headerItems.bagIcon} width="20px" height="20px" alt="bag" />
                  </div>
                  <h4 className={styles.btnSmile} >{headerItems.reserve}</h4>
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
