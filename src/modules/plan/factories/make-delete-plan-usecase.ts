import { DeletePlanUseCase } from "../app/delete-plan.usecase";
import { PrismaPlanRepository } from "../infra/prisma-plan.repository";

export function makeDeletePlanUseCase() {
  const planRepository = new PrismaPlanRepository();
  const deletePlanUseCase = new DeletePlanUseCase(planRepository);
  return deletePlanUseCase;
}
