import { FastifyInstance } from "fastify";
import { CreatePlanController } from "../controllers/create-plan.controller";
import { ListPlansController } from "../controllers/list-plans.controller";
import { GetPlanController } from "../controllers/get-plan.controller";
import { UpdatePlanController } from "../controllers/update-plan.controller";
import { DeletePlanController } from "../controllers/delete-plan.controller";

export async function planRoutes(app: FastifyInstance) {
  app.post("/", new CreatePlanController().handle);
  app.get("/", new ListPlansController().handle);
  app.get("/:id", new GetPlanController().handle);
  app.put("/:id", new UpdatePlanController().handle);
  app.delete("/:id", new DeletePlanController().handle);
}
