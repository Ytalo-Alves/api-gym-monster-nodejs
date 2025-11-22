import { describe, expect, it, beforeEach } from "vitest";
import { InMemoryPlanRepository } from "../../../src/modules/plan/infra/in-memory/in-memory-plan.repository";
import { DeletePlanUseCase } from "../../../src/modules/plan/app/delete-plan.usecase";

let planRepository: InMemoryPlanRepository;
let sut: DeletePlanUseCase;

describe("Delete Plan Use Case - Unit Test", () => {
  beforeEach(() => {
    planRepository = new InMemoryPlanRepository();
    sut = new DeletePlanUseCase(planRepository);
  });

  it("should be able to delete a plan", async () => {
    const createdPlan = await planRepository.create({
      name: "Monthly Plan",
      duration: 1,
      price: 99.99,
    });

    await sut.execute(createdPlan.id);

    const plan = await planRepository.findById(createdPlan.id);
    expect(plan).toBeNull();
  });

  it("should not be able to delete a non-existing plan", async () => {
    await expect(() => sut.execute("non-existing-id")).rejects.toBeInstanceOf(
      Error
    );
  });
});
