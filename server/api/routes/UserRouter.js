const express = require('express');
const User = require("../models/user-model.js");
const bcrypt = require("bcryptjs");

const router = express.Router();

const checkIfUserExists = async (req, res, next) => {
    try {
        const rows = await User.findBy({ username: req.body.username });
        if(rows.length){
            req.userData = rows[0];
            next();
        } else {
            res.status(401).json({ message: 'Account does not exist' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

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

router.post("/login", checkIfUserExists,  (req, res) => {
    try {
        const { password } = req.body;
        const verified = bcrypt.compareSync(password, req.userData.password)
        if(verified) {
            res.status(200).json({ message: 'logged in' })
        } else {
            res.status(401).json({ message: "Username or password is incorrect." })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post("/progress", async (req, res) => {
    try {
        const { data } = req.body;
        const newProgress = await User.addProgress({
            progress: data
        })
        res.status(201).json(newProgress)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;