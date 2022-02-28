import React from 'react'
import { Link } from 'react-router-dom'

const LandingFooter = () => {
  return (
    <footer id="footer">
    <div id="nav_wrapper">
<nav id="navbar" style={{ backgroundColor:"white" }}>
  <div id="logo">
    <h2 href="" style={{ color: '#00B4D8' }}>Save Our Oceans</h2>
  </div>
  <ul id="nav_items">
    <Link style={{ color: '#00B4D8', fontWeight: 'bold' }} id="item" to="/dashboard">Facebook</Link>
    <Link style={{ color: '#00B4D8', fontWeight: 'bold' }} id="item" to="/profile">Instagram</Link>
    <Link style={{ color: '#00B4D8', fontWeight: 'bold' }} id="item" to="/">LinkedIn</Link>
  </ul>
</nav>
</div>
</footer>
  )
}

export default LandingFooter