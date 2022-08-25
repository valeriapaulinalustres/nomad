import Link from 'next/link'
import { useState, useContext } from "react";
import styles from '../styles/Footer.module.css'
import navbarContext from '../context/navbarContext';
import Image from 'next/image'

export default function Footer() {


  //-------------recibes footer from context------------------------
  const { footerItems, navbarItems } = useContext(navbarContext);
  //----------------------------------------------------------------

  return (
    <div>
      <section className={styles.footerFirstSection}>
        <div className={styles.footerDivs}>
          <Image src={footerItems.nomad} alt={footerItems.nomadAlt} width="80px" height="18px"></Image>
          <p className={styles.footerTextSeo}>{footerItems.text}</p>
          <nav className={styles.footerIconsContainer }>
          <a href={footerItems.youtubeSrc}><Image src={footerItems.youtubeIcon} alt={footerItems.youtubeAlt} width="30px" height="30px" className={styles.icons}></Image></a>
          <a href={footerItems.facebookSrc}><Image src={footerItems.facebookIcon} alt={footerItems.facebookAlt} width="30px" height="30px" className={styles.icons}></Image></a>
          <a href={footerItems.twitterSrc}><Image src={footerItems.twitterIcon} alt={footerItems.twitterAlt} width="30px" height="30px" className={styles.icons}></Image></a>
          <a href={footerItems.instagramSrc}><Image src={footerItems.instagramIcon} alt={footerItems.instagramAlt} width="30px" height="30px" className={styles.icons}></Image></a>
          </nav>
        </div>

        <div className={styles.footerDivs}>
          <h2>{footerItems.title}</h2>
          <h4>{footerItems.tel}</h4>
          <h4>{footerItems.mail}</h4>
         
        </div>
        <nav className={styles.footerDivs}>
          {navbarItems.map((element, index) => {
            return (
              <Link
                href={element.src}
                className={styles.footerNavLink}
                key={index}
              >{element.navName}
              </Link>)
          })}
        </nav>
      </section>
      <section className={styles.greeting}>
        <h2 className={styles.greetingText}>{footerItems.greeting}</h2>
      </section>
    </div>
  )
}

/*
 {footerItems.map((element, index) => {
            return (
              <Link
                href={element.src}
                className={styles.navbar}
                key={index}
              >{element.icon}
              </Link>)
          })}
          */
