import { NextFunction, Request, Response } from "express";
import { ZodError, z } from "zod";
import { HttpResponse } from "../../../../shared/presentation/http";

export const createLibrarianValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const scheme = z.object({
        name: z.string().nonempty(),
        email: z.string().email(),
        password: z.string().min(5),
    });
    try {
        const data = scheme.parse(req.body);
        Object.assign(req.body, data);

        return next();
    } catch (error: any) {
        if (error instanceof ZodError) {
            const responseError: HttpResponse[] = error.issues.map((issue) => ({
                success: false,
                message: issue.message,
            }));
            return res.status(400).json(responseError);
        }
        throw error;
    }
};
