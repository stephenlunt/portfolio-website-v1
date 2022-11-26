import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
