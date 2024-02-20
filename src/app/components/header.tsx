
import Link from 'next/link'
import React from 'react'

interface Props {
    path: string;
}
const Header:React.FC<Props> = ({path})=>{

    const links= 'hover:cursor-pointer py-2 px-5'
    let clase=""
    if(path==='/dashboard')
    {
        clase='flex h-screen bg-gradient-to-r from-black via-black-50 to-black-90'
    }else{
        clase='flex bg-[#5B4739] pb-5'
    }
return (
        <header>
            <nav className={clase}>
                {path==='/dashboard'?<div className='relative flex w-full'>
                    <img id='logo' src={'/img/baño_pet.jpg'} alt='Index imagen'/>
                </div>:''}
                <ul className={`${path==='/dashboard'?'absolute':'relative'} text-white flex text-3xl w-full justify-around font-bold mt-5`} >
                    <Link href={'/dashboard'} className={links}>Index</Link>
                    <Link href={'/dashboard/citas'} className={links}>Citas</Link>
                    <Link href={'/dashboard/nosotros'} className={links}>Nosotros</Link>
                    <Link href={'/dashboard/contactos'} className={links}>Contactos</Link>
                </ul>
            </nav>
        </header>
    
    )
}

export default Header