exports.up = function(knex) {
  return knex.schema

    .createTable("users", user => {
      user.increments();
      user
        .string("username")
        .notNullable()
        .unique();
      user.string("password").notNullable();
      user.string("name").notNullable();
      user.string("city").notNullable();
      user.string("email").notNullable();
    })

    .createTable("food", yum => {
      yum.increments();
      yum.string("restaurantName").notNullable();
      yum.string("streetAddress");
      yum.string("city");
      yum.string("zipcode");
      yum.string("phoneNumber");
      yum.string("websiteURL");
      yum.integer("myRating").notNullable();
      yum.text("notes");
      yum
        .boolean("stamped")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("food").dropTableIfExists("users");
};


/*

For later use..

yum
.integer("user_id")
.unsigned()
.notNullable()
.references("users.id")
.onDelete("CASCADE")
.onUpdate("CASCADE");

*/