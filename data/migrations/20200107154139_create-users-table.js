/* * 

REGISTRATION:

unique `username` - String

* strong `password` - String

* a `name` - String

* a valid `city` - String

* a valid and unique `email` - String

 */


 

exports.up = function(knex) {
  return knex.schema

    .createTable("users_table", user => {
      user.increments();
      user
        .string("username", 128)
        .notNullable()
        .unique();
      user.string("password", 128).notNullable();
      user.string("name", 128).notNullable();
      user.string("city");
      user.string("email").notNullable();
    })

    .createTable("restaurants_table", restaurant => {
      restaurant.increments();
      restaurant.string("restaurantName").notNullable();
      restaurant.string("streetAddress");
      restaurant.string("city");
      restaurant.string("zipcode");
      restaurant.string("phoneNumber");
      restaurant.string("websiteURL");
      restaurant.integer("myRating");
      restaurant.text("notes");
      restaurant
        .boolean("stamped")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("food")
  .dropTableIfExists("users");
};
