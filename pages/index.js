import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useContext, useEffect } from 'react'
import navbarContext from '../context/navbarContext';

export default function Home(props) {


//---------send navbar to context-------------
const { setNavbarItems, setFooterItems } = useContext(navbarContext);


useEffect(() => {
  setNavbarItems(props.nav)
  setFooterItems(props.footer)
}, [])

//-------------------------------------------

  return (
   <Layout title="Nomad" description="Working around the world" >
    <div>Home</div>
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

  return {
    props: {nav, footer}, // will be passed to the page component as props
  }
}
//--------------------------------------------------------------
