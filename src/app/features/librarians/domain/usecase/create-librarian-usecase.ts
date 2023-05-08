import { BCryptPassword } from "../../../../shared/adapters/crypto";
import { CustomError } from "../../../../shared/errors";
import { LibrarianRepository } from "../../infra/repositories/librarian.repository";
import { CreateLibrarianDTO, LibrarianDetailDTO } from "../dtos";

export class CreateLibrarianUseCase {
    async execute(createLibrarianDTO: CreateLibrarianDTO): Promise<LibrarianDetailDTO> {
        const librarianRepository = new LibrarianRepository();

        const exist = await librarianRepository.existLibrarianByEmail(createLibrarianDTO.email);

        if (exist) throw new CustomError('Email already exists.');

        const bcrypt = new BCryptPassword();

        const hashPassword = await bcrypt.hashPassword(createLibrarianDTO.password);

        const dto = Object.assign(createLibrarianDTO, {password: hashPassword});

        const librarian = await librarianRepository.saveUser(dto);

        return librarian;

    }
}