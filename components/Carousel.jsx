import { useEffect, useState, useContext } from 'react'
import Progress from './Progress'
import styles from '../styles/Carousel.module.css'
import Image from 'next/image'
import navbarContext from '../context/navbarContext';

function Carousel() {

  const {  carouselItems, } = useContext(navbarContext);

  const [style, setStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0)

  //----------Progress bar------------------------------------
  let i = 0;
  let intervalID;

  useEffect(() => {
    fillCarouselIndicator();
    return () => clearInterval(intervalID)
    // al pasar foto hacer   fillCarouselIndicator();
  }, [])


  function fillCarouselIndicator() {

    clearInterval(intervalID);

    intervalID = setInterval(function () {
      if (i < 100) { i++; }

      const newStyle = {
        opacity: 1,
        width: `${i}%`
      }
      setStyle(newStyle);
    }, 50);

  }

  //---------Carousel------------------------------------
  const slideLength = carouselItems.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    console.log("p")
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }


  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
      fillCarouselIndicator()
    }
    return () => clear()
  }, [currentSlide])

  function clear() {
    clearInterval(slideInterval)
    clearInterval(intervalID)
  }

  //--------------------------------------------------------

  return (
    <>
      <div id="home">
        <div className={styles.arrowPrev} onClick={prevSlide}>{"<"}</div>
        <div className={styles.arrowNext} onClick={nextSlide}>{">"}</div>
        {carouselItems.map((el, index) => {
          return (
            <div className={index === currentSlide ? styles.slideCurrent : styles.slide} key={index}>
              {index === currentSlide && (
                <>
                  <Image src={el.img} width={4000} height={2000} alt={el.title} className={styles.carouselImg} />
                  <div className={styles.contentCarousel}>
                    <h2 className={styles.homeTitle}>{el.title}</h2>
                    <div className={styles.featuresContainer}>
                      <div className={styles.featuresContent}>
                        <p>{el.featuresnumberone}</p>
                        <p>{el.featuresone}</p>
                      </div>
                      <div className={styles.featuresContent}>
                        <p>{el.featuresnumbertwo}</p>
                        <p>{el.featurestwo}</p>
                      </div>
                      <div className={styles.featuresContent}>
                        <p>{el.featuresnumberthree}</p>
                        <p>{el.featuresthree}</p>
                      </div>
                    </div>
                  </div>
                </>
              )
              }
            </div>
          )
        })}
      </div>
      <Progress done={style} />
    </>
  )
}

export default Carousel