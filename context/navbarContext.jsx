import React, { createContext, useState } from 'react';

const navbarContext = createContext();

const NavbarProvider = ({ children }) => {

  const [navbarItems, setNavbarItems] = useState([]);
  const [footerItems, setFooterItems] = useState([]);
  const [homeItems, setHomeItems] = useState([]);
  const [hotelsItems, setHotelsItems] = useState([]);
  const [sliderItems, setSliderItems] = useState([]);
  const [headerItems, setHeaderItems] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);


  //-----exports------
  const data = {
    navbarItems,
    setNavbarItems,
    footerItems,
    setFooterItems,
    homeItems,
    setHomeItems,
    hotelsItems,
    setHotelsItems,
    sliderItems,
    setSliderItems,
    headerItems,
    setHeaderItems,
    carouselItems,
    setCarouselItems,
  }

  return (
    <navbarContext.Provider value={data}>
      {children}
    </navbarContext.Provider>
  )
}

export { NavbarProvider };
export default navbarContext;

