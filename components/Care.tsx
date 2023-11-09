import React from 'react'
import Userinputforcare from './Userinputforcare'
import Caredata from './Caredata'

type Props = {}

const Care = (props: Props) => {
  return (
    <table className="border-collapse border border-slate-500 text-xs bg-white relative font-mono">
      <thead>
        <tr>
          <th className='sticky top-0 border z-10 bg-white border-black  w-14'>Ref No</th>
          <th className='sticky top-0 border z-10 bg-white border-black  w-14'>Wash Symbol</th>
          <th className='sticky top-0 border z-10 bg-white border-black  w-14'>Fibre</th>
          <th className='sticky top-0 border z-10 bg-white border-black  w-14'>Zoodes</th>
          <th className='sticky top-0 border z-10 bg-white border-black  w-14'>COO</th>
          <th className='sticky top-0 border z-10 bg-white border-black  w-14'>Caretext</th>
          <th className='sticky top-0 border z-10 bg-white border-black  w-14'>MPART/FW</th>
        </tr>
      </thead>
      <tbody>
        <Caredata />
        <Userinputforcare />
      </tbody>
    </table>
  )
}

export default Care