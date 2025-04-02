import React from 'react'
import { useParams } from 'react-router-dom'
import { tarifListesi } from '../data'

const TarifDetay = () => {
  const { id } = useParams()
  const tarif = tarifListesi.find(t => t.id === parseInt(id))

  if (!tarif) {
    return <div>Tarif bulunamadı.</div>
  }

  return (
    <div className='min-h-screen pt-24 flex flex-col md:flex-row items-start justify-center pt-45'>
      {/* Sol Grid: Resim ve Malzemeler */}
      <div className='bg-white rounded-lg shadow-xl p-4 m-4 w-full md:w-1/2'>
        <img src={tarif.resim} alt={tarif.isim} className='w-full h-85 object-cover rounded-lg mb-4' />
        <h2 className='text-2xl font-bold mb-4'>Malzemeler</h2>
        <ul className='list-disc pl-5'>
          {tarif.malzemeler.map((malzeme, index) => (
            <li key={index} className='text-gray-700 mb-2'>{malzeme}</li>
          ))}
        </ul>
      </div>

      {/* Sağ Grid: Yapılış */}
      <div className='bg-white rounded-lg shadow-xl p-4 m-4 w-full md:w-1/2'>
        <h1 className='text-3xl font-bold mb-4'>{tarif.isim}</h1>
        <h2 className='text-2xl font-bold mb-4'>Yapılış</h2>
        <p className='text-gray-700'>{tarif.yapilis}</p>
      </div>
    </div>
  )
}

export default TarifDetay