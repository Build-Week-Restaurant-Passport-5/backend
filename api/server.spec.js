const server = require("./server.js");
const request = require("supertest");

describe("server.js", () => {
  test("verify testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

describe("GET /", () => {
  it("return status 200", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("return text/html", async () => {
    const response = await request(server).get("/");
    expect(response.type).toEqual("text/html");
  });
});
});
