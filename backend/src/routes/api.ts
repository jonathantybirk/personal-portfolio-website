import { Router } from 'express';
import { insertCourses } from '../controllers/coursesController';
import { insertProjects } from '../controllers/projectsController';

const router = Router();

// Modify these routes to accept GET requests for testing purposes
router.get('/insert-courses', insertCourses);
router.get('/insert-projects', insertProjects);

// Keep the POST routes for actual use
router.post('/insert-courses', insertCourses);
router.post('/insert-projects', insertProjects);

export default router;
