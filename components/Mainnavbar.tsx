'use server'
import Mobilesidebar from './Mobile-sidebar'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Profile from './Profile'




const Mainnavbar = async () => {
  const session = await getServerSession(authOptions);
  
  
  return (
    <div className='flex justify-end  bg-[#ADC4CE] text-white h-[9vh]'>
      <Mobilesidebar apiLimitCount={0} isPro={false}/>
      <div className='my-auto mr-2 text-sm'>
        {session && session.user?.email ? (
          <Profile />
        ):(
          <>
          <Link className='mx-1 hover:bg-sky-700' href='/auth/signup'>Signup</Link>
          <Link className='mx-1 hover:bg-sky-700' href='/auth/signin'>Signin</Link>
          </>
        )}
        
      </div>
      </div>
  )
}

export default Mainnavbar