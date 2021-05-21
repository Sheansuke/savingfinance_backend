import supertest from "supertest";
import mongoose from "mongoose";
import app, { server } from "../src/app";

test("should all users", async () => {
  const users = await supertest(app).get("/user/getAllUsers/").expect(200);
  expect(users.body.length).toBeGreaterThan(-1);
});
afterAll(() => {
  mongoose.disconnect();
  server.close();
});
