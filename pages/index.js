import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useContext, useEffect } from 'react'
import navbarContext from '../context/navbarContext';
import Slider from '../components/Slider';

//import Image from 'next/image'

export default function Home(props) {


  //---------send navbar, footer and home to context and brings homeItems-------------
  const { setNavbarItems, setFooterItems, homeItems, setHomeItems, setHotelsItems, setSliderItems } = useContext(navbarContext);


  useEffect(() => {
    setNavbarItems(props.nav)
    setFooterItems(props.footer)
    setHomeItems(props.home)
    setHotelsItems(props.hotels)
    setSliderItems(props.slider)
  }, [])

  //-------------------------------------------

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

        <section className={styles.homeSecondSection}>
          <p >{homeItems.text1}<br />{homeItems.text2}<span>{homeItems.text3}</span><br />{homeItems.text4}</p>
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

export async function getServerSideProps(context) {

  //SSR navbar
  let data = await fetch('http://localhost:3000/api/nav')
  let nav = await data.json()

  //SSR footer
  let dataFooter = await fetch('http://localhost:3000/api/footer')
  let footer = await dataFooter.json()

  //SSR footer
  let dataHome = await fetch('http://localhost:3000/api/home')
  let home = await dataHome.json()

  //SSR hotels availability
  let dataHotels = await fetch('http://localhost:3000/api/hotels/availability')
  let hotels = await dataHotels.json()


  //SSR slider
  let dataSlider = await fetch('http://localhost:3000/api/slider')
  let slider = await dataSlider.json()

  return {
    props: { nav, footer, home, hotels, slider }, // passed to the page component as props
  }
}
//--------------------------------------------------------------
