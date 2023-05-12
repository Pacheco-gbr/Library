import express from "express";
import { auth } from "../../../../shared/presentation/middlewares/auth.middleware";
import { BookController } from "../controllers/book.controller";
import { createBookValidator } from "../middlewares";

export const bookRoutes = () => {
    const router = express.Router();

    const bookController = new BookController();

    router.post("/books", auth, createBookValidator, bookController.createBook);

    return router;
};
