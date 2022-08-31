import { motion } from 'framer-motion'
import styles from '../styles/Slider.module.css'
import Image from 'next/image'
import navbarContext from '../context/navbarContext'
import { useContext } from 'react'

export default function Slider() {

    //-------------recibes slider from context------------------------
    const { sliderItems } = useContext(navbarContext);
    //----------------------------------------------------------------


    return (
        <motion.div className={styles.sliderContainer}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -890 }} className={styles.slider}>
                {sliderItems.map((el, index) => (
                    <motion.div className={styles.sliderImgContainer} key={index}>


                        {/*----Slider images---- */}
                        <Image
                            src={el.img}
                            width="1000px"
                            height="666.66px"
                            alt={el.title}
                            className={styles.sliderImg}
                        />

                        {/*----Slider tags---- */}
                        <div className={styles[`logo${index}`]}>
                            <div className={styles.iconTitle}>
                                <Image
                                    src={el.icon}
                                    width="20px"
                                    height="20px"
                                    className={styles.mapsIcon}
                                />
                                <p>{el.city}</p>
                            </div>

                            <h2 className={styles[`title${index}`]}>{el.title}</h2>
                            {el.text && <p className={styles.text}>{el.text}</p>}
                            {el.services && <p className={styles.services}>{el.services}</p>}
                            {el.icon1 &&
                                <div className={styles.servicesIconsContainer}>
                                    <div className={styles.servicesIcons}>
                                        <Image
                                            src={el.icon1}
                                            width="20px"
                                            height="20px"
                                            alt={el.alt1}
                                        />
                                    </div>
                                    <div className={styles.servicesIcons}>
                                        <Image
                                            src={el.icon2}
                                            width="20px"
                                            height="20px"
                                            alt={el.alt2}
                                        />
                                    </div>
                                    <div className={styles.servicesIcons}>
                                        <Image
                                            src={el.icon3}
                                            width="20px"
                                            height="20px"
                                            alt={el.alt3}
                                        />
                                    </div>
                                </div>
                            }
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}
