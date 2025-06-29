import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const rootlayout = ({children} : {children : ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex items-center gap-2'>
        <Image src="/logo.png" alt="Logo" width={50} height={50}></Image>
        <h2 className='text-primary-100'>InterViewer</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default rootlayout
