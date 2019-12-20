const express = require("express");

const db = require("../data/db-config.js");
const food = require("../food/food-model.js");

const router = express.Router();

// boiler plate

router.get("/", (req, res) => {
  food
    .find() // helper function from food model
    .then(yum => {
      res.json(yum);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get restaurants" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  food
    .findById(id)
    .where({ id })
    .then(yum => {
      const food = yum[0];

      if (yum) {
        res.json(yum);
      } else {
        res
          .status(404)
          .json({ message: "Could not find restaurant with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get restaurant" });
    });
});

router.post("/", (req, res) => {
  const foodData = req.body;

  food
    .add(foodData)
    .then(ids => {
      res.status(201).json({ created: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new restaurant" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  food
    .update(changes, id)
    .then(count => {
      if (count) {
        res.json({ update: count });
      } else {
        res
          .status(404)
          .json({ message: "Could not find restaurant with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update restaurant" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  food
    .destroy(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: "Could not find food with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete food" });
    });
});




module.exports = router;
