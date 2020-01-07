const users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');


module.exports = (req, res, next) => {
    // look for the credentials
    const { username, password } = req.headers
    // validate that they exist ... we didn't have this part in class...
    if (!(username && password)) {
        res.status(401).json({ message: "invalid credentials" });
    } else {
        // find the user in the DB
        users.findBy({ username })
            // limit the resulting array to the first element, so we have an
            // element and not an array to work with...
            .first()
            .then(_user => {
                
                if (_user && bcrypt.compareSync(password, _user.password)) {
               
                    next()
                } else {
            
                    res.status(401).json({ messege: "Invalid Credentials" })
                }
            })
            // if there is a DB problem... or other problem on our end...
            .catch((err) => { res.status(500).json({ messege: err }) })
    }
}