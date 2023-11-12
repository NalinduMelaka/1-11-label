'use client'
import { createstroke } from '@/app/actions/api/createstroke';
import { useMyContext } from '@/context/MyContext';
import React, { useState } from 'react'

type Props = {}

const Navbarsearch = (props: Props) => {
  const { state1, state2, setState1, setState2, setState3, setState4, setState5} = useMyContext();
  const [strokeno, setStrokeno] = useState('');
  console.log('stroke is running on maini')

  const handleInputChange = async () => {
    try{
   if (strokeno) {
     const result = await createstroke(strokeno);
     if(result === "Successfully created new strokeno"){
        setState5(strokeno);
     }
   }
  }catch (error) {
     console.error('Error:', error);
   }
        
 };
 
  return (

      <div className='flex w-full justify-end'>
         <div className='border m-1 p-1 bg-white text-black rounded-md'>
            <label>STROKE NO</label>
            <input placeholder='  Search ...' onChange={(e) => {e.preventDefault()
                                    setStrokeno(e.target.value)
                                    setState2('');
                                    setState3('');
                                    setState4('');}} className=' text-black w-32 mx-2 hover:opacity-95'/>
            <button className='border hover:bg-[#D0A2F7] rounded' onClick={handleInputChange} >SEARCH</button>
      </div>
    </div>
  
  )
}

export default Navbarsearch