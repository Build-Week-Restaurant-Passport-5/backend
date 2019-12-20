const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findFood,
  add,
  update,
  destroy
};

function find() {
  return db("food");
}

function findById(id) {
  return db("food").where({ id });
}

function add(foodData) {
  return db("food").insert(foodData);
}

function update(changes, id) {
  return db("food")
    .where({ id })
    .update(changes);
}

function destroy(id) {
  return db("food")
    .where({ id })
    .del();
}
