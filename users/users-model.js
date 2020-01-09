const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users_table").select("id", "username", "password");
}

function findBy(filter) {
  return db("users_table").where(filter);
}

async function add(user) {
  const [id] = await db("users_table").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users_table")
    .where({ id })
    .first();
}
