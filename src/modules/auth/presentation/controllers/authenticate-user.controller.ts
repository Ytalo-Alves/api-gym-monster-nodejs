import type { FastifyReply, FastifyRequest } from "fastify";
import { makeAuthenticateUserUseCase } from "../../factories/make-authenticate-user.usecase";


export async function AuthenticateUserController(request: FastifyRequest, reply: FastifyReply) {
  const {email, password} = request.body as any
  const auth = makeAuthenticateUserUseCase()

  try {
    const token = await auth.execute({email, password})
    return reply.status(200).send(token) 
  } catch {
    return reply.status(401).send({message: 'Unauthorized'})
  }
}