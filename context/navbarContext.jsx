import React, { createContext, useState } from 'react';

const navbarContext = createContext();

const NavbarProvider = ({ children }) => {

  const [navbarItems, setNavbarItems] = useState([])
//console.log(navbarItems)


//-----exports------
  const data = { navbarItems, setNavbarItems }

  return (
    <navbarContext.Provider value={data}>
      {children}
    </navbarContext.Provider>
  )
}

export { NavbarProvider };
export default navbarContext;

