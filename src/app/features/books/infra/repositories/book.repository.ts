import { appDataSource } from "../../../../shared/infra/db/data-source";
import { BookEntity } from "../../../../shared/infra/db/entities/book.entity";
import { BookDetailDTO, CreateBookDTO } from "../../domain/dtos";

export class BookRepository {
    private _repository = appDataSource.getRepository(BookEntity);

    async saveBook(book: CreateBookDTO): Promise<BookDetailDTO> {
        const entity = this._repository.create({
            title: book.title,
            synopsis: book.synopsis,
            author: book.author,
        });
        await this._repository.save(entity);

        return this.mapperToBookDetail(entity);
    }

    async existBookByTitle(title: string): Promise<boolean> {
        const exist = await this._repository.exist({
            where: {
                title,
            },
        });

        return exist;
    }

    private mapperToBookDetail(entity: BookEntity) {
        return {
            id: entity.id,
            title: entity.title,
            synopsis: entity.synopsis,
            author: entity.author,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
