import Head from 'next/head'
import Footer from './Footer'
import styles from './layout.module.css'
import { Navbar } from './Navbar'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import { useRouter } from 'next/router';

const options = { 
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
  type: 'success',
}

export const siteTitle = 'Minecraft Jars'

export default function Layout({ children }) {
  const { asPath } = useRouter();
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/images/logo.jpg" />
          <meta
            name="description"
            content="Minecraft Jars website!"
          />
          <meta name="og:title" content={siteTitle} />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <title>Minecraft Jars</title>
        </Head>
        <Navbar/>
        <main>{children}</main>
        {asPath !== '/404' && <Footer/>}
      </div>
    </AlertProvider>
  )
}