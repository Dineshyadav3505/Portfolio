import { motion } from 'framer-motion'
import React from 'react'
import { RandomHLine, RandomBlob } from 'react-random-shapes'

const Icon = ({data, out}) => {
    
  return (

    <motion.div drag dragConstraints={out} className='relative'>
      <div className="box w-[17vw] h-[60vh] rounded-xl bg-zinc-900 p-5">
        <h1 className='text-center text-zinc-100 text-xl font-semibold '> {data.name}</h1>
        <hr className="mt-2" />
        <div className="con  h-full w-full py-10 flex gap-4 flex-col items-center">
          <h1 className='text-xl text-zinc-100  border-zinc-600' >{data.first}</h1>
          <h1 className='text-xl text-zinc-100  border-zinc-600' >{data.sec}</h1>
          <h1 className='text-xl text-zinc-100  border-zinc-600' >{data.the}</h1>
          <h1 className='text-xl text-zinc-100  border-zinc-600' >{data.for}</h1>
          <h1 className='text-xl text-zinc-100  border-zinc-600' >{data.fiv}</h1>
          <h1 className='text-xl text-zinc-100  border-zinc-600' >{data.sev}</h1>

        </div>

      </div>
    </motion.div>

  )
}

export default Icon