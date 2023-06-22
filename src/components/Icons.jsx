import React from 'react';
import Spotify from '../assets/desktop/spotify.svg'
import Apple from '../assets/desktop/apple-podcast.svg'
import Google from '../assets/desktop/google-podcasts.svg'
import Pocket from '../assets/desktop/pocket-casts.svg'

function Icons() {
  return (
    <>
        <div id="spotify">
            <img src={Spotify} alt="Spotify" className='w-[56px] h-[17px]'/>
        </div>
        <div id="apple">
            <img src={Apple} alt="Apple" className='w-[45px] h-[17px]' />
        </div>
        <div id="google">
            <img src={Google} alt="Google" className='w-[73px] h-[11px]' />
        </div>
        <div id="pocket">
            <img src={Pocket} alt="Pocket" className='w-[77px] h-[15px]' />
        </div>
    </>
  )
}

export default Icons