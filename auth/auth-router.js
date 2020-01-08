/* 

--------------------------------------
NON-EXISTING USER CAN:
--------------------------------------

Can:
    - create
    - register 
    
an authenticated account as a `passportHolder`


 */



const router = require("express").Router();
const bcrypt = require("bcryptjs");
const authorize = require('./authenticate-middleware.js');
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const Users = require("../users/users-model.js");


router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      ///////// token   /////////
      const token = genToken(saved);

      ///////// saved + token   /////////
      res.status(201).json({ created_user: saved, token: token });
    })

    .catch(error => {
      console.log(req.body)
      res.status(500).json(error);
    });
});

router.post("/login", authorize, (req, res) => {
  let { username, password } = req.body;
 
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        ///////// token   /////////
        const token = genToken(user);

        res.status(200).json({
          username: user.username,
          token: token
     
        });
      } else {
        res.status(401).json({
        
          message: "Invalid Credentials"
         
        });
      }
    })
    .catch(error => {
 
      res.status(500).json(error);
    });
});

function genToken(user) {
  const payload = {
    userid: user.id, // insert automatically
    username: user.username // insert automatically

    // other things: rights/priveleges? go here ..
  };

  const options = { expiresIn: "1h" };

  const token = jwt.sign(payload, secrets.jwtSecret, options);

  return token;
}

module.exports = router;