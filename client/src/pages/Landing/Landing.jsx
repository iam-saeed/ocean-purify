import React from 'react'
import './Landing.css'
import landing from '../../assets/landing-img.jpg';
import LandingNavbar from '../../components/Navbar/LandingNavbar'
import LandingFooter from '../../components/Footer/LandingFooter';

const Landing = () => {
  return (
    <>
    <header>
      <LandingNavbar />
    </header>
    <div className="landing_wrapper">
      <div className="image-wrapper">
        <div className="image">
        <img id="landing" src={landing} alt="" />
        </div>
      </div>
  
    </div>
    <footer>
      <LandingFooter />
    </footer>
    </>
  )
}

export default Landing