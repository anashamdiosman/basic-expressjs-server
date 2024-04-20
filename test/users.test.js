const request = require("supertest");
const app = require("../server");

describe("POST /api/users/login", () => {
  describe("Providing username and password", () => {
    test("Providing correct credentials, should return 200", async () => {
      const response = await request(app).post("/api/users/login").send({
        username: "thomas.martin24",
        password: "`m9pfR.M@kTd",
      });

      expect(response?.statusCode)?.toBe(200);
    });

    test("Providing wrong credentials, should return 404", async () => {
      const response = await request(app).post("/api/users/login").send({
        username: "thomas.martin24",
        password: "`m9pfR.M@kT",
      });

      expect(response?.statusCode)?.toBe(404);
    });
  });

  describe("Providing bad request", () => {
    test("should return 400", async () => {
      const response = await request(app).post("/api/users/login").send({});

      expect(response?.statusCode)?.toBe(400);
    });
  });
});

describe("POST /api/users/sign-up", () => {
  describe("Providing ok request", () => {
    test("Providing correct credentials, should return 200", async () => {
      const response = await request(app).post("/api/users/sign-up").send({
        username: "anas",
        password: "password",
        first_name: "Anas",
        last_name: "Osman",
      });

      expect(response?.statusCode)?.toBe(200);
    });

    test("Providing already existing username, should return 409", async () => {
      const response = await request(app).post("/api/users/sign-up").send({
        username: "thomas.martin24",
        password: "password",
        first_name: "Anas",
        last_name: "Osman",
      });

      expect(response?.statusCode)?.toBe(409);
    });
  });

  describe("Providing bad request", () => {
    test("should return 400", async () => {
      const response = await request(app).post("/api/users/login").send({});

      expect(response?.statusCode)?.toBe(400);
    });
  });
});
