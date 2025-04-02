import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className="bg-gray-800 text-white py-6">
           <div className="container mx-auto text-center">
             <p className="mb-4">Bizi sosyal medyada takip edin:</p>
             <div className='justify-center flex space-x-4'>
             <a href="/" target="_blank" rel="noopener noreferrer">
             <FaFacebook className="text-2xl hover:text-blue-500" />
           </a>
           <a href="/" target="_blank" rel="noopener noreferrer">
             <FaInstagram className="text-2xl hover:text-pink-500" />
           </a>
           <a href="/" target="_blank" rel="noopener noreferrer">
             <FaLinkedin className="text-2xl hover:text-blue-400" />
           </a>
           </div>
             <p className="mt-4">&copy; 2025 metehannolgun. Tüm hakları saklıdır.</p>
           </div>
         </footer>
  )
}

export default Footer