import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Button from "@material-ui/core/Button";
import Modal from '../../components/Modal/Modal.jsx'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import './Dashboard.css'
import Footer from '../../components/Footer/Footer.jsx';

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
          <div className="modal-title">
            
          </div>
              <button className="close-button" onClick={() => setIsOpen(false)}>&times;</button>
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
                              <Button variant="contained"color="white" style={{ color: '#13a89e' }}>Log Contribution</Button>
                            </Grid>
          </div>
        </div>
      </Modal>
      <div className="progress">
        sadf
      </div>
    </div>
    <footer id="how_you_can_help">
        <Footer />
    </footer>
      </>
  )
}

export default Dashboard