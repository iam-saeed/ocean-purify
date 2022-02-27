import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Profile.css'

const Profile = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <div className="main_wrapper">
      <div className="points_collected_today">
        <div className="point_wrapper">
          <div id="points-box">
            <h2 className="h2">0</h2>
          </div>
          <div id="points_desc_box">
            <p style={{ fontWeight: 'bold' }}>Points Earned</p>
          </div>
          <div className="history">
        <div className="history_pickups">
          <div className="pickup_title">
            <h4>History of Purifications</h4>
          </div>
          <div className="pickup-sum">
            <div className="point-total">

            <p id="points">130</p>
            </div>
          </div>
        </div>
      </div>
        </div>
        
    
    
      </div>

    </div>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default Profile