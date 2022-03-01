import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
    console.log(formValues)
  }
  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/users/login", formValues)
    .then(() => {
      navigate("/dashboard")
    })
    .catch(() => {
      console.log('error')
    })
  }

  return (
    <div className="wrapper">
    <form id="login_form" onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <AccountCircleIcon style={{ fontSize: "100px" }} />
        </Grid>
        <Grid item>
          <TextField
            id="username-input"
            name="username"
            label="Username"
            type="text"
            value={formValues.username}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password-input"
            name="password"
            label="Password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </Grid>
        <br />
        <Grid item>
          <a href="/signup">Create new account</a>
        </Grid>
        <br />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
    </div>
  )
}

export default Login