import request from "supertest";
import { describe } from "node:test";
import app from "../src/app";

describe("GET /", () => {
  test("should return an array of todos", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("POST /", () => {
  describe("given a title and Description", () => {
    test("should respond with the status of 200", async () => {
      const response = await request(app).post("/").send({
        title: "learn something",
        Description: true,
      });
      expect(response.statusCode).toBe(200);
    });

    test("should send json in the content type header", async () => {
      const response = await request(app).post("/").send({
        title: "learn something",
        Description: true,
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("when the title and Description is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [{ title: "title" }, { Description: true }, {}];

      for (const body of bodyData) {
        const response = await request(app).post("/").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});
