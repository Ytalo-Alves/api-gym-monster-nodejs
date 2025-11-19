import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "../core/errors/app-error";
import { ZodError } from "zod";

export function ErrorHandler(
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply
) {

  if(error instanceof AppError) {
    return reply.status(error.statusCode).send({
      status: 'error',
      message: error.message
    })
  }

  if(error instanceof ZodError) {
    return reply.status(400).send({
      status: 'fail',
      message: 'Validation error',
      errors: error.issues,
    })
  }



  return reply.status(500).send({
    status:'error',
    message: 'Internal server error'
  })
}