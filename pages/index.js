import React from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head';

const Index = () => {
  return (
      <div>
          <Head>
              <title>Luca Joos skr</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div style={{ display: 'grid', height: '100vh', alignItems: 'center'}}>
              <motion.div animate={{ scale: 2 }} initial={{ scale: 0}} transition={{ duration: 5 }} >
                  <h1>Bruh</h1>
              </motion.div>
          </div>
      </div>
  )
}

export default Index;