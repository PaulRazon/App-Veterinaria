import React, { ReactNode } from 'react'

function RootLayout({children}:Readonly<{children:ReactNode}>) {
  return (
    <div>{children}</div>
  )
}

export default RootLayout