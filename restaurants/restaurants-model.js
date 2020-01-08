const db = require("../data/dbConfig.js");

module.exports = {
 find,
 findById,
 create,
 remove
};

function find() {
  return db("restaurants_table");
}


function findById(id) {
  return db('restaurants_table').where({id}).first();
}


function create(restaurant) {
  return db('restaurants_table').create(restaurant)
         .then(ids => {
             const [id] = ids;
             return findById(id)
         }) 
}


function remove(id) {
    return db('restaurants_table').where('id', id).del()
            .then(count => {
                return db('restaurants_table');
            })
            .then(restaurant => {
                return restaurant
            })
          }