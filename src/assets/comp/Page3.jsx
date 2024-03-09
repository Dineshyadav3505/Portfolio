import React, { useRef, useState } from 'react'
import Icon from './Icon'
import { Link } from 'react-router-dom';



const Page3 = () => {

    let data =[
        { name:'FrontEnd', first:'HRML',    sec:'CSS',         the:'Tailwind',    for:'javaScript', fiv:'typescript', six:'react js', sev:'next js' },
        { name:'BackEnd',  first:'Node Js', sec:'Express Js',  the:'JavaScript ', for:'Java',        fiv:'Python' ,                                                     },
        { name:'DataBase', first:'MySql',  sec:'MongoDB ',     the:'Redis',       for:''    ,                                             },
        { name:'Devops',   first:'Docker',  sec:'GIT',         the:'Github',         for:'AWS'     ,                                                   },
        // {img:'src/assets/img/icons8-python-144.png', alt:'python'},
        // {img:'src/assets/img/icons8-java-logo-144.png', alt:'java'},
        // {img:'src/assets/img/icons8-php-96.png', alt:'php'},
        // {img:'src/assets/img/icons8-node-js-144.png', alt:'nodejs'},
        // {img:'src/assets/img/icons8-redis.svg', alt:'Redis'},
        // {img:'src/assets/img/icons8-mysql-logo-144.png', alt:'mysql'},
        // {img:'src/assets/img/icons8-mongodb-144.png', alt:'javascript'},
        // {img:'src/assets/img/icons8-github.svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-git.svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-flask-128.png', alt:'javascript'},
        // {img:'src/assets/img/icons8-figma.svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-express-js (1).svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-django-144.png', alt:'javascript'},
        // {img:'src/assets/img/icons8-c++-150.png', alt:'javascript'},
        // {img:'src/assets/img/icons8-c-sharp-logo-2-144.png', alt:'javascript'},
        // {img:'src/assets/img/icons8-amazon-web-services.svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-adobe-premiere-pro.svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-adobe-photoshop.svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-adobe-illustrator.svg', alt:'javascript'},
        // {img:'src/assets/img/icons8-adobe-after-effects.svg', alt:'javascript'},


    ]

    let ref = useRef(null);


  return (
    <div ref={ref} className="Page3 w-full h-screen px-20 py-20 flex justify-center items-center">
        <div className="back w-full h-full rounded-xl flex justify-center items-center relative bg-zinc-500">
            <h1 className='text-9xl font-semibold text-gray-400'>Skills.</h1>
            <div  className="front absolute z-10 h-[100%] w-[100%] flex justify-center items-center gap-14 rounded-xl flex-wrap ">
                {data.map((item,index)=>(
                    <Icon data={item} out={ref}/>
                ))}

            </div>

        



        </div>
    </div>
  )
}

export default Page3