import { FastifyInstance } from "fastify";
import { PrismaContractRepository } from "../../infra/prisma-contract.repository";
import { PrismaStudentRepository } from "../../../student/infra/prisma-student.repository";
import { PrismaPlanRepository } from "../../../plan/infra/prisma-plan.repository";
import { CreateContractUseCase } from "../../app/create-contract.usecase";
import { GetStudentContractsUseCase } from "../../app/get-student-contracts.usecase";
import { CreateContractController } from "../controllers/create-contract.controller";
import { GetStudentContractsController } from "../controllers/get-student-contracts.controller";

export async function contractRoutes(app: FastifyInstance) {
  const contractRepository = new PrismaContractRepository();
  const studentRepository = new PrismaStudentRepository();
  const planRepository = new PrismaPlanRepository();

  // Use cases
  const createContractUseCase = new CreateContractUseCase(
    contractRepository,
    studentRepository,
    planRepository
  );
  const getStudentContractsUseCase = new GetStudentContractsUseCase(
    contractRepository
  );

  // Controllers
  const createContractController = new CreateContractController(
    createContractUseCase
  );
  const getStudentContractsController = new GetStudentContractsController(
    getStudentContractsUseCase
  );

  // Routes
  app.post("/contracts", (request, reply) =>
    createContractController.handle(request, reply)
  );

  app.get("/contracts/student/:studentId", (request, reply) =>
    getStudentContractsController.handle(request, reply)
  );
}
