import { appDataSource } from "../../../../shared/infra/db/data-source";
import { LibrarianEntity } from "../../../../shared/infra/db/entities/librarian.entity";
import { CreateLibrarianDTO, LibrarianDetailDTO } from "../../domain/dtos";

export class LibrarianRepository {
    private _repository = appDataSource.getRepository(LibrarianEntity);

    async saveUser(librarian: CreateLibrarianDTO): Promise<LibrarianDetailDTO> {
        const entity = this._repository.create({
            email: librarian.email,
            name: librarian.name,
            password: librarian.password,
        });
        await this._repository.save(entity);
        return this.directionToLibrarianDetail(entity);
    }

    private directionToLibrarianDetail(entity: LibrarianEntity) {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            password: entity.password,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
