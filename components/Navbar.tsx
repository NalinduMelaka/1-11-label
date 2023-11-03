import React from 'react'
import Mobilesidebar from './Mobile-sidebar'



const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
      <Mobilesidebar />
      <div className='flex w-full justify-end'>search</div>
    </div>
  )
}

export default Navbar