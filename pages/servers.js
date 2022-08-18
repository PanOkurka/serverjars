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

     function DropdwnOpen3(){
        if(document.getElementById("dropdown-menu3").classList.contains("hidden")){
            document.getElementById("dropdown-menu3").classList.remove("hidden")
        } else {
            document.getElementById("dropdown-menu3").classList.add("hidden");
        }
     }

     function DropdwnOpen4(){
        if(document.getElementById("dropdown-menu4").classList.contains("hidden")){
            document.getElementById("dropdown-menu4").classList.remove("hidden")
        } else {
            document.getElementById("dropdown-menu4").classList.add("hidden");
        }
     }

     function DropdwnOpen5(){
        if(document.getElementById("dropdown-menu5").classList.contains("hidden")){
            document.getElementById("dropdown-menu5").classList.remove("hidden")
        } else {
            document.getElementById("dropdown-menu5").classList.add("hidden");
        }
     }

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='Lists' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>Bukkit</h2>
                  <p style={{color: 'red'}}>Not recommended for production environments.</p>
                  <div className='stuff'>
                    <div className='version'>
                          <p>1.19.2 (unstable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/bukkit/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19.1 (unstable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/bukkit/1.19.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.18.2 (unstable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/bukkit/1.18.2' download>Download</a>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Spigot</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>1.19.2 (unstable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19.1 (unstable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.19.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19 (unstable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.19' download>Download</a>
                      </div>
                      <div>
                            <button id='dropdwn' onClick={DropdwnOpen} type="button" className='drpdwn-btn'>
                                <span>More</span>
                            </button>
                            <div id='dropdown-menu' className='hidden Animation'>
                                <div className='version'>
                                    <p>1.18.2 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.18.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.18.1 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.18.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.18 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.18' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.17.1 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.17.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.17 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.17' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.15.2 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.15.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.14.4 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.14.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.13.2 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.13.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.12.2 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.12.2<' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.11.2 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.11.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.8.8 (unstable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/spigot/1.8.8' download>Download</a>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Paper</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>1.19.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/paper/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19.1 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/paper/1.19.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/paper/1.19' download>Download</a>
                      </div>
                      <div>
                            <button id='dropdwn' onClick={DropdwnOpen2} type="button" className='drpdwn-btn'>
                                <span>More</span>
                            </button>
                            <div id='dropdown-menu2' className='hidden Animation'>
                                <div className='version'>
                                    <p>1.18.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.18.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.18.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.18.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.17.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.17.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.5 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.16.5' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.15.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.15.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.14.4 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.14.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.13.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.13.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.12.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.12.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.11.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.11.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.10.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.10.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.9.4 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.9.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.8.8 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/paper/1.8.8' download>Download</a>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Purpur</h2>
                  <div className='stuff'>
                  <div className='version'>
                          <p>1.19.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.19.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19.1 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.19.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.19 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.19' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.18.2 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.18.2' download>Download</a>
                      </div>
                      <div>
                            <button id='dropdwn' onClick={DropdwnOpen3} type="button" className='drpdwn-btn'>
                                <span>More</span>
                            </button>
                            <div id='dropdown-menu3' className='hidden Animation'>
                                <div className='version'>
                                    <p>1.18.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.18.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.17.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.17.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.17 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.17' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.5 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.16.5' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.4 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.16.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.1(stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.16.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.15.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.15.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.15.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.15.1' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.15 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.15' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.14.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.14.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.14.1 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/purpur/1.14.1' download>Download</a>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Tuinity</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>1.17.1 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/tuinity/1.17.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.17 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/tuinity/1.17' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.16.5 (stable)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/tuinity/1.16.5' download>Download</a>
                      </div>
                      <div>
                            <button id='dropdwn' onClick={DropdwnOpen4} type="button" className='drpdwn-btn'>
                                <span>More</span>
                            </button>
                            <div id='dropdown-menu4' className='hidden Animation'>
                                <div className='version'>
                                    <p>1.16.4 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/tuinity/1.16.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.3 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/tuinity/1.16.3' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.16.2 (stable)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/tuinity/1.16.2' download>Download</a>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Sponge</h2>
                  <div className='stuff'>
                    <div className='version'>
                          <p>1.12.2 (snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/sponge/1.12.2' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.12.1 (snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/sponge/1.12.1' download>Download</a>
                      </div>
                      <div className='version'>
                          <p>1.11.2 (snapshot)</p>
                          <a href='https://serverjars.com/api/fetchJar/servers/sponge/1.11.2' download>Download</a>
                      </div>
                      <div>
                            <button id='dropdwn' onClick={DropdwnOpen5} type="button" className='drpdwn-btn'>
                                <span>More</span>
                            </button>
                            <div id='dropdown-menu5' className='hidden Animation'>
                                <div className='version'>
                                    <p>1.10.2 (snapshot)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/sponge/1.10.2' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.9.4 (snapshot)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/sponge/1.9.4' download>Download</a>
                                </div>
                                <div className='version'>
                                    <p>1.8.9 (snapshot)</p>
                                    <a href='https://serverjars.com/api/fetchJar/servers/sponge/1.8.9' download>Download</a>
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