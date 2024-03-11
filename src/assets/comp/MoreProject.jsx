import React from 'react'
import Project from './Project';
import Navbar from './Navbar';
import Footer from './Footer';

const MoreProject = () => {
    let data=[
        {img:"https://images.unsplash.com/photo-1709730185387-9cac9f8e30e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",project:'ecom',link:"https://www.google.com/"},
        {img:"https://images.unsplash.com/photo-1682685796852-aa311b46f50d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",project:'planti',link:'https://www.youtube.com/'},
        {img:"https://images.unsplash.com/photo-1709418354495-fc4e5dd6d1f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",project:'dentsic',link:'https://www.google.com/'},
        {img:"https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",project:'unknown',link:'https://www.google.com/'},
    ]
  return (
    <div>
        <div className="outerbox px-28 mb-20">
            <h1 className='text-center text-[5vw] font-bold'>Clone Projects..</h1>
            <div className="overview flex justify-between mt-10">
                <p className='text-[1.2vw ] capitalize font-semibold '>Project</p>
                <p className='text-[1.2vw ] capitalize font-semibold '>Explore</p>
            </div>
            <div>
                {data.map((elem, index)=>(
                    <Project data={elem} key={index}/>
                ))}
            </div>
        </div>
       
    </div>
  )
}

export default MoreProject