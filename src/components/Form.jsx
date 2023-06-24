import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

function Form() {

    const [input, setInput] = useState('')

    const emailRegex = /\w+@\w+\.\w{2,3}/;
    const valP = document.getElementById('valP')

    function isEmailValid(emailAddress) {
        return emailRegex.test(emailAddress)
    }

    const { register, handleSubmit, formState: {errors} } = useForm({defaultValues: {
        email: ''
    }}, {validateOnChange: true});

    useEffect(() => {
        var input = document.getElementById('email');
        setInput(input)
        
        input.addEventListener('invalid', function(event) {
            event.preventDefault();
            console.log(event.target.value)
            
            if(isEmailValid(event.target.value)) {
                console.log('true')
            } else {
                console.log('false')
                const errorMsg = document.getElementById('errorP');
                errorMsg.innerHTML = 'Oops! Please check your email'
                console.log(errorMsg)

            }
            
        })
        
    },[])
    
    const onSubmit = (data) => {
        console.log(data)
        const errorMsg = document.getElementById('errorP');
                errorMsg.innerHTML = ''
        const clearText = document.getElementById('email')
        clearText.value = ''
        
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center md:flex-row md:flex-wrap'>
            <div id='emailDiv' className='mb-4 w-full md:mb-0 md:w-[50%]'>
                <input 
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
                    className='bg-medBlue rounded-[28px] w-full decoration-white/[.50] font-["Chivo"] text-sm leading-[28px] pl-8 py-2 text-white md:rounded-[28px_0px_0px_28px] md:py-[14px]' />
                
            </div>
            
            <div id='submitDiv' className='w-full md:bg-medBlue md:rounded-[0px_28px_28px_0px] md:py-[5px] md:pr-[5px] md:w-[50%]'>
                <input name='submit' type="submit" id="submit" value='Request Access' className='w-full rounded-[28px] bg-green shadow-[0_25px_20px_-20px_rgba(84,230,175,0.50)] text-darkBlue text-sm leading-[28px] font-["Chivo"] py-[9px] cursor-pointer hover:bg-lightGreen' />                    
            </div>
            <p id='errorP' className='text-warning text-sm font-["Chivo"] pl-8 mt-2'></p>
            {errors.email?.message && (
                    <p id='valP' className='text-warning text-sm font-["Chivo"] pl-8 mt-2'>{errors.email.message}</p>
                    )}
        </form>
    </>
  )
}

export default Form