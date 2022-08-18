import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='Lists' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>Bungeecord</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>Latest (Snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/proxies/bungeecord' download>Download</a>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Waterfall</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>Latest (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/proxies/waterfall' download>Download</a>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Flamecord</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>Latest (Snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/proxies/flamecord' download>Download</a>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Velocity</h2>
                  <div className='stuff'>
                      <div className='version'>
                          <p>Latest (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/proxies/velocity' download>Download</a>
                      </div>
                  </div>
                </div>
            </motion.div>
        </motion.div>
    </Layout>
  )
}