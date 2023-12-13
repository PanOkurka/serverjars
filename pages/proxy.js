import axios from 'axios'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

export default function Proxy() {

  const [bungee, setBungee] = useState([])
  const [waterfall, setWaterfall] = useState([])
  const [velocity, setVelocity] = useState([])

  const [doRequest, setDoRequest] = useState(false)

  useEffect(() => {
    if(doRequest) return

    axios.get('https://serverjars.com/api/fetchAll/proxies/bungeecord')
      .then(({data}) => setBungee(data.response))

    axios.get('https://serverjars.com/api/fetchAll/proxies/waterfall')
      .then(({data}) => setWaterfall(data.response))
    
      axios.get('https://serverjars.com/api/fetchAll/proxies/velocity')
      .then(({data}) => setVelocity(data.response))

    setDoRequest(true)
  }, [doRequest])

  const download = (category,version) => {
    window.location = `https://serverjars.com/api/fetchJar/proxies/${category}/${version}`
  }

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='Lists' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>BungeeCord</h2>
                  <div className='stuff'>
                   {bungee.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('bungeecord',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Waterfall</h2>
                  <div className='stuff'>
                    {waterfall.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('waterfall',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Velocity</h2>
                  <div className='stuff'>
                    {velocity.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('velocity',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
            </motion.div>
        </motion.div>
    </Layout>
  )
}