import { hash } from "bcryptjs"
import { CreateUserData, userRepository } from "../domain/user.interface"
import { EmailInUseError } from "../../../core/errors/EmailInUseError"

export class CreateUserUseCase {
  constructor(private userRepository: userRepository) {}

  async create(data: CreateUserData) {
    const userExists = await this.userRepository.findByEmail(data.email)

    if (userExists) {
      throw new EmailInUseError()
    }

    const passwordHash = await hash(data.password, 8)

    const user = await this.userRepository.create({
      ...data,
      password: passwordHash
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt
    }
  }
}
