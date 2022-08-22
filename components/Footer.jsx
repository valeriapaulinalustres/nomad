import Link from 'next/link'
import { useState, useContext } from "react";
import styles from '../styles/Layout.module.css'
import navbarContext from '../context/navbarContext';

export default function Footer() {


  //-------------recibes footer from context------------------------
  const { footerItems, navbarItems } = useContext(navbarContext);
  //console.log(footerItems)
  //----------------------------------------------------------------
console.log(footerItems.youtubeSrc)

  return (
    <div>
      <section>
        <div>
          <img src={footerItems.nomad} alt={footerItems.nomadAlt}></img>
          <p>{footerItems.text}</p>
          <nav>
        
          </nav>
        </div>
        <div>
          <h2>{footerItems.title}</h2>
          <h3>{footerItems.tel}</h3>
          <h3>{footerItems.mail}</h3>
          <nav>
          <a href={footerItems.youtubeSrc}><img src={footerItems.youtubeIcon} alt={footerItems.youtubeAlt}></img></a>
          <a href={footerItems.facebookSrc}><img src={footerItems.facebookIcon} alt={footerItems.facebookAlt}></img></a>
          <a href={footerItems.twitterSrc}><img src={footerItems.twitterIcon} alt={footerItems.twitterAlt}></img></a>
          <a href={footerItems.instagramSrc}><img src={footerItems.instagramIcon} alt={footerItems.instagramAlt}></img></a>
          </nav>
        </div>
        <nav>
          {navbarItems.map((element, index) => {
            return (
              <Link
                href={element.src}
                className={styles.navbar}
                key={index}
              >{element.navName}
              </Link>)
          })}
        </nav>
      </section>
      <section>
        <h2>{footerItems.greeting}</h2>
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
