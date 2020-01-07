
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
       {
        restaurantName: "Dao Kitchen",
        streetAddress: "34455 N 27th Dr",
        city: "Phoenix",
        zipcode: "85085",
        phoneNumber: "(623) 516-8886",
        websiteURL: "http://www.chinesefood1970.com/",
        myRating: "3",
        notes: "The chicken was good, not so much the lemonade.",
        stamped: true,
       }
      ]);
    });
};