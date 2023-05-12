import { CustomError } from "../../../../shared/errors";
import { StudentRepository } from "../../infra/repositories/student.repository";
import { CreateStudentDTO, StudentDetailDTO } from "../dtos";

export class CreateStudentUseCase {
    async execute(
        createStudentDTO: CreateStudentDTO
    ): Promise<StudentDetailDTO> {
        const studentRepository = new StudentRepository();

        const exist = await studentRepository.existStudentByCpf(
            createStudentDTO.cpf
        );

        if (exist) throw new CustomError("This already has an account.");

        const student = await studentRepository.saveStudent(createStudentDTO);

        return student;
    }
}
