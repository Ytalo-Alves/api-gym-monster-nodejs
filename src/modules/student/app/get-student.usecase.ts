import { Student } from "../domain/student.entity";
import { StudentRepository } from "../domain/student.repository";

export class GetStudentUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(id: string): Promise<Student> {
    const student = await this.studentRepository.findById(id);
    if (!student) {
      throw new Error("Student not found.");
    }
    return student;
  }
}
