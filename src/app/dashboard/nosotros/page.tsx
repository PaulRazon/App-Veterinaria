import Image from 'next/image'
import React from 'react'

export default function Nosotros(){
  return (
    <div className='flex justify-around'>
      <div className='p-5 w-1/2'>
        <Image src={'/img/nosotros.jpg'} alt='Nosotros' width={550} height={300}/>
      </div>
      <div className='w-1/3 my-5 bg-[#CF6123] flex items-center p-8'>
        <p className='text-white text-2xl text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quam ex quia nam suscipit voluptatum earum ipsa eum facilis placeat impedit nostrum a sit corporis, ut doloribus cum laborum officia optio beatae eos facere aut tenetur quaerat! Tenetur, possimus quasi.</p>
      </div>
    </div>
  )
}
