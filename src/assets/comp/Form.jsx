import React from 'react'
import { Textarea } from "keep-react";
import { useForm } from 'react-hook-form';

const Form = () => {

  const { register, handleSubmit, reset } = useForm();
  const formsubmit = (data) => {
    console.log(data);
    reset();
  }
  
  return (
    <div className="px-28 w-full h-[80vh] flex justify-center items-center">
      <div className="h-[90%] w-[70%] rounded-2xl bg-zinc-800 flex flex-col items-center gap-20 ">
        <h1 className='text-center text-[2vw] font-semibold capitalize mt-10 text-zinc-100'>Contact me!</h1>


        <form className='flex flex-col items-center gap-10 ' action="" onSubmit={handleSubmit(formsubmit)} >
          <input {...register('name')}  className='h-10 w-[35vw] pl-5 rounded-lg outline-none ' type="text" placeholder='Name' />
          <input {...register('email')} className='h-10 w-[35vw] pl-5 rounded-lg outline-none  ' type="email" placeholder='Email'/>

          <Textarea {...register('message')} className='pl-5 rounded-lg outline-none ' id="comment" placeholder="Your Suggestion.."withBg={true} color="gray" border={true} rows={4}/>

          <button  className='px-10 py-1 bg-zinc-200 capitalize font-bold rounded-2xl mt-10 ' type="submit">send</button>
        </form>


      </div>

    </div>
  )
}

export default Form