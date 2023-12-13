import axios from 'axios'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

export default function Modded() {

  const [mohist, setMohist] = useState([])
  const [fabric, setFabric] = useState([])
  const [forge, setForge] = useState([])
  const [catserver, setCatserver] = useState([])

  const [doRequest, setDoRequest] = useState(false)

  useEffect(() => {
    if(doRequest) return

    axios.get('https://serverjars.com/api/fetchAll/modded/mohist')
      .then(({data}) => setMohist(data.response))

    axios.get('https://serverjars.com/api/fetchAll/modded/fabric')
      .then(({data}) => setFabric(data.response))
    
      axios.get('https://serverjars.com/api/fetchAll/modded/forge')
      .then(({data}) => setForge(data.response))
    
      axios.get('https://serverjars.com/api/fetchAll/modded/catserver')
      .then(({data}) => setCatserver(data.response))

    setDoRequest(true)
  }, [doRequest])

  const download = (category,version) => {
    window.location = `https://serverjars.com/api/fetchJar/modded/${category}/${version}`
  }

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='Lists' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>Mohist</h2>
                  <div className='stuff'>
                   {mohist.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('mohist',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Fabric</h2>
                  <div className='stuff'>
                    {fabric.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('fabric',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Forge</h2>
                  <div className='stuff'>
                    {forge.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('forge',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Catserver</h2>
                  <div className='stuff'>
                    {catserver.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('catserver',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
            </motion.div>
        </motion.div>
    </Layout>
  )
}