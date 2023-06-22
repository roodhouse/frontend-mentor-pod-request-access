import React from 'react'

function Form() {
  return (
    <>
        <form className='flex flex-col justify-center items-center'>
            <div id='email' className='mb-4 w-full'>
                <input id='inputEmail' type="email" placeholder='Email address' className='bg-medBlue rounded-[28px] w-full decoration-white/[.50] font-["Chivo"] text-sm leading-[28px] pl-8 py-2 text-white' />
            </div>
            <div id='submitDiv' className='w-full'>
                <input name='submit' type="submit" id="submit" value='Request Access' className='w-full rounded-[28px] bg-green shadow-[0_25px_20px_-20px_rgba(84,230,175,0.50)] text-darkBlue text-sm leading-[28px] font-["Chivo"] py-[9px]' />                    
            </div>
        </form>
    </>
  )
}

export default Form