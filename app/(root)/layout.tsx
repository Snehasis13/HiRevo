import React, { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import Logout from '@/components/Logout'

const rootlayout = async ({children} : {children : ReactNode}) => {

  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect('/sign-in');


  return (
    <div className='root-layout'>
      <nav className='relative'>
        <Link href='/' className='flex items-center gap-2'>
        <Image src="/logo.png" alt="Logo" width={50} height={50}></Image>
        <h2 className='text-primary-100'>HiRevo</h2>
        </Link>
        <div className="absolute top-0 right-0">
          <Logout />
        </div>
      </nav>
     {children}
    </div>
  )
}

export default rootlayout
