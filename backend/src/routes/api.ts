import express from 'express';
import { getCourses } from '../controllers/coursesController';
import { getProjects } from '../controllers/projectsController';

const router = express.Router();

// Define routes
router.get('/courses', getCourses);
router.get('/projects', getProjects);

export default router;
