import type { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/create-user.controller";
import { UpdateUserController } from "../controllers/update-user.controller";

export async function userRoutes(app: FastifyInstance) {
  const createUserController = new CreateUserController();
  const updateUserController = new UpdateUserController();

  app.post("/create-user", (request, reply) =>
    createUserController.handle(request, reply)
  );

  app.put("/update-user/:id", (request, reply) =>
    updateUserController.handle(request, reply)
  );
}
