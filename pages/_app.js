import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import { NavbarProvider } from '../context/navbarContext';
import Cursor from '../components/Cursor'


function MyApp({ Component, pageProps }) {
  return <>
  
  <Cursor />
  <NavbarProvider>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </NavbarProvider>
  
  
  
  </>
  
}

export default MyApp
