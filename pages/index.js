import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='List' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <Link id='vanilla' href='/vanilla'>
                    <a className='item'>
                        <Image src="/images/Vanilla.webp" width='150px' height='150px' alt="Vanilla" />
                        <h1>Vanilla</h1>
                        <p>Just a simple vanilla server from Mojang</p>
                    </a>
                </Link>
                <Link id='servers' href='/servers'>
                    <a className='item'>
                        <Image src="/images/servers.png" width='150px' height='150px' alt="Servers" />
                        <h1>Servers</h1>
                        <p>Server fork&apos;s of Bukkit</p>
                    </a>
                </Link>
                <Link id='proxy' href='/proxy'>
                    <a className='item'>
                        <Image src="/images/proxy.png" width='250px' height='140px' alt="Proxy" />
                        <h1>Proxy</h1>
                        <p>Proxy servers for networks</p>
                    </a>
                </Link>
                <Link id='modded' href='/modded'>
                    <a className='item'>
                        <Image src="/images/modded.png" width='150px' height='150px' alt="Modded" />
                        <h1>Modded</h1>
                        <p>Some jars for modded servers</p>
                    </a>
                </Link>
            </motion.div>
        </motion.div>
    </Layout>
  )
}