import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

 function DropdwnOpen(){
    if(document.getElementById("dropdown-menu").classList.contains("hidden")){
        document.getElementById("dropdown-menu").classList.remove("hidden")
    } else {
        document.getElementById("dropdown-menu").classList.add("hidden");
    }
 }
 function DropdwnOpen2(){
    if(document.getElementById("dropdown-menu2").classList.contains("hidden")){
        document.getElementById("dropdown-menu2").classList.remove("hidden")
    } else {
        document.getElementById("dropdown-menu2").classList.add("hidden");
    }
 }

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='Lists' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>Mohist</h2>
                  <div className='stuff'>
                        <div className='version'>
                          <p>1.19.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/mohist/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.18.2 (testing)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/mohist/1.18.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.16.5 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/mohist/1.16.5' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.12.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/mohist/1.12.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.7.10 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/mohist/1.7.10' download>Download</a>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Forge</h2>
                  <div className='stuff'>
                      <div className='version'>
                          <p>1.19.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/forge/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19.1 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/forge/1.19.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.18.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/forge/1.18.2' download>Download</a>
                      </div>
                      <div>
                            <button id='dropdwn' onClick={DropdwnOpen} type="button" className='drpdwn-btn'>
                                <span>More</span>
                            </button>
                            <div id='dropdown-menu' className='hidden Animation'>
                                <div className='version'>
                                    <p>1.10 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.10' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.9.4 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.9.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.9 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.9' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.8.9 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.8.9' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.8.8 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.8.8' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.8 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.8' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.7.10 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.7.10' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.6.4 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/forge/1.6.4' download>Download</a>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Catserver</h2>
                  <div className='stuff'>
                      <div className='version'>
                          <p>1.18.2 (Snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/catserver/1.18.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.16.5 (Snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/catserver/1.16.5' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.12.2 (Snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/catserver/1.12.2' download>Download</a>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Fabric</h2>
                  <div className='stuff'>
                      <div className='version'>
                          <p>1.19.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19.1 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.19.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.18.1 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.18.1' download>Download</a>
                      </div>
                      <div>
                            <button id='dropdwn' onClick={DropdwnOpen2} type="button" className='drpdwn-btn'>
                                <span>More</span>
                            </button>
                            <div id='dropdown-menu2' className='hidden Animation'>
                                <div className='version'>
                                    <p>1.18 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.18' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.17 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.17' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.4 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.16.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.3 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.16.3' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.16.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.16.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.16' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.15.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.15.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.15 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.15' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.14.3 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/modded/fabric/1.14.3' download>Download</a>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
            </motion.div>
        </motion.div>
    </Layout>
  )
}