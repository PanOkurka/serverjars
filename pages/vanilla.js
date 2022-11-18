import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='List' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>Snapshot</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>22w46a  (Experimental)</p>
                          <a href='https://serverjars.com/api/fetchJar/vanilla/snapshot/22w46a' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>22w45a (Experimental)</p>
                          <a href='https://serverjars.com/api/fetchJar/vanilla/snapshot/22w45a' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>22w44a (Experimental)</p>
                          <a href='https://serverjars.com/api/fetchJar/vanilla/snapshot/22w44a' download>Download</a>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Vanilla</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>1.19.2</p>
                          <a href='https://serverjars.com/api/fetchJar/vanilla/vanilla/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19.1</p>
                          <a href='https://serverjars.com/api/fetchJar/vanilla/vanilla/1.19.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19</p>
                          <a href='https://serverjars.com/api/fetchJar/vanilla/vanilla/1.19' download>Download</a>
                      </div>
                  </div>
                </div>
            </motion.div>
        </motion.div>
    </Layout>
  )
}