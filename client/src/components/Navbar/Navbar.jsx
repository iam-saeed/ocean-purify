import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="nav_wrapper">
      <nav id="navbar">
        <div id="logo">
          <h1 href="" style={{ color: 'white' }}>Ocean Purify</h1>
        </div>
        <ul id="nav_items">
          <Link id="item" to="/dashboard">Dashboard</Link>
          <Link id="item" to="/profile">Profile</Link>
          <Link id="item" to="/">Logout</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar