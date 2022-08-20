import Head from "next/head";
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import getNav from '../pages/api/getNav'





export default function Layout({children, headTitle, headDescription}) {

    const result = [{navName: "alojate", src:"alojate"}, {navName:"Experimente", src:"experimenta"}]



  return (
    <div>
<Head>
    <title>{headTitle}</title>
    <meta name="description" content={headDescription} />
    <link rel="icon" href="/favicon.ico" />
</Head>
<nav>

{result.map((element, index) => {
                    return (
                        <Link
                            href={element.src}
                            className={styles.navbar}
                            key={index}
                            >{element.navName}
                        </Link>)
                })}

</nav>
<main>{children}</main>
<footer>acá ira el footer</footer>
    </div>
  )
}

Layout.defaultProps ={
    title: "Nomad",
    description: "Working around the world"
}



                
