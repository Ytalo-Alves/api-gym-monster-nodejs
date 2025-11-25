import fastify from "fastify";
import { userRoutes } from "../modules/user/presentation/routes/user.routes";
import { ErrorHandler } from "./error-handler";
import jwt from "@fastify/jwt";
import cors from "@fastify/cors";
import { authenticateRoutes } from "../modules/auth/presentation/routes/authenticate.routes";
import { studentRoutes } from "../modules/student/presentation/routes/student.routes";
import { planRoutes } from "../modules/plan/presentation/routes/plan.routes";
import { contractRoutes } from "../modules/contract/presentation/routes/contract.routes";

import multipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import path from "node:path";

export const app = fastify();

// Configure CORS to allow frontend requests
app.register(cors, {
  origin: ["http://localhost:3000"], // Frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
});

app.register(jwt, {
  secret: "api-gym-monster-nodejs",
});

app.register(multipart);

app.register(fastifyStatic, {
  root: path.join(__dirname, "../../uploads"),
  prefix: "/uploads/",
});

app.setErrorHandler(ErrorHandler);

app.register(userRoutes);
app.register(authenticateRoutes);
app.register(studentRoutes, { prefix: "students" });
app.register(planRoutes, { prefix: "plans" });
app.register(contractRoutes);
