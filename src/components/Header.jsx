import React from 'react'
import Logo from '../assets/desktop/logo.svg'

function Header() {
  return (
    <>
        <div id='logo'>
            <img src={Logo} alt="the logo" />
        </div>
        <div id='name'>
            <h1>pod</h1>
        </div>
    </>
  )
}

export default Header