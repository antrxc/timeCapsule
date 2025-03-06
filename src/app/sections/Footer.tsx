import { SparklesText } from '@/components/magicui/sparkles-text'
import React from 'react'

function Footer() {
  return (
    <div className="pr-1 w-screen h-fit pl-9 bg-transparent text-2xl ">
      <div className='w-fit p-2 ml-auto '>
        <p className='font-bold  w-fit italic md:text-l '>Bought to you by </p>
        <SparklesText text='&nbsp;antrxc' className='w-fit '/>
      </div>
    </div>
  )
}

export default Footer