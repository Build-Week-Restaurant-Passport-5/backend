const db = require("../data/dbConfig");
const Restaurants = require("./restaurants-model.js");

// describe 1
describe("Restaurants -create ", () => {
  it("is able to create new restaurant", async () => {
    await db("restaurants_table").truncate();

    // declare a new restaurant
    const newRestaurant = await Restaurants.create({
      user_id: 2,
      restaurantName: "burger king",
      stamped: false
    });

    // declare another new restaurant
    const newRestaurant2 = await Restaurants.create({
      user_id: 2,
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

// Test for the find
describe("restaurants -find", () => {
  it("find all restaurants", async () => {
    const foodItem = await Restaurants.find();

    expect(foodItem).toHaveLength(2);
  });
});

// Test for the findById
describe("Restaurants -findById", () => {
  it("find restaurant by id", async () => {
    const foodieItem = await Restaurants.findById(2);

    expect(foodieItem.restaurantName).toBe("salad 2 go");
  });
});

//     // Test for the remove (delete)
// describe("Restaurants -remove", () => {
//     it('remove an app', async () => {
//       const restaurantList = await Restaurants.remove(1)
//       expect(restaurantList).toHaveLength(1)
//     })
//   })
