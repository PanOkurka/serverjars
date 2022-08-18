import Layout from '../components/layout'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <Layout>  
            <motion.div className='notfound' initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}}>
                <div className='notfound-header'>
                    <div className='box'>
                      <h1 className='glitch number' data-text="404">404</h1>
                      <h1 className='glitch' data-text="Page or Content Not Found!">Page or Content Not Found!</h1>
                    </div>
                </div>
            </motion.div>
    </Layout>
  )
}