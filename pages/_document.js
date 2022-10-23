import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body 
        className="
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
