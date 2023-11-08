'use client'
import { createstroke } from '@/app/actions/api/createstroke';
import { useMyContext } from '@/context/MyContext';
import React, { useState } from 'react'

type Props = {}

const Navbarsearch = (props: Props) => {
  const { state1, state2, setState1, setState2, setState3, setState4} = useMyContext();
  const [strokeno, setStrokeno] = useState('');
  console.log('stroke is running on maini')

  const handleInputChange = async () => {
    try{
   if (strokeno) {
     const result = await createstroke(strokeno);
     if(result === "Successfully created new strokeno"){
        setState1(strokeno);
     }
   }
  }catch (error) {
     console.error('Error:', error);
   }
        
 };
 
  return (

      <div className='flex w-full justify-end'>
         <div className='border m-1 p-1 '>
            <label>STROKE NO</label>
            <input placeholder='  Search ...' onChange={(e) => {e.preventDefault()
                                    setStrokeno(e.target.value)
                                   
                                    setState2(0);
                                    setState3(0);
                                    setState4(0);}} className='focus:border-blue-400 border text-black w-32 mx-2 hover:opacity-95'/>
            <button className='border hover:bg-sky-400 rounded' onClick={handleInputChange} >SEARCH</button>
      </div>
    </div>
  
  )
}

export default Navbarsearch