import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import { NavbarProvider } from '../context/navbarContext';

function MyApp({ Component, pageProps }) {
  return <>
  <NavbarProvider>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </NavbarProvider>
  
  </>
  
}

export default MyApp
