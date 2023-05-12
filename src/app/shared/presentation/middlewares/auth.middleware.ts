import { NextFunction, Request, Response } from "express";
import { JwtToken } from "../../adapters/jwt";
import { HttpResponse } from "../http";
import { TokenError } from "../../errors/token.error";

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;

    const responseError: HttpResponse = {
        success: false,
        message: "Invalid token.",
    };

    if (!authorization) {
        return res.status(401).json(responseError);
    }

    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json(responseError);
    }

    try {
        const auth = new JwtToken().verify(token);

        // req.user = {
        //     id: auth.id,
        // };

        return next();
    } catch (error: any) {
        if (error instanceof TokenError) {
            return res.status(401).json(responseError);
        }
        throw error;
    }
};
