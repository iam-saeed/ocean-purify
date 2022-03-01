const db = require("../../data/dbConfig.js");

const getAllUsers = () => {
    return db("users")
}

const getUserById = (id) => {
    return db("users").where("id", id).first()
}

const getUserProgress = (id) => {
    return db("users")
}

const findBy = (filter) => {
    return db("users").where(filter).orderBy("users.id")
}

const addUser = async (user) => {
    await db("users")
    .insert({ fullname: user.fullname, email: user.email, username: user.username, password: user.password })
    .then((ids) => {
        return getUserById(ids[0])
    })
}

const addProgress = async (user) => {
    await db("users")
    .insert({ progress: user.data })
    .then((ids) => {
        return getUserById([ids[0]])
    })
}

module.exports = {
    getUserById,
    getAllUsers,
    addUser,
    findBy,
    addProgress
}