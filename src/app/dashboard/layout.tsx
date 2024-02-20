'use client'
import React, { ReactNode } from 'react'
import Footer from '../components/footer';
import { usePathname } from 'next/navigation';
import Header from '../components/header';


function RootLayout({children}:Readonly<{
    children: ReactNode;
  }>) {
    const path= usePathname();
  return (
    <div>
      <Header 
        path={path}
      />
      {children}
      <Footer/>
    </div>
  )
}

export default RootLayout