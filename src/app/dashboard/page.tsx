'use client'
import { Button,Typography } from '@mui/material'
import BathroomIcon from '@mui/icons-material/Bathroom';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'


export default function Index() {
  const router= useRouter();
  
  let services= 'p-8 border-8 bg-[#CF6123] border-solid border-amber-950 flex flex-col w-1/4 items-center justify-center p-4'
  return (
      <div className='flex flex-col'>
        <Typography className='text-[#5C483A] font-bold' variant='h2' component={'h3'} textAlign={'center'} marginY={6}>Cuidado de tu Mascota</Typography>
        <div className='w-full flex justify-center items-center p-10 h-screen '>
          <div className='w-3/4 '>
            <Image src={"/img/pet_1.jpg"} width={550} height={500} alt='Pet_1'/>
          </div>
          <div className='w-1/2 bg-[#CF6123] p-5 h-2/3 flex flex-col justify-center'>
            <p className='p-5 text-white font-bold text-xl text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima minus in quasi, impedit odio nulla explicabo, laboriosam laborum iusto dolorum aliquid veritatis. Deserunt, deleniti ex facere fugiat, laborum error aperiam cumque porro minus animi voluptatibus iusto quos vitae impedit sint doloribus quasi, laudantium accusamus facilis? Assumenda voluptates sint ducimus magnam!
            </p>
            <div className='w-full flex justify-end'>
              <Button variant="contained"
                className='bg-[#5C483A] hover:bg-[#49382d] px-4 py-2 uppercase font-bold '
                onClick={()=>{
                  router.push('/dashboard/nosotros')
                }}
              >Leer mas..</Button>
            </div>
          </div>
          
        </div>


        <div className='w-full h-screen'>
          <Typography
            component={'h3'}
            variant='h2'
            className='text-center text-[#5B4739] font-bold'
          >
            Servicios
          </Typography>

          <div className='flex justify-around mt-5'>
              <div className={services}>
                <Typography
                  component={'h3'}
                  variant='h2'
                  className='text-center text-white font-bold'
                >
                  Baño
                </Typography>
                <BathroomIcon fontSize='large' className='text-8xl'/>
                <p className='text-white text-justify mt-8 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab aspernatur maxime! Quibusdam, officia. Libero eveniet repellat tenetur alias voluptates.</p>
              </div>
              <div className={services}>
                <Typography
                    component={'h3'}
                    variant='h2'
                    className='text-center text-white font-bold'
                  >
                  Salud
                </Typography>
                <HealthAndSafetyIcon fontSize='large' className='text-8xl'/>
                <p className='text-white text-justify mt-8 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab aspernatur maxime! Quibusdam, officia. Libero eveniet repellat tenetur alias voluptates.</p>
              </div>
              <div className={services}>
                <Typography
                    component={'h3'}
                    variant='h2'
                    className='text-center text-white font-bold'
                  >
                  Cortes
                </Typography>
                <ContentCutIcon fontSize='large' className='text-8xl '/>
                <p className='text-white text-justify mt-8 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab aspernatur maxime! Quibusdam, officia. Libero eveniet repellat tenetur alias voluptates.</p>
              </div>
          </div>
        </div>
      </div>
  )
}
