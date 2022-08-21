import Link from 'next/link'
import { useState, useContext } from "react";
import styles from '../styles/Layout.module.css'
import navbarContext from '../context/navbarContext';

export default function Footer() {

  
//-------------recibes footer from contexts------------------------
const { footerItems } = useContext(navbarContext);
//console.log(footerItems)
//----------------------------------------------------------------


  return (
    <div>
      <section>
<div>
  <img></img>
  <p>{footerItems.text}</p>
  <nav></nav>
</div>
<div>
  <h2>{footerItems.title}</h2>
  <h3>{footerItems.tel}</h3>
  <h3>{footerItems.mail}</h3>
  <nav></nav>
</div>
      </section>
      <section>
        <h2>{footerItems.greeting}</h2>
      </section>
    </div>
  )
}
