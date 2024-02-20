'use client'
import { Button,Typography } from '@mui/material'
import BathroomIcon from '@mui/icons-material/Bathroom';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Index() {
  const router= useRouter();
  
  let services= 'flex flex-col w-1/4 items-center justify-center p-4'
  return (
      <div className='flex flex-col'>
        <div className='flex justify-around mt-9 h-screen w-full'>
          <div className='w-1/2 flex flex-col items-start p-9 ml-9'>
          <Typography className='text-[#5C483A] font-bold' variant='h3' component={'h4'} textAlign={'center'} marginY={6}>Sobre nosotros</Typography>    
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias voluptas odit laudantium sequi consequuntur nihil perspiciatis quia eveniet distinctio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum id,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, accusantium! 
          voluptatem cum, tempora quibusdam dolor sit odit aut tenetur recusandae
           ea ullam deserunt sapiente facere doloribus architecto reprehenderit culpa distinctio?</p>
           <Button variant="contained"
                className='bg-[#5C483A] hover:bg-[#49382d] px-4 py-2 uppercase font-bold mt-5'
                onClick={()=>{
                  router.push('/dashboard/citas')
                }}
              >Agendar Cita</Button>
          </div>
          <div className='flex flex-col items-end justify-center w-2/3'>
          <Image id='logo' src={'/img/golden.png'} width={600} height={600} alt='Index imagen'/>
          </div>
          
        </div>
        
        <div className='bg-white'>
          <Typography className='text-[#5C483A] font-bold ' variant='h2' component={'h3'} textAlign={'center'} marginY={6}>Cuidado de tu Mascota</Typography>
        </div>
        
        <div className='w-full flex justify-center items-center p-10 bg-white'>
          <div className='w-3/4 '>
            <Image src={"/img/pet_2.png"} width={550} height={500} alt='Pet_1'/>
          </div>
          <div className='w-1/2 p-5 h-2/3 flex flex-col justify-center'>
            <p className='p-5 text-[#352921] text-xl text-justify'>
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


        <div className='w-full h-screen flex flex-col justify-around '>
          <Typography
            component={'h3'}
            variant='h2'
            className='text-center text-[#5B4739] font-bold text-5xl md:text-5xl'
          >
            Servicios
          </Typography>

          <div className='flex justify-around'>
              <div className={services}>
                <Typography
                  component={'h3'}
                  variant='h2'
                  className='text-center text-[#5C483A] font-bold text-xl md:text-6xl'
                >
                  Baño
                </Typography>
                <BathroomIcon fontSize='large' className='md:text-8xl text-gray-800'/>
                <p className=' text-justify mt-8 text-xs md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab aspernatur maxime! Quibusdam, officia. Libero eveniet repellat tenetur alias voluptates.</p>
              </div>
              <div className={services}>
                <Typography
                    component={'h3'}
                    variant='h2'
                    className='text-center text-[#5C483A] font-bold text-xl md:text-6xl'
                  >
                  Salud
                </Typography>
                <HealthAndSafetyIcon fontSize='large' className='md:text-8xl text-red-600' />
                <p className='text-justify mt-8 text-xs md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab aspernatur maxime! Quibusdam, officia. Libero eveniet repellat tenetur alias voluptates.</p>
              </div>
              <div className={services}>
                <Typography
                    component={'h3'}
                    variant='h2'
                    className='text-center text-[#5C483A] font-bold text-xl md:text-6xl'
                  >
                  Cortes
                </Typography>
                <ContentCutIcon fontSize='large' className='md:text-8xl text-gray-600'/>
                <p className='text-justify mt-8 text-xs md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab aspernatur maxime! Quibusdam, officia. Libero eveniet repellat tenetur alias voluptates.</p>
              </div>
          </div>
        </div>
      </div>
  )
}
