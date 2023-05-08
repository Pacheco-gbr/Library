import express from "express";
import { LibrarianController } from "../controllers/librarian.controller";
import { createLibrarianValidator } from "../middlewares/create-librarian-validator.middleware";

export const librarians = () => {
    const router = express.Router();

    const librarianController = new LibrarianController();

    router.post(
        "/librarians",
        createLibrarianValidator,
        librarianController.createLibrarian
    );

    return router;
};
