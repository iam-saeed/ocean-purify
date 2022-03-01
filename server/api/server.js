const express = require('express');
const cors = require('cors');
const userRouter = require("../api/routes/UserRouter.js");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/users", userRouter);

module.exports = server;