import { StudentRepository } from "../domain/student.repository";

export class DeleteStudentUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(id: string): Promise<void> {
    const student = await this.studentRepository.findById(id);
    if (!student) {
      throw new Error("Student not found.");
    }

    await this.studentRepository.delete(id);
  }
}
