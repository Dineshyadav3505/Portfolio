import React from 'react'




const Project = ({data}) => {


  return (
    <div>
        <div className="project mt-5 ">
            <div className="img  flex justify-center items-center">
                <img className='flex w-[80vw] h-[45vh] object-cover rounded-xl ' src={data.img} alt="Image Not Found"/>
            </div>
            <div className="project1disc mt-5 flex  justify-between">
                <p className=' uppercase font-semibold text-zinc-900 '  >{data.project}</p>
                <p className=' uppercase text-zinc-900 font-semibold' ><a className='cursor-none'  target="_blank" href={data.link}>Explore</a></p>
            </div>
            <hr className='mt-2 ' />
        </div>
    </div>
  )
}

export default Project