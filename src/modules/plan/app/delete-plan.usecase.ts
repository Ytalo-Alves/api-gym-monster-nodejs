import { prisma } from "../../../infra/prisma";
import { PlanRepository } from "../domain/plan.repository";
import { PlanNotFound } from "../../../core/errors/plan-not-found";
import { PlanHasContracts } from "../../../core/errors/plan-has-contracts";

export class DeletePlanUseCase {
  constructor(private planRepository: PlanRepository) {}

  async execute(id: string): Promise<void> {
    try {
      const plan = await this.planRepository.findById(id);
      if (!plan) {
        throw new PlanNotFound();
      }

      // Verificar se o plano tem contratos associados
      try {
        const contractsCount = await prisma.contract.count({
          where: { planId: id },
        });

        if (contractsCount > 0) {
          throw new PlanHasContracts();
        }
      } catch (error: any) {
        // Se for PlanHasContracts, re-lançar
        if (error instanceof PlanHasContracts) {
          throw error;
        }
        // Se for outro erro do Prisma, logar e re-lançar
        console.error("Erro ao verificar contratos:", error);
        throw error;
      }

      await this.planRepository.delete(id);
    } catch (error: any) {
      // Se já for um AppError, re-lançar
      if (error instanceof PlanNotFound || error instanceof PlanHasContracts) {
        throw error;
      }
      
      // Tratar erros do Prisma
      if (error?.code === 'P2003' || error?.message?.includes('FOREIGN KEY constraint')) {
        throw new PlanHasContracts();
      }
      
      if (error?.code === 'P2025') {
        throw new PlanNotFound();
      }
      
      // Logar erro desconhecido e re-lançar
      console.error("Erro ao deletar plano:", error);
      throw error;
    }
  }
}
