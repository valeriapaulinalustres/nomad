import navbarContext from '../context/navbarContext';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/Reserve.module.css'
import Image from 'next/image'

export default function Reserve({setReserve}) {

    const { hotelsItems } = useContext(navbarContext);

    const [classChange, setClassChange] = useState(0)

    function mouseEnter (e){

       
            setClassChange(e.target.id)

    }

    function mouseLeave (){
        setClassChange(0)
    }

    return (
        <div className={styles.reserveContainer}>
            <div className={styles.reserveTitle}>
            <h2>Reservar</h2>
            <p onClick={()=>setReserve(false)} className={styles.reserveClose}>x</p>
            </div>
           <div className={styles.hotelsContainer}>
           {hotelsItems.map((element, index) => {
                if (element.availabilty) {
                    return (
                        <section key={index}  className={styles.hotelContainer}>
                            <div className={classChange == 0 ? styles.inicioImg : styles.imgBlur}>
                            <Image src={element.img} width="300px" height="300px" alt={element.title} ></Image>
                            </div>
                            
                            <div className={styles.textContainer}>
                                <h2 className={classChange == 0 ? styles[`inicioHotelTitle${index}`] : styles[`hotelTitleBlur${index}`]}>{element.title}</h2>
                                <h4 className={classChange == 0 ? styles.inicioHotelSubtitle : styles.hotelSubtitleBlur}>{element.subtitle}</h4>
                                <p id={element.id}  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={classChange == 0 ? styles.inicioHotelDescription : classChange == element.id? styles.scale : styles.hotelDescriptionBlur}>{element.description}</p>
                                <p className={classChange == 0 ? styles.inicioPrice : styles.priceBlur}>Desde <b>${element.price}/noche</b></p>
                                <button className={classChange == 0 ? styles.inicioButton : styles.buttonBlur}>Reservar ahora</button>
                            </div>
                        </section>
                    )
                }
            })
            },
           </div>
            
        </div>
    )
}
/*styles.inicioHotelTitle : styles.hotelTitleBlur*/