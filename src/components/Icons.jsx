import React from 'react';
import Spotify from '../assets/desktop/spotify.svg'
import Apple from '../assets/desktop/apple-podcast.svg'
import Google from '../assets/desktop/google-podcasts.svg'
import Pocket from '../assets/desktop/pocket-casts.svg'

function Icons() {
  return (
    <>
        <div id="spotify">
            <img src={Spotify} alt="Spotify" className='w-[56px] h-[17px] md:w-[96px] md:h-[29px] xl:mr-10'/>
        </div>
        <div id="apple">
            <img src={Apple} alt="Apple" className='w-[45px] h-[17px] md:w-[78px] md:h-[29px] xl:mr-10' />
        </div>
        <div id="google">
            <img src={Google} alt="Google" className='w-[73px] h-[11px] md:w-[125px] md:h-[18px] xl:mr-[27px]' />
        </div>
        <div id="pocket">
            <img src={Pocket} alt="Pocket" className='w-[77px] h-[15px] md:w-[129px] md:h-[26px]' />
        </div>
    </>
  )
}

export default Icons