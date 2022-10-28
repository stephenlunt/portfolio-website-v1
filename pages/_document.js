import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass+Mono&family=Overpass:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className="
        font-body
        bg-amber-50 
        dark:bg-zinc-800 
        text-black 
        dark:text-white 
        transition-colors 
        duration-700"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
