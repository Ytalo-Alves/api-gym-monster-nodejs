import type { FastifyInstance } from "fastify";
import { createUserSchema, updatedUserSchema } from "./user.schema";
import { CreateUserUseCase } from "./application/create-user.usecase";
import { UpdateUserUseCase } from "./application/update-user.usecase";
import { PrismaUserRepository } from "./infra/prisma-user.repository";


const userRepository = new PrismaUserRepository();

export async function createUser(app: FastifyInstance) {

  app.post("/create-user", async (request, reply) => {
    const data = createUserSchema.parse(request.body);
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const result = await createUserUseCase.create(data);

    return reply.status(201).send(result);
  });

  app.put("/update-user/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const data = updatedUserSchema.parse(request.body);

    const updateUserUseCase = new UpdateUserUseCase(userRepository);
    const result = await updateUserUseCase.update(id, data);

    return reply.status(200).send(result);
  });
}
