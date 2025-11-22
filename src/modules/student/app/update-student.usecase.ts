import { Student, UpdateStudentData } from "../domain/student.entity";
import { StudentRepository } from "../domain/student.repository";

export class UpdateStudentUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(id: string, data: UpdateStudentData): Promise<Student> {
    const student = await this.studentRepository.findById(id);
    if (!student) {
      throw new Error("Student not found.");
    }

    if (data.email) {
      const emailAlreadyExists = await this.studentRepository.findByEmail(
        data.email
      );
      if (emailAlreadyExists && emailAlreadyExists.id !== id) {
        throw new Error("Email already in use by another student.");
      }
    }

    if (data.cpf) {
      const cpfAlreadyExists = await this.studentRepository.findByCpf(data.cpf);
      if (cpfAlreadyExists && cpfAlreadyExists.id !== id) {
        throw new Error("CPF already in use by another student.");
      }
    }

    return this.studentRepository.update(id, data);
  }
}
