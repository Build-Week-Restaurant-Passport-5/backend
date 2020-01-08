/* 


--------------------------------------
USER REGISTRATION:
--------------------------------------

unique `username` - String

* strong `password` - String

* a `name` - String

* a valid `city` - String

* a valid and unique `email` - String






--------------------------------------
BEEN THERE RESTAURANTS:
--------------------------------------

* `restaurantName` - String

* `streetAddress` - String

* `city` - String

* `zipcode` - String

* `phoneNumber` - String

* `websiteURL` - String/URL

* `myRating` (1 thru 5) - Int

* `notes` - String

* `stamped` - Boolean

 */ 


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('restaurants_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants_table').insert([
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