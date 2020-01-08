// require statements

// require db
const db = require("../data/dbConfig");

// require Restaurants
const Restaurants = require("./restaurants-model.js");

// describe 1
describe("Restaurants -create ", () => {
    it("is able to create new restaurant", async () => {
      await db("restaurants_table").truncate();
  
      // declare a new restaurant
      const newRestaurant = await Restaurants.create({
          user_id: 1, 
        restaurantName: "burger king",
        stamped: false
      });
  
          // declare another new restaurant
      const newRestaurant2 = await Restaurants.create({
        user_id: 1,
        restaurantName: "salad 2 go",
        stamped: false
      });
  
      // calling Restaurants db
      const Item = await db("restaurants_table");
  
      // tests length of new stuff above 
      expect(Item).toHaveLength(2);
  
      // test that new restaurant name is correct
      expect(newRestaurant.restaurantName).toBe("burger king");
      expect(newRestaurant2.restaurantName).toBe("salad 2 go");
    });
  });