import { MegaMenu } from '@/components/Frontend/MegaMenu'
import Navbar from '@/components/Frontend/Navbar'
import React,{ReactNode} from 'react'

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-white'>
      <Navbar />
      <div className="mx-auto py-6 fixed top-20 w-full left-0 right-0 z-40 bg-white container">
      <MegaMenu />
      </div>
      {children}
    </div>
  )
}

export default Layout