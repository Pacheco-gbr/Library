import { Request, Response } from "express";
import { HttpResponse } from "../../../../shared/presentation/http";
import { LibrarianRepository } from "../../infra/repositories/librarian.repository";

export class LibrarianController {
    async createLibrarian(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const librarianRepository = new LibrarianRepository();

            const librarian = await librarianRepository.saveUser({
                name,
                email,
                password,
            });

            const response: HttpResponse = {
                success: true,
                message:
                    "The librarian was successfully created in the Library system",
                data: librarian,
            };
            return res.status(200).json(response);
        } catch (error: any) {
            const responseError: HttpResponse = {
                success: false,
                message: "Error in the process of creating.",
            };
            throw responseError;
        }
    }
}
