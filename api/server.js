const express = require("express");

const foodRoutes = require("../food/food-routes");

const server = express();

server.use(express.json());
server.use("/food", foodRoutes);

server.get("/", (req, res) => {
  res.send(` 
   
   <h1>WAASSSAAAAAAAAAAP!</h1>
   <p>😎</p>
   
   `);
});

module.exports = server;
