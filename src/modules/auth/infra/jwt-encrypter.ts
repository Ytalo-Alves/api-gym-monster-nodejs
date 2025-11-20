import { FastifyInstance } from "fastify";
import { Encrypter } from "./encrypter";

export class FastifyJwtEncrypter implements Encrypter {
  constructor(private readonly app: FastifyInstance) {}

  async encrypt(payload: { sub: string; role: string }): Promise<string> {
    return this.app.jwt.sign(payload);
  }
}
