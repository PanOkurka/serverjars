import '../styles/global.css'
import '../styles/main.css'
import '../styles/tailwind.css'
import { AnimatePresence } from 'framer-motion'
import HashLoader from 'react-spinners/HashLoader';
import Head from 'next/head';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);



    return (
      <>
        {!loading ? (
          <NextUIProvider>
            <AnimatePresence mode='wait'>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </NextUIProvider>
        ) : (
          <>
              <Head>
                <link rel="icon" href="/images/logo.jpg" />
                <title>Minecraft Jars</title>
              </Head>

              <div className='Loader'>
                <HashLoader color='#AB2AAF' loading={loading} css='block m-0' size={150} />
                <h2 className='text-3xl mt-3'>Loading...</h2>
              </div>
            </>

        )
        }
      </>
    )
  }