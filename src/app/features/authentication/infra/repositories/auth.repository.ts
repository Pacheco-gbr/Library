import { appDataSource } from "../../../../shared/infra/db/data-source";
import { LibrarianEntity } from "../../../../shared/infra/db/entities/librarian.entity";
import { LoginDetailDTO } from "../../domain/dtos/auth.dto";

export class AuthRepository {
    private _repository = appDataSource.getTreeRepository(LibrarianEntity);

    async getLibrarianByEmail(
        email: string
    ): Promise<LoginDetailDTO | undefined> {
        const librarian = await this._repository.findOneBy({ email });

        if (!librarian) return undefined;

        return {
            id: librarian.id,
            name: librarian.name,
            email: librarian.email,
            password: librarian.password,
            token: "",
        };
    }
}
