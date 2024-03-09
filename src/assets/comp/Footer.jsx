import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { gsap } from "gsap";

const Footer = () => {

  return (
    <div className='px-28'>
        <h1 className='text-5xl font-bold capitalize'>let's get in touch </h1>
        <p className=' text-base my-5 capitalize'>Connect with me for work, coffee chats, advice, or let's discuss your favorite animes! <br/> Together, we can make a positive impact on the world.</p>

        <div className="link h-20 flex items-center gap-14 ml-5 ">

            <div className="linkedi flex items-center ">
                <a className='capitalize hover:scale-150 '  target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFLeGR7Puc67gAAAY4ThUWIHF8hEhMh0H4jrnVcQ3_bL_Q48qMPqDIh6jhubrFpebYKZqyRl8yu8tSC1zK8QeSUBx6uxdsqlfjC06Ul3BJGwSLYNXjbCNoNQXZ-zcx-4OzfAFk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdinesh-yadav-6aa877198"> 
                <i class="ri-arrow-right-line"></i>
                LinkedIn
                </a>
            </div>

            <div className="github flex items-center">
                <a className='capitalize hover:scale-150 ' id="dark" target="_blank" href="https://github.com/Dineshyadav3505">
                <i class="ri-arrow-right-line"></i>
                github
                </a>
            </div>
            <div className="email flex items-center">
                <a className='capitalize hover:scale-150'id="dark" target="_blank" href="mailto:<dineshydv3505@gmail.com>">
                    <i class="ri-arrow-right-line"></i>
                    email
              
                </a>
                
                
               
            </div>

        </div>
        <p className=' text-base my-5'>Designed and coded by Dinesh Yadav with ♥️ !</p>
        <p className='text-base mb-10' id="copy" >© Dinesh Yadav 2023</p>

    </div>
  )
}


export default Footer