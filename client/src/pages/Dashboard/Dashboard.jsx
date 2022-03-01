import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Button from "@material-ui/core/Button";
import Modal from '../../components/Modal/Modal.jsx'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { nanoid } from 'nanoid';

import './Dashboard.css'
import Footer from '../../components/Footer/Footer.jsx';
import Organizations from '../../components/Organizations/Organizations.jsx';
import Donate from '../../components/Donate/Donate.jsx';
import axios from 'axios';

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    id: 0,
    location: '',
    trashItem: '',
    quantity: '',
    points: 2
  })

  const addTrashInput = (location, trashItem, quantity) => {
    const newInput = { id: "" + nanoid(), location: location, trashItem: trashItem, quantity: parseInt(quantity), points: 2}
    setData([...data, newInput])
    axios.post("")
  }
  let q = 0;
  let value = 0;

  const addPoints = () => {
    for(let i = 0; i < data.length; i++){
      value += data[i].points
    }
    return value
  }

  const addQuantity = () => {
    for(let i = 0; i < data.length; i++){
      q += data[i].quantity
    }
    return q
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrashInput(formValues.location, formValues.trashItem, formValues.quantity, formValues.points)
    setIsOpen(false)
    setFormValues({
      location: '',
      trashItem: '',
      quantity: '',

    })
  }

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
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center"  direction="column">
              <Grid item>
                <TextField
                  id="location-input"
                  name="location"
                  label="Location"
                  type="text"
                  value={formValues.location}
                  onChange={handleChange}
                  required
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
                  required
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
                  required
                />
              </Grid>
              <br />
              <Grid item>
                <Button variant="contained" color="primary" type="submit" style={{ color: 'white' }}>Log Contribution</Button>
              </Grid>
              <br />
              <Grid item >
                <Button onClick={() => setIsOpen(false)} variant="contained"color="secondary" style={{ color: 'white' }}>Exit</Button>
              </Grid>
            </Grid>
          </form>
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

            <p id="points">{addQuantity()} </p>
            </div>
          </div>
          <div className="pickup_title">
            <h4>Total Points Earned</h4>
          </div>
          <div className="pickup-sum">
            <div className="point-total">
          
            <p id="points">{addPoints() * addQuantity()} </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2>Past Purifications</h2>
      <div className="progress">
        <div className="total_pickups">
          {data.length === 0 ?    <div className="pickup_title">
            <h3>No Past Purifications Yet</h3> 
          </div> :     <div className="pickup-sum-history">
            {data.map(org => (
              <div id="how_you_can_help">
                <p><strong>Location: </strong>{org.location}</p>
                <p><strong>Trash Item: </strong> {org.trashItem}</p>
                <p><strong>Quantity: </strong>{org.quantity}</p>
              
              </div>
            ))}
            <br />
          </div>}

          <div className="pickup_title">
   
          </div>
  
        </div>
        
      </div>
      <br />
      <h2>More Ways You Can Help</h2>
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