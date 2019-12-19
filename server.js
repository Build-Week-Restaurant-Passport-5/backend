const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
   res.send(` 
   
   <h1>WAASSSAAAAAAAAAAP!</h1>
   <p>😎</p>
   
   `);
});


module.exports = server; 