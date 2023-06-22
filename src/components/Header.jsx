import React from 'react'
import Logo from '../assets/desktop/logo.svg'

function Header() {
  return (
    <>
        <div id='logo'>
            <img src={Logo} alt="the logo" />
        </div>
    </>
  )
}

export default Header