import { useState }  from 'react';
import { Link } from 'next/link';
import Navbar from './Navbar';
import MenuList from './MenuList';
import Reserve from './Reserve';
import styles from '../styles/Header.module.css'


function Header() {

  const [menu, setMenu] = useState(false)
  const [reserve, setReserve] = useState(false)

  return (
    <div >
<a href="/" className={styles.headerLogo}>logo</a>
<div className={styles.headerContainer}>
       
       
        <div className={styles.navContainer}>
        <Navbar menu={menu} setMenu={setMenu} />
        <h3 className={styles.headerLanguage}>English</h3>
        <button onClick={()=>setReserve(!reserve)} className={styles.headerButton}>Reservar</button>
           
           
        </div>
        {menu && <MenuList/>}
        {reserve && <Reserve/> }
    </div>
 
    </div>
    
    
  )
}

export default Header
