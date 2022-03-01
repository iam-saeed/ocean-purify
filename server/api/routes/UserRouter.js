const express = require('express');
const User = require("../models/user-model.js");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { fullname, email, username, password } = req.body;
        const hash = await bcrypt.hashSync(password, 10);
        const newUser = await User.addUser({
            fullname: fullname,
            email: email,
            username: username,
            password: hash
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/login", (req, res) => {
    try {
        const password = req.body.password;
        const verified = bcrypt.compareSync(password, req.formValues.password)
        if(verified) {
            res.json('Logged in')
        } else {
            res.status(401).json({ message: "Username or password is incorrect." })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;