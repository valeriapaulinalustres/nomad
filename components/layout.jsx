import Head from "next/head";


export default function Layout({ children, headTitle, headDescription }) {

  return (
    <div>
      <Head>
     
        <title>{headTitle}</title>
        <meta name="description" content={headDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.defaultProps = {
  title: "Nomad",
  description: "Working around the world"
}

