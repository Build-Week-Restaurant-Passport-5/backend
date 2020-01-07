const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
   res.send(` 
   
   <h1>Hey there!</h1>
   <p>Everyhing is running might fine...</p>
   
   `);
});


module.exports = server; 