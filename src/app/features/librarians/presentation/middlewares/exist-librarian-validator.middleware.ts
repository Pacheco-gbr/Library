import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../../../shared/presentation/http";
import { LibrarianRepository } from "../../infra/repositories/librarian.repository";

export const existLibrarianValidator = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email } = req.body;

    const librarianRepository = new LibrarianRepository();

    const exist = await librarianRepository.existLibrarianByEmail(email);

    if (exist) {
        const responseError: HttpResponse = {
            success: false,
            message: "This email already exists.",
        };
        return res.status(400).json(responseError);
    }
    return next();
};
