import fastify from "fastify";
import { userRoutes } from "../modules/user/presentation/routes/user.routes";
import { ErrorHandler } from "./error-handler";

export const app = fastify();

app.setErrorHandler(ErrorHandler);

app.register(userRoutes);
