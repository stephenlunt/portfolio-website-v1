import { Analytics } from '@vercel/analytics/react'

import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default MyApp
