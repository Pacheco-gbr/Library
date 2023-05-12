import { Express } from "express";
import { loginRoutes } from "../../app/features/authentication/presentation/routes/auth.routes";
import { studentsRoutes } from "../../app/features/students/presentation/routes/student.routes";

export const setupRoutes = (app: Express) => {
    app.get("/", (request, response) =>
        response.status(200).json("The API is running successfully!")
    );
    app.use(loginRoutes());
    app.use(studentsRoutes());
};
