import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { app } from "../../../src/http/server";
import { prisma } from "../../../src/infra/prisma";
import request from "supertest";

describe("Update user - e2e", () => {
  beforeAll(async () => {
    await app.ready();
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await app.close();
  });

  it("Should be able update a user", async () => {
    const createUserResponse = await request(app.server)
      .post("/create-user")
      .send({
        name: "User Update",
        email: "userupdate@email.com",
        password: "123456",
        role: "admin",
      })
      .expect(201);

    const userId = createUserResponse.body.id;

    const updateResponse = await request(app.server)
      .put(`/update-user/${userId}`)
      .send({
        name: "User",
      });

    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.body.name).toBe("User");
  });
});
