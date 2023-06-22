import React from 'react'

function Body() {
  return (
    <>
        <div id='headingContainer' className='flex flex-col items-center mb-4'>
            <div id="headingTop" className='text-green font-["Chivo"] text-center text-[26px] leading-[38px]'>
                <h2>PUBLISH YOUR PODCASTS <span className='text-white'>EVERYWHERE.</span></h2>
            </div>
        </div>
        <div id='textContainer' className='text-lightPurple font-["Chivo"] text-[15px] leading-[25px] text-center'>
            <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
        </div>
    </>
  )
}

export default Body