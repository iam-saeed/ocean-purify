const User = require("../models/user-model.js");

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

module.exports = { checkIfUserExists };