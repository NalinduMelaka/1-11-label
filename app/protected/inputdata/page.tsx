import { UploadForm } from '@/components/Uploadform'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <UploadForm />
    </div>
  )
}

export default page