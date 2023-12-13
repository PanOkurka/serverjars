import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {

  return (
    <Layout>
       <motion.div exit={{ y: -60, opacity: 0, transition: {duration: 0.6}}} initial={{ y: 60 , opacity: 0}} animate={{ y: 0 , opacity: 1, transition: {duration: 1}}}>
            <motion.div className='List' exit={{y: -40, opacity: 0, transition: {duration: 0.5}}} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1, transition: {duration: 0.6, delay: 0.4}}}>
                <Link id='vanilla' href='/vanilla' className='item'>
                        <img src="/images/Vanilla.webp" className='w-[150px] h-[150px]' alt="Vanilla" />
                        <h1>Vanilla</h1>
                        <p>Just a simple vanilla server from Mojang</p>
                </Link>
                <Link id='servers' href='/servers' className='item'>
                        <img src="/images/servers.png" className='w-[150px] h-[150px]' alt="Servers" />
                        <h1>Servers</h1>
                        <p>Server fork&apos;s of Bukkit</p>
                </Link>
                <Link id='proxy' href='/proxy' className='item'>
                        <img src="/images/proxy.png" className='w-[250px] h-[140px]' alt="Proxy" />
                        <h1>Proxy</h1>
                        <p>Proxy servers for networks</p>
                </Link>
                <Link id='modded' href='/modded' className='item'>
                        <img src="/images/modded.png" className='w-[150px] h-[150px]' alt="Modded" />
                        <h1>Modded</h1>
                        <p>Some jars for modded servers</p>
                </Link>
            </motion.div>
        </motion.div>
    </Layout>
  )
}