import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-right"></div>
    </div>
  )
}    
// you stoped at 20:51

export default Navbar
