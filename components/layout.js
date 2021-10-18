import Head from 'next/head'
import { Footer } from './footer'
import { NavBar } from './navbar'

export default function Layout ({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>  
  )
}