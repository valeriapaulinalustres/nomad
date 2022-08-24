import images from '../exports/images'
import { motion } from 'framer-motion'
import styles from '../styles/Slider.module.css'
import Image from 'next/image'
import navbarContext from '../context/navbarContext'
import { useContext } from 'react'

export default function Slider() {


  //-------------recibes slider from context------------------------
  const { sliderItems} = useContext(navbarContext);
  //----------------------------------------------------------------

/*
    const logos = [
        {id: 1, img:"/img/cooking.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "URBAN", text:"", services:"", icon1: "", icon2:"", icon3:""},
        {id:2, img:"/img/friends.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "Tribe", text:"Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar", services: "Servicios de este hotel", icon1: "/img/bed.png", icon2:"/img/restaurante.png", icon3:"/img/carousel.png", alt1:"cama", alt2:"restaurante", alt3:"carousel"},
        {id:3, img:"/img/family.jpg", icon: "/img/maps.svg", city: "Arequipa", title: "Family", text:"", services: "", icon1: "", icon2:"", icon3:""}
    ]
    */
    

    return (
        <motion.div className={styles.sliderContainer}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -800 }} className={styles.slider}>
                {sliderItems.map((el, index) => (
                    <motion.div className={styles.sliderImgContainer} key={index}>
                        
                        <Image src={el.img} width="1000px" height="666.66px" alt={el.title} className={styles.sliderImg}></Image>
                        
                       
                        <div className= {styles[`logo${index}`]}>
                            <div className={styles.iconTitle}>
                                <Image src={el.icon} width="20px" height="20px" className={styles.mapsIcon} fill="#fff"></Image>
                                <p>{el.city}</p>
                            </div>
                            
                            <h2>{el.title}</h2>
                            <p className={styles.text}>{el.text}</p>
                            <p className={styles.services}>{el.services}</p>
                            <div>
                                <Image src={el.icon1} width="20px" height="20px" alt={el.alt1} className={styles.servicesIcons}></Image>
                                <Image src={el.icon2} width="20px" height="20px" alt={el.alt2} className={styles.servicesIcons}></Image>
                                <Image src={el.icon3} width="20px" height="20px" alt={el.alt3} className={styles.servicesIcons}></Image>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}
