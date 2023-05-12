import { CustomError } from "../../../../shared/errors";
import { BookRepository } from "../../infra/repositories";
import { BookDetailDTO, CreateBookDTO } from "../dtos";

export class CreateBookUseCase {
    async execute(createBookDTO: CreateBookDTO): Promise<BookDetailDTO> {
        const bookRepository = new BookRepository();

        const exist = await bookRepository.existBookByTitle(
            createBookDTO.title
        );

        if (exist) throw new CustomError("This book is already registered.");

        const book = await bookRepository.saveBook(createBookDTO);

        return book;
    }
}
