import Head from 'next/head'

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Stephens Personal Website" />
        <meta name="author" content="Stephen Lunt" />
        <title>Stephen Lunt - Homepage</title>
        <meta name="msvalidate.01" content="803DEBC8F7F92E3DE832151EE9DBB862" />
      </Head>

      <Navbar />

      <main className="translate-y-24">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
