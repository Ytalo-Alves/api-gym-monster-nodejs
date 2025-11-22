import { CreateStudentData, Student } from "../domain/student.entity";
import { StudentRepository } from "../domain/student.repository";

export class CreateStudentUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(data: CreateStudentData): Promise<Student> {
    const studentAlreadyExists = await this.studentRepository.findByEmail(
      data.email
    );
    if (studentAlreadyExists) {
      throw new Error("Student already exists with this email.");
    }

    const cpfAlreadyExists = await this.studentRepository.findByCpf(data.cpf);
    if (cpfAlreadyExists) {
      throw new Error("Student already exists with this CPF.");
    }

    return this.studentRepository.create(data);
  }
}
