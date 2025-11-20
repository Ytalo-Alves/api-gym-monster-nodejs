import fastify from "fastify";
import { userRoutes } from "../modules/user/presentation/routes/user.routes";
import { ErrorHandler } from "./error-handler";
import jwt from "@fastify/jwt";
import { authenticateRoutes } from "../modules/auth/presentation/routes/authenticate.routes";

export const app = fastify();

app.register(jwt, {
  secret: "api-gym-monster-nodejs",
});

app.setErrorHandler(ErrorHandler);

app.register(userRoutes);
app.register(authenticateRoutes);
