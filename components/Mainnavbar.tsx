'use server'
import React from 'react'
import Mobilesidebar from './Mobile-sidebar'
import Link from 'next/link'




const Mainnavbar = () => {
  return (
    <div className='flex flex-row w-full justify-between h-10 bg-slate-700 text-white'>
      <Mobilesidebar apiLimitCount={0} isPro={false}/>
      <div className='my-auto mr-2 text-sm'>
        <Link className='mx-1 hover:bg-sky-700' href='/auth/signup'>Signup</Link>
        <Link className='mx-1 hover:bg-sky-700' href='/auth/signin'>Signin</Link>
      </div>
      </div>
  )
}

export default Mainnavbar