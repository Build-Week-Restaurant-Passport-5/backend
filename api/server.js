const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const restaurantsRouter = require('../restaurants/restaurants-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/restaurants', restaurantsRouter);

server.get("/", (req, res) => {
   res.send(` 
   
   <h1>Hey there!</h1>
   <p>Everyhing is running might fine...</p>
   
   `);
});


module.exports = server; 