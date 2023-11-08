import React from 'react'
import Mobilesidebar from './Mobile-sidebar'
import Navbarsearch from './Navbarsearch'
import Profile from './Profile'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center p-2 bg-[#ADC4CE] text-white text-sm w-full'>
      <Mobilesidebar apiLimitCount={0} isPro={false}/>
      <Navbarsearch />
      <Profile  />
    </div>
  )
}

export default Navbar