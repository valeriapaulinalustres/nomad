import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { useContext, useEffect } from 'react'
import navbarContext from '../context/navbarContext';
import Slider from '../components/Slider';
import { useRouter } from 'next/router';
import Carousel from '../components/Carousel';


export default function Home(props) {

  //---------send navbar, footer and home to context and brings homeItems-------------
  const {
    setNavbarItems,
    setFooterItems,
    homeItems,
    setHomeItems,
    setHotelsItems,
    setSliderItems,
    setHeaderItems,
    setCarouselItems,
  } = useContext(navbarContext);


  const router = useRouter()

  useEffect(() => {
    setNavbarItems(props.nav)
    setFooterItems(props.footer)
    setHomeItems(props.home)
    setHotelsItems(props.hotels)
    setSliderItems(props.slider)
    setHeaderItems(props.header)
    setCarouselItems(props.carousel)

  }, [router])


  return (

    <Layout headTitle="Nomad" headDescription="Working around the world" >

      <div className={styles.homeContainer}>
        <Carousel />
{/* Description section */}
        <section className={styles.homeSecondSection} id="about">
          <p>{homeItems.text1}<br />{homeItems.text2}<span>{homeItems.text3}</span><br />{homeItems.text4}</p>
        </section>
{/* Old Carousel section */}
        {/* <section className={styles.homeThirdSection}>
          <h2 className={styles.sliderTitle}>{homeItems.slidertitle}</h2>
          <p className={styles.sliderText}>{homeItems.slidertext}</p>
          <Slider />
        </section> */}
{/* Gallery section */}
<section className={styles.homeGallerySection} id="gallery">
  <p>Galería de fotos</p>
</section>
{/* Contact section */}
<section className={styles.homeFourthSection} id="contact">
<p>contacto</p>
</section>


      </div>
    </Layout>
  )
}

//----------SSR-----------------------------------------
//locale changes language
export async function getServerSideProps({ locale }) {

  //SSR navbar
  let data = await fetch(`https://nomad-kappa.vercel.app/api/nav/${locale}`)
  let nav = await data.json()

  //SSR header
  let dataHeader = await fetch(`https://nomad-kappa.vercel.app/api/header/${locale}`)
  let header = await dataHeader.json()

  //SSR footer
  let dataFooter = await fetch(`https://nomad-kappa.vercel.app/api/footer/${locale}`)
  let footer = await dataFooter.json()

  //SSR Home
  let dataHome = await fetch(`https://nomad-kappa.vercel.app/api/home/${locale}`)
  let home = await dataHome.json()

  //SSR hotels availability
  let dataHotels = await fetch(`https://nomad-kappa.vercel.app/api/hotels/availability/${locale}`)
  let hotels = await dataHotels.json()


  //SSR slider
  let dataSlider = await fetch(`https://nomad-kappa.vercel.app/api/slider/${locale}`)
  let slider = await dataSlider.json()

  //SSR carousel
  let dataCarousel = await fetch(`https://nomad-kappa.vercel.app/api/carousel/${locale}`)
  let carousel = await dataCarousel.json()


  return {
    props: { nav, footer, home, hotels, slider, header, carousel }, // passed to the page component as props
  }
}
//--------------------------------------------------------------

/*
para deploy https://nomad-kappa.vercel.app/
para localhost http://localhost:3000/
*/