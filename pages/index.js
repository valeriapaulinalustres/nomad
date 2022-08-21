import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useContext, useEffect } from 'react'
import navbarContext from '../context/navbarContext';

export default function Home(props) {


//---------send navbar to context-------------
const { setNavbarItems } = useContext(navbarContext);

useEffect(() => {
  setNavbarItems(props.nav)
}, [])

//-------------------------------------------

  return (
   <Layout title="Nomad" description="Working around the world" >
    <div>Home</div>
   </Layout>
  )
}

//----------SSR navbar-----------------------------------------
export async function getServerSideProps(context) {
  let data = await fetch  ('http://localhost:3000/api/nav')
  let nav = await data.json()
  return {
    props: {nav}, // will be passed to the page component as props
  }
}
//--------------------------------------------------------------
