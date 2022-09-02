import Link from 'next/link'
import { useContext } from "react";
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
          {footerItems.nomad &&
          <div  className={styles.nomad}>
<Image src={footerItems.nomad}
              alt={footerItems.nomadAlt}
              width="120px"
              height="20px"
               />
          </div>
          }
          <p className={styles.footerTextSeo}>{footerItems.text}</p>
          <nav className={styles.footerIconsContainer}>
            {footerItems.youtubesrc &&
              <Link href={footerItems.youtubesrc}>
                {footerItems.youtubeicon &&
                  <Image src={footerItems.youtubeicon}
                    alt={footerItems.youtubealt}
                    width="30px"
                    height="30px"
                    className={styles.icons} />
                }
              </Link>
            }
            {footerItems.facebooksrc &&

              <Link href={footerItems.facebooksrc}>
                {footerItems.facebookicon &&
                  <Image src={footerItems.facebookicon}
                    alt={footerItems.facebookalt}
                    width="30px"
                    height="30px"
                    className={styles.icons} />
                }
              </Link>
            }
            {footerItems.twittersrc &&
              <Link href={footerItems.twittersrc}>
                {footerItems.twittericon &&
                  <Image src={footerItems.twittericon}
                    alt={footerItems.twitteralt}
                    width="30px"
                    height="30px"
                    className={styles.icons} />
                }
              </Link>

            }
            {footerItems.instagramsrc &&
              <Link href={footerItems.instagramsrc}>
                {footerItems.instagramicon &&
                  <Image src={footerItems.instagramicon}
                    alt={footerItems.instagramalt}
                    width="30px"
                    height="30px"
                    className={styles.icons} />
                }
              </Link>

            }

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
                key={index}
              >
                <h3 className={styles.footerNavLink}>{element.navName}</h3>
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
