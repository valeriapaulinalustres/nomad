import React, { createContext, useState } from 'react';

const navbarContext = createContext();

const NavbarProvider = ({ children }) => {

  const [navbarItems, setNavbarItems] = useState([])
  const [footerItems, setFooterItems] = useState([])
//console.log(navbarItems)


//-----exports------
  const data = { navbarItems, setNavbarItems, footerItems, setFooterItems }

  return (
    <navbarContext.Provider value={data}>
      {children}
    </navbarContext.Provider>
  )
}

export { NavbarProvider };
export default navbarContext;

