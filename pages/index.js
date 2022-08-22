import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useContext, useEffect } from 'react'
import navbarContext from '../context/navbarContext';

export default function Home(props) {


//---------send navbar, footer and home to context and brings homeItems-------------
const { setNavbarItems, setFooterItems, homeItems, setHomeItems } = useContext(navbarContext);


useEffect(() => {
  setNavbarItems(props.nav)
  setFooterItems(props.footer)
  setHomeItems(props.home)
}, [])

//-------------------------------------------

  return (
   <Layout title="Nomad" description="Working around the world" >
    <div>
      <section>
        <h1>{homeItems.title}</h1>
      </section>
      <section>
        <p>{homeItems.text1}<br/>{homeItems.text2}<span>{homeItems.text3}</span><br/>{homeItems.text4}</p>
      </section>
      <section></section>
    </div>
   </Layout>
  )
}

//----------SSR-----------------------------------------

export async function getServerSideProps(context) {

  //SSR navbar
  let data = await fetch  ('http://localhost:3000/api/nav')
  let nav = await data.json()
//SSR footer
  let dataFooter = await fetch  ('http://localhost:3000/api/footer')
  let footer = await dataFooter.json()

  //SSR footer
  let dataHome = await fetch  ('http://localhost:3000/api/home')
  let home = await dataHome.json()

  return {
    props: {nav, footer, home}, // will be passed to the page component as props
  }
}
//--------------------------------------------------------------
