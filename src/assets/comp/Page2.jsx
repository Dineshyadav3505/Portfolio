import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';

const Page2 = () => {


    let data=[
        {img:"https://images.unsplash.com/photo-1709730185387-9cac9f8e30e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",project:'ecom',link:"https://www.google.com/"},
        {img:"https://images.unsplash.com/photo-1682685796852-aa311b46f50d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",project:'planti',link:'https://www.youtube.com/'},
        {img:"https://images.unsplash.com/photo-1709418354495-fc4e5dd6d1f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",project:'dentsic',link:'https://www.google.com/'},
        {img:"https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",project:'unknown',link:'https://www.google.com/'},
    ]


  return (
    <div className='min-h-screen w-full px-28 '>
        <div id="h1">            
            <h1 className='text-[7vw] font-semibold capitalize'> my Projects..</h1>
            <p className='mt-2 text-[1.5rem] text-zinc-500'># I am passonate about latest tech</p>
        </div>
        <div className="overview flex justify-between mt-10">
            <p className='text-[1.2vw ] capitalize font-semibold '>Project</p>
            <p className='text-[1.2vw ] capitalize font-semibold '>Explore</p>
        </div>
        <div>
            {data.map((elem, index)=>(
                <Project data={elem} key={index}/>
            ))}
        </div>

        <div className="icon flex justify-center items-center h-10 mt-10  ">
            <Link className='text-zinc-100 text-center flex gap-2 uppercase px-5 py-1 hover:scale-110  bg-zinc-900 rounded-3xl' to="/project"> Clone Project <img className=' bg-slate-50 h-6 w-6 rounded-full p-1 ' src="https://cdn.hugeicons.com/icons/arrow-right-03-stroke-rounded.svg" alt="arrow-right-03" width="24" height="24" /> </Link>

        </div>


        

      
    </div>
  );
}

export default Page2;
