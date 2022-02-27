import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer id="footer">
          <div id="nav_wrapper">
      <nav id="navbar">
        <div id="logo">
          <h2 href="" style={{ color: 'white' }}>Save Our Oceans</h2>
        </div>
        <ul id="nav_items">
          <Link id="item" to="/dashboard">Facebook</Link>
          <Link id="item" to="/profile">Instagram</Link>
          <Link id="item" to="/">LinkedIn</Link>
        </ul>
      </nav>
    </div>
</footer>
  )
}

export default Footer