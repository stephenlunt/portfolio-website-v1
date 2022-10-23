import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  )
}

export default MyApp
