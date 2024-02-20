import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import React from 'react'

function Footer() {
    let containers='flex flex-col mt-9 justify-center items-center h-full py-9'
    let texts ='text-white text-2xl font-bold'
    let paragraph = 'text-xl text-white' 
  return (
    <footer className='w-full bg-[#5C483A] flex justify-around py-9'>
        <div className={containers}>
            <Typography
                className={texts}
                variant='h3'
                component='h3'
            >
                Derechos Reservados &copy;
            </Typography>

        </div>
        <div className={containers}>
        <Typography
                className={texts}
                variant='h3'
                component='h3'
            >
                Telefono:
            </Typography>
            <p className={paragraph}>3112046937</p>
            <Typography
                className={texts}
                variant='h3'
                component='h3'
            >
                Direccion:
            </Typography>
            <p className={paragraph} >Calle Independencia 40 Col. Andareñas CP.63780</p>
        </div>
        <div className="flex justify-center items-center mt-9 text-white">
            <FacebookIcon className='text-6xl'/>
            <InstagramIcon className='text-6xl'/>
            <XIcon className='text-6xl'/>
        </div>
    </footer>
  )
}

export default Footer