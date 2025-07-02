import React, { ReactNode } from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const Authlayout = async ({children} : {children : ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if(isUserAuthenticated) redirect('/');

  return (
    <div className='auth-layout'>
        <h2></h2>
      {children}
    </div>
  )
}

export default Authlayout
