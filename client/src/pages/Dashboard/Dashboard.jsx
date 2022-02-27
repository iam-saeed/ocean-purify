import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Button from "@material-ui/core/Button";
import Modal from '../../components/Modal/Modal.jsx'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import './Dashboard.css'
import Footer from '../../components/Footer/Footer.jsx';
import Organizations from '../../components/Organizations/Organizations.jsx';
import Donate from '../../components/Donate/Donate.jsx';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    location: '',
    trashItem: '',
    quantity: null,
    points: 1
  })


  const handleClick = () => {
    setIsOpen(true)
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
    console.log(formValues)
  }
  return (
    <>
    <header>
        <Navbar />
    </header>
    <div id="main_wrapper">
      <br />
      <div className="dash_wrapper">
        <div className="trash_log_wrapper">
          <div className="logger_title">
          <h2>Log Your Purification</h2>
          </div>
          <div className="logger-btn">

          <Button onClick={handleClick} variant="contained" color="primary">Log Here</Button>
          </div>
        </div>
      </div>
      <Modal open={isOpen}>
      <div className="modal-card">
        <div className="modal-header">

          </div>
                    <div className="modal-body">
                            <Grid item>
                            <TextField
                              id="location-input"
                              name="location"
                              label="Location"
                              type="text"
                              value={formValues.location}
                              onChange={handleChange}
                              />
                            </Grid>
                            <Grid item>
                            <TextField
                              id="trashItem-input"
                              name="trashItem"
                              label="Trash Item"
                              type="text"
                              value={formValues.trashItem}
                              onChange={handleChange}
                              />
                            </Grid>
                            <Grid item>
                            <TextField
                              id="quantity-input"
                              name="quantity"
                              label="Quantity"
                              type="text"
                              value={formValues.quantity}
                              onChange={handleChange}
                              />
                            </Grid>
                            <br />
                            <Grid item>
                              <Button variant="contained"color="primary" style={{ color: 'white' }}>Log Contribution</Button>
                            </Grid>
                            <br />
                            <Grid item align="center">
                            <Button variant="contained" color="secondary" className="close-button" onClick={() => setIsOpen(false)}>Exit</Button>
                            </Grid>
          </div>
        </div>
      </Modal>
      <br />
      <div className="progress">
        <div className="total_pickups">
          <div className="pickup_title">
            <h4>Total Purifications</h4>
          </div>
          <div className="pickup-sum">
            <div className="point-total">

            <p id="points">65</p>
            </div>
          </div>
          <div className="pickup_title">
            <h4>Total Points Earned</h4>
          </div>
          <div className="pickup-sum">
            <div className="point-total">

            <p id="points">130</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2>Learn How You Can Help</h2>
      <div className="progress">
        <div className="total_pickups">
          <div className="pickup_title">
            <h4>Organizations</h4>
          </div>
          <div className="pickup-sum">
            <Organizations />
          </div>
          <div className="pickup_title">
            <h4>Donate</h4>
          </div>
          <div className="pickup-sum">
            <Donate />
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

export default Dashboard