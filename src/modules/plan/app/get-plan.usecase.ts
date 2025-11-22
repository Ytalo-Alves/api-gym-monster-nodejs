import { Plan } from "../domain/plan.entity";
import { PlanRepository } from "../domain/plan.repository";

export class GetPlanUseCase {
  constructor(private planRepository: PlanRepository) {}

  async execute(id: string): Promise<Plan> {
    const plan = await this.planRepository.findById(id);
    if (!plan) {
      throw new Error("Plan not found.");
    }
    return plan;
  }
}
