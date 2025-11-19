import fastify from "fastify";
import { createUser } from "../modules/user/create-user.controller";
import { ErrorHandler } from "./error-handler";

export const app = fastify();

app.setErrorHandler(ErrorHandler);

app.register(createUser);
