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
          <a id="item" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer "href="https://www.facebook.com">Facebook</a>
          <a id="item" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer "href="https://www.instagram.com">Instagram</a>
          <a id="item" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer "href="https://www.linkedin.com">LinkedIn</a>
        </ul>
      </nav>
    </div>
</footer>
  )
}

export default Footer