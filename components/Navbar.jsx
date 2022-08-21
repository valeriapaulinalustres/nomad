import Link from 'next/link'
import { useState, useContext } from "react";
import styles from '../styles/Layout.module.css'
import navbarContext from '../context/navbarContext';

export default function Navbar(props) {

//-------------recibes navbar from contexts------------------------
const { navbarItems } = useContext(navbarContext);
//console.log(navbarItems)
//----------------------------------------------------------------

//const result = [{navName: "alojate", src:"alojate"}, {navName:"Experimente", src:"experimenta"}]


  return (
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
  )
}
