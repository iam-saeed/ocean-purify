import React from 'react'
import { Link } from 'react-router-dom'

const LandingNavbar = () => {
  return (
    <div id="nav_wrapper">
    <nav id="navbar" style={{ backgroundColor: 'white' }}>
      <div id="logo">
        <h1 href="" style={{ color: '#00B4D8' }}>Ocean Purify</h1>
      </div>
      <ul id="nav_items">
        <Link style={{ color: '#00B4D8', fontWeight: 'bold', fontSize: '22px'}} id="item" to="/login">Login</Link>
        <Link style={{ color: '#00B4D8', fontWeight: 'bold', fontSize: '22px' }} id="item" to="/signup">Sign Up</Link>
      </ul>
    </nav>
  </div>
  )
}

export default LandingNavbar