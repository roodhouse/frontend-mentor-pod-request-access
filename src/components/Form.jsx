import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

// check pattern below..

function Form() {

    const [input, setInput] = useState('')

    const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: {
        email: ''
    }}, {validateOnChange: true});

    useEffect(() => {
        var input = document.getElementById('email');
        setInput(input)
        
        input.addEventListener('invalid', function(event) {
            event.preventDefault();
            console.log(errors)
        })
    },[])
    
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
            <div id='emailDiv' className='mb-4 w-full'>
                <input 
                    pattern=''
                    title='Please match the format I asked you to'
                    id='email' 
                    type="email" 
                    {...register("email", {
                        required: 'An email is required',
                        validate: {
                            maxLength: (v) => 
                            v.length <= 50 || "The email should have at most 50 characters",
                            matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Oops! Please check your email',
                        },
                    })} 
                    placeholder='Email address' 
                    className='bg-medBlue rounded-[28px] w-full decoration-white/[.50] font-["Chivo"] text-sm leading-[28px] pl-8 py-2 text-white' />
                {/* <p>{errors.email?.message}</p> */}
                {errors.email?.message && (
                    <p className='text-warning'>{errors.email.message}</p>
                )}
            </div>
            <div id='submitDiv' className='w-full'>
                <input name='submit' type="submit" id="submit" value='Request Access' className='w-full rounded-[28px] bg-green shadow-[0_25px_20px_-20px_rgba(84,230,175,0.50)] text-darkBlue text-sm leading-[28px] font-["Chivo"] py-[9px]' />                    
            </div>
        </form>
    </>
  )
}

export default Form