import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { NavbarProvider } from '../context/navbarContext';

function MyApp({ Component, pageProps }) {
  return <>
  <NavbarProvider>
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </NavbarProvider>
  
  </>
  
}

export default MyApp
