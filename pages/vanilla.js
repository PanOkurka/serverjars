import axios from 'axios'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'

export default function Vanilla() {

  const [vanilla, setVanilla] = useState([])
  const [snapshot, setSnapshot] = useState([])

  const [doRequest, setDoRequest] = useState(false)

  useEffect(() => {
    //if(vanilla && snapshot) return
    if(doRequest) return

    axios.get('https://serverjars.com/api/fetchAll/vanilla/vanilla')
      .then(({data}) => setVanilla(data.response))

    axios.get('https://serverjars.com/api/fetchAll/vanilla/snapshot')
      .then(({data}) => setSnapshot(data.response))

    setDoRequest(true)
  }, [doRequest])

  const download = (category,version) => {
    window.location = `https://serverjars.com/api/fetchJar/vanilla/${category}/${version}`
  }

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='Lists' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <div className='downloads'>
                  <h2>Snapshot</h2>
                  <div className='stuff'>
                   {snapshot.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('snapshot',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='downloads'>
                  <h2>Vanilla</h2>
                  <div className='stuff'>
                    {vanilla.map((ver) => (
                      <div className='version' key={ver.version}>
                        <p>{ver.version}</p>
                        <Button color='success' className='w-[300px]' onPress={() => download('vanilla',ver.version)}>Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
            </motion.div>
        </motion.div>
    </Layout>
  )
}