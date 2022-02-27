import React, { useState } from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email:'',
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
  
  const handleSubmit = () => {
    console.log("submit")
  }
  return (
    <form onSubmit={handleSubmit}>
    <Grid container alignItems="center" justify="center" direction="column">
      <Grid item>
        <AccountCircleIcon style={{ fontSize: "100px" }} />
      </Grid>
      <Grid item>
        <TextField
          id="fullname-input"
          name="fullname"
          label="Full Name"
          type="text"
          value={formValues.fullname}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id="email-input"
          name="email"
          label="Email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
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
        <a href="/login">Already have an account?</a>
      </Grid>
      <br />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Grid>
  </form>
  )
}

export default Signup