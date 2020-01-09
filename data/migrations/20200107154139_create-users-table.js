/* * 

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

      restaurant
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users_table")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      restaurant.string("restaurantName").notNullable();
      restaurant.string("streetAddress");
      restaurant.string("city");
      restaurant.string("zipcode");
      restaurant.string("phoneNumber");
      restaurant.string("websiteURL");
      restaurant.integer("myRating");
      restaurant.string("notes");
      restaurant
        .boolean("stamped")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("restaurants_table")
    .dropTableIfExists("users_table");
};
