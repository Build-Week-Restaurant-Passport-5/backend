const server = require("./server.js");
const request = require("supertest");

// describe("server.js", () => {
//   test("verify testing environment", () => {
//     expect(process.env.DB_ENV).toBe("testing");
//   });

describe("GET /", () => {
  it("should return status 200", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should return a JSON object fron the index route", async () => {
    const response = await request(server).get("/");
    expect(response.type).toEqual("text/html");
  });
});
