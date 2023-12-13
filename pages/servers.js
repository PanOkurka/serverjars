import axios from 'axios'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

export default function Servers() {

  const [paper, setPaper] = useState([])
  const [purpur, setPurpur] = useState([])
  const [sponge, setSponge] = useState([])

  const [doRequest, setDoRequest] = useState(false)

  useEffect(() => {
    if(doRequest) return

    axios.get('https://serverjars.com/api/fetchAll/servers/paper')
      .then(({data}) => setPaper(data.response))

    axios.get('https://serverjars.com/api/fetchAll/servers/purpur')
      .then(({data}) => setPurpur(data.response))
    
      axios.get('https://serverjars.com/api/fetchAll/servers/sponge')
      .then(({data}) => setSponge(data.response))

    setDoRequest(true)
  }, [])

  const download = (category,version) => {
    window.location = `https://serverjars.com/api/fetchJar/servers/${category}/${version}`
  }

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='Lists' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>Paper</h2>
                  <div className='stuff'>
                   {paper.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('paper',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Purpur</h2>
                  <div className='stuff'>
                    {purpur.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('pupur',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Sponge</h2>
                  <div className='stuff'>
                    {sponge.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('sponge',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
            </motion.div>
        </motion.div>
    </Layout>
  )
}