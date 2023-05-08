import { Request, Response } from "express";
import { CustomError } from "../../../../shared/errors";
import { HttpResponse } from "../../../../shared/presentation/http";
import { CreateLibrarianUseCase } from "../../domain/usecase/create-librarian-usecase";

export class LibrarianController {
    async createLibrarian(req: Request, res: Response) {
        const { name, email, password } = req.body;

        try {
            const useCase = new CreateLibrarianUseCase();
            const librarian = await useCase.execute({ name, email, password });

            const response: HttpResponse = {
                success: true,
                message:
                    "The librarian was successfully created in the Library system",
                data: librarian,
            };
            return res.status(200).json(response);
        } catch (error: any) {
            if (error instanceof CustomError) {
                const responseError: HttpResponse = {
                    success: false,
                    message: "Error in the process of creating.",
                };
                return responseError;
            }
            throw error;
        }
    }
}
