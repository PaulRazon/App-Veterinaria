'use client'
import Maps from '@/app/components/maps'
import { Typography } from '@mui/material'
import React from 'react'

function Contactos() {
  return (
    <div className='flex justify-around'>
      <div className='p-5'>
        <Maps/>
      </div>
       
        <div className='flex flex-col bg-[#5C483A] w-2/5 my-5 items-center'>
          <Typography className='text-white text-2xl font-bold mt-8'>Direccion:</Typography>
          <ul className='flex flex-col justify-center item-center text-white text-center mb-8'>
            <li>Calle. Lorem ipsum dolor sit am</li>
            <li>Col. Lorem ipsum dolor sit amet.</li>
            <li>C.P 678943</li>

          </ul>
          <Typography className='text-white text-2xl font-bold'>Telefonos:</Typography>
          <ul className='flex flex-col justify-center item-center text-white text-center mb-8'>
            <li>Calle. Lorem ipsum dolor sit am</li>
            <li>Col. Lorem ipsum dolor sit amet.</li>
            <li>C.P 678943</li>
          </ul>
          <Typography className='text-white text-2xl font-bold'>Sucursales:</Typography>
          <ul className='flex flex-col justify-center item-center text-white text-center mb-8'>
            <li>Calle. Lorem ipsum dolor sit am</li>
            <li>Col. Lorem ipsum dolor sit amet.</li>
            <li>C.P 678943</li>

          </ul>
        </div>
      
    </div>

   
  )
}

export default Contactos