import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" class="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className="
        bg-amber-50
        font-body 
        text-black 
        transition-colors 
        duration-700 
        dark:bg-zinc-800 
        dark:text-white"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
