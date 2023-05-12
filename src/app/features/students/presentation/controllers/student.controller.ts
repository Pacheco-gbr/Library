import { Request, Response } from "express";
import { CustomError } from "../../../../shared/errors";
import { HttpResponse } from "../../../../shared/presentation/http";
import { CreateStudentUseCase } from "../../domain/usecase/create-student.usecase";

export class StudentController {
    async createStudent(req: Request, res: Response) {
        const { cpf, phone, address } = req.body;
        try {
            const useCase = new CreateStudentUseCase();
            const student = await useCase.execute({ cpf, phone, address });

            const response: HttpResponse = {
                success: true,
                message: "Student created successfully",
                data: student,
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
