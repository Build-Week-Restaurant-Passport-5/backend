/* 


--------------------------------------
Authenticated passportHolder:
--------------------------------------

Can:
    - read
    - update
    - delete 

`beenThere` restaurants from a `passport` (a list of all restaurants that they have visited) 


*/

/* 

--------------------------------------

find,
findById,
create,
remove 

--------------------------------------

*/

const router = require("express").Router();

const Restaurants = require("./users-model.js");

// const restricted = require('../auth/authenticate-middleware.js');

router.get("/", (req, res) => {
  Restaurants.find()
    .then(restaurants => {
      res.status(200).json(restaurants);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving restaurants."
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Restaurants.findById(id)
    .then(restaurant => {
      res.status(200).json(restaurant);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error getting restaurant",
        err
      });
    });
});

router.post("/", (req, res) => {
  Restaurant.create(req.body)
    .then(restaurant => {
      res.status(201).json(restaurant);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error adding restaurant"
      });
    });
});

router.put("/:id", (req, res) => {
  Restaurant.update(req.params.id, req.body)
    .then(update => {
      res.status(200).json(update);
    })
    .catch(err => {
      res.status(500).json({ message: "Error updating item", err });
    });
});

router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).json({ message: "Error deleting item", err });
    });
});
