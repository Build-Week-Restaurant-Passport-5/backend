const db = require("../data/dbConfig");
const Users = require("./users-model.js");

describe("User -add ", () => {
  it("is able to add new User", async () => {
    await db("users_table").truncate();

    // declare a new User
    const newUser = await Users.add({
      username: "apple",
      password: "1234",
      name: "appy",
      city: "new york",
      email: "nyc@hey.org"
    });

    // declare another new User
    const newUser2 = await Users.add({
      username: "orange",
      password: "4321",
      name: "fruit",
      city: "orange county",
      email: "cali@hey.org"
    });

    // calling Users db
    const Item = await db("users_table");

    // tests length of new stuff above
    expect(Item).toHaveLength(2);

    // test that new User name is correct
    expect(newUser.username).toBe("apple");
    expect(newUser2.username).toBe("orange");
  });
});
