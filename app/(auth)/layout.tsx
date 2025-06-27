import React, { ReactNode } from 'react'

const Authlayout = ({children} : {children : ReactNode}) => {
  return (
    <div className='auth-layout'>
        <h2></h2>
      {children}
    </div>
  )
}

export default Authlayout
