import React from 'react'
import {motion} from 'framer-motion'
import Welcome from '../assets/Welcome.jpg'

const Homepage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Arka plan görseli */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Welcome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
          zIndex: -1
        }}
      />
      
      {/* İçerik */}
      <motion.div 
        className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4 pt-24"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
      >
        <motion.h1 
          className="text-6xl font-bold mb-6"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.5}}
        >
          Sağlıklı Yaşama Hoş Geldiniz
        </motion.h1>
        
        <motion.button 
          className="mt-8 px-8 py-4 bg-red-500 text-white rounded-lg text-xl hover:bg-red-600 transition duration-300 transform hover:scale-105"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.8}}
        >
          Hizmetlerimizi Keşfedin
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Homepage