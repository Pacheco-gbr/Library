import express from 'express';
import { StudentController } from '../controllers';
import { auth } from '../../../../shared/presentation/middlewares/auth.middleware';

export const studentsRoutes = () => {
    const router = express.Router();

    const studentController = new StudentController();

    router.post('/students', auth, studentController.createStudent);

    return router;
}