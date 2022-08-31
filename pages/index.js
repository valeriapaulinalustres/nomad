import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { useContext, useEffect } from 'react'
import navbarContext from '../context/navbarContext';
import Slider from '../components/Slider';
import {useRouter} from 'next/router';



export default function Home(props) {

  //---------send navbar, footer and home to context and brings homeItems-------------
  const { setNavbarItems, setFooterItems, homeItems, setHomeItems, setHotelsItems, setSliderItems, setHeaderItems } = useContext(navbarContext);

  
  const router = useRouter()
  
  useEffect(() => {
    setNavbarItems(props.nav)
    setFooterItems(props.footer)
    setHomeItems(props.home)
    setHotelsItems(props.hotels)
    setSliderItems(props.slider)
    setHeaderItems(props.header)

  }, [router])


  return (

    <Layout title="Nomad" description="Working around the world" >
      <div className={styles.homeContainer}>
        <section className={styles.homeFirstSection}>
          <div className={styles.homeFirstSectionContent}>
            <h1 className={styles.homeTitle}>{homeItems.title}</h1>
            <div className={styles.featuresContainer}>
              <div className={styles.featuresContent}>
                <p>{homeItems.featuresnumberone}</p>
                <p>{homeItems.featuresone}</p>
              </div>
              <div className={styles.featuresContent}>
                <p>{homeItems.featuresnumbertwo}</p>
                <p>{homeItems.featurestwo}</p>
              </div>
              <div className={styles.featuresContent}>
                <p>{homeItems.featuresnumberthree}</p>
                <p>{homeItems.featuresthree}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.homeSecondSection} >
          <p>{homeItems.text1}<br />{homeItems.text2}<span>{homeItems.text3}</span><br />{homeItems.text4}</p>
        </section>

        <section className={styles.homeThirdSection}>
          <h2 className={styles.sliderTitle}>{homeItems.slidertitle}</h2>
          <p className={styles.sliderText}>{homeItems.slidertext}</p>
          <Slider />
        </section>

      </div>

    </Layout>
  )
}

//----------SSR-----------------------------------------
//locale changes language
export async function getServerSideProps({locale}) {

  //SSR navbar
  let data = await fetch(`http://localhost:3000/api/nav/${locale}`)
  let nav = await data.json()

  //SSR header
  let dataHeader = await fetch(`http://localhost:3000/api/header/${locale}`)
  let header = await dataHeader.json()

  //SSR footer
  let dataFooter = await fetch(`http://localhost:3000/api/footer/${locale}`)
  let footer = await dataFooter.json()

  //SSR Home
  let dataHome = await fetch(`http://localhost:3000/api/home/${locale}`)
  let home = await dataHome.json()

  //SSR hotels availability
  let dataHotels = await fetch(`http://localhost:3000/api/hotels/availability/${locale}`)
  let hotels = await dataHotels.json()


  //SSR slider
  let dataSlider = await fetch(`http://localhost:3000/api/slider/${locale}`)
  let slider = await dataSlider.json()

  return {
    props: { nav, footer, home, hotels, slider, header }, // passed to the page component as props
  }
}
//--------------------------------------------------------------
