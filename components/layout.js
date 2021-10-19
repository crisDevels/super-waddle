import Head from 'next/head'
import { Footer } from './footer'
import { NavBar } from './navbar'

export default function Layout ({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="preload"
          href="/fonts/dreamscape/Dreamscape.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/dreamscape/Dreamscape.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/dreamscape/Dreamscape.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/dreamscape/DreamscapeSans.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/dreamscape/DreamscapeSans.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/dreamscape/DreamscapeSans.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>  
  )
}