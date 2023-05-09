import express from 'express';
import { AuthenticationController } from "../controllers";
import { loginValidation } from "../middlewares";

export const loginRoutes = () => {
    const router = express.Router();

    const authenticationController = new AuthenticationController();

    router.post('/login', loginValidation, authenticationController.login);

    return router;
}