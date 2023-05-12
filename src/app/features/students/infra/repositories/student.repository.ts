import { appDataSource } from "../../../../shared/infra/db/data-source";
import { StudentEntity } from "../../../../shared/infra/db/entities/student.entity";
import { CreateStudentDTO, StudentDetailDTO } from "../../domain/dtos";

export class StudentRepository {
    private _repository = appDataSource.getRepository(StudentEntity);

    async saveStudent(student: CreateStudentDTO): Promise<StudentDetailDTO> {
        const entity = this._repository.create({
            cpf: student.cpf,
            phone: student.phone,
            address: student.address,
        });

        await this._repository.save(entity);

        return this.mapperToUserDetail(entity);
    }

    async existStudentByCpf(cpf: string): Promise<boolean> {
        const exist = await this._repository.exist({ where: { cpf } });

        return exist;
    }

    private mapperToUserDetail(entity: StudentEntity) {
        return {
            id: entity.id,
            cpf: entity.cpf,
            phone: entity.phone,
            address: entity.address,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
