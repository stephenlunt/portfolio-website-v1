import Head from 'next/head'
import Navbar from './navbar'

const Layout = ({ children, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Stephen's Personal Website" />
        <meta name="author" content="Stephen Lunt" />
        <title>Stephen Lunt - Homepage</title>
      </Head>

      <Navbar />
      
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
