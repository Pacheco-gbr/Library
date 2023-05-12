import { Request, Response } from "express";
import { CustomError } from "../../../../shared/errors";
import { HttpResponse } from "../../../../shared/presentation/http";
import { CreateBookUseCase } from "../../domain/usecase";

export class BookController {
    async createBook(req: Request, res: Response) {
        const { title, synopsis, author } = req.body;

        try {
            const useCase = new CreateBookUseCase();
            const book = await useCase.execute({ title, synopsis, author });

            const response: HttpResponse = {
                success: true,
                message: "Book created successfully",
                data: book,
            };
            return res.status(200).json(response);
        } catch (error: any) {
            if (error instanceof CustomError) {
                const responseError: HttpResponse = {
                    success: false,
                    message: error.message,
                };

                return res.status(400).json(responseError);
            }
            throw error;
        }
    }
}
