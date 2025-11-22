import { FastifyInstance } from "fastify";
import { CreateStudentController } from "../controllers/create-student.controller";
import { ListStudentsController } from "../controllers/list-students.controller";
import { GetStudentController } from "../controllers/get-student.controller";
import { UpdateStudentController } from "../controllers/update-student.controller";
import { DeleteStudentController } from "../controllers/delete-student.controller";

export async function studentRoutes(app: FastifyInstance) {
  app.post("/", new CreateStudentController().handle);
  app.get("/", new ListStudentsController().handle);
  app.get("/:id", new GetStudentController().handle);
  app.put("/:id", new UpdateStudentController().handle);
  app.delete("/:id", new DeleteStudentController().handle);
}
