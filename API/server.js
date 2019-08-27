const express = require('express');

const userRouter = require('./users/user-router.js');

const server = express();

server.use(express.json());
server.use('/users', userRouter);

module.exports = server;