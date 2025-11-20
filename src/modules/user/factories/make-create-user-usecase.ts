import { CreateUserUseCase } from "../application/create-user.usecase";
import { PrismaUserRepository } from "../infra/prisma-user.repository";

export function makeCreateUserUseCase() {
  const userRepository = new PrismaUserRepository();
  return new CreateUserUseCase(userRepository);
}
