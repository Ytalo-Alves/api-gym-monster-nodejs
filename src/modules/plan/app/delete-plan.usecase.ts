import { PlanRepository } from "../domain/plan.repository";

export class DeletePlanUseCase {
  constructor(private planRepository: PlanRepository) {}

  async execute(id: string): Promise<void> {
    const plan = await this.planRepository.findById(id);
    if (!plan) {
      throw new Error("Plan not found.");
    }

    await this.planRepository.delete(id);
  }
}
