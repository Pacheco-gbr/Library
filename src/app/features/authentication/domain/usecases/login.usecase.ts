import { BCryptPassword } from "../../../../shared/adapters/crypto";
import { JwtToken } from "../../../../shared/adapters/jwt";
import { CustomError } from "../../../../shared/errors";
import { AuthRepository } from "../../infra/repositories/auth.repository";
import { LoginDTO, LoginDetailDTO } from "../dtos/auth.dto";

export class LoginUseCase {
    async execute(loginDTO: LoginDTO): Promise<LoginDetailDTO> {
        const repository = new AuthRepository();
        const bcrypt = new BCryptPassword();

        const librarian = await repository.getLibrarianByEmail(loginDTO.email);

        if (!librarian) throw new CustomError("Incorret email or password.");

        const correctPassword = await bcrypt.comparePassword(
            loginDTO.password,
            librarian.password as string
        );

        if (!correctPassword)
            throw new CustomError("Incorret a email or password.");

        const jwtToken = new JwtToken();

        const librarianData = {
            id: librarian.id,
            name: librarian.name,
            email: librarian.email,
            password: librarian.password,
        };

        const token = jwtToken.sign(librarianData);

        return {
            ...librarianData,
            token,
        };
    }
}
