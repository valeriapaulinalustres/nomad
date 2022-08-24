import navbarContext from '../context/navbarContext';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/Reserve.module.css'

export default function Reserve() {

    const { hotelsItems } = useContext(navbarContext);

    const [classChange, setClassChange] = useState(0)

    function mouseEnter (e){

       
            setClassChange(e.target.id)

    }

    function mouseLeave (){
        setClassChange(0)
    }

    return (
        <div>
            {hotelsItems.map((element, index) => {
                if (element.availabilty) {
                    return (
                        <section key={index}  className={`${styles.container}, ${styles.blue}`}>
                            <img src={element.img} className={classChange == 0 ? styles.inicio : styles.blur}></img>
                            <div >
                                <h2 className={classChange == 0 ? styles.inicio : styles.blur}>{element.title}</h2>
                                <h3 className={classChange == 0 ? styles.inicio : styles.blur}>{element.subtitle}</h3>
                                <p id={element.id}  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={classChange == 0 ? styles.inicio : classChange == element.id? styles.scale : styles.blur}>{element.description}</p>
                                <p className={classChange == 0 ? styles.inicio : styles.blur}>Desde: {element.price}/noche</p>
                                <button className={classChange == 0 ? styles.inicio : styles.blur}>Reservar ahora</button>
                            </div>
                        </section>
                    )
                }
            })
            },
        </div>
    )
}