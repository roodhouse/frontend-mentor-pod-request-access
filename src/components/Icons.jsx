import React from 'react';
import Spotify from '../assets/desktop/spotify.svg'
import Apple from '../assets/desktop/apple-podcast.svg'
import Google from '../assets/desktop/google-podcasts.svg'
import Pocket from '../assets/desktop/pocket-casts.svg'

function Icons() {
  return (
    <>
        <div id="spotify">
            <img src={Spotify} alt="Spotify" />
        </div>
        <div id="apple">
            <img src={Apple} alt="Apple" />
        </div>
        <div id="google">
            <img src={Google} alt="Google" />
        </div>
        <div id="pocket">
            <img src={Pocket} alt="Pocket" />
        </div>
    </>
  )
}

export default Icons