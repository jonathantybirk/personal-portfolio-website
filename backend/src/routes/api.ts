import { Router } from 'express';
import { getCourses, insertCourses } from '../controllers/coursesController';
import { getProjects, insertProjects } from '../controllers/projectsController';

const router = Router();

router.get('/get-courses', getCourses);
router.get('/get-projects', getProjects);

// Optional: Retain the POST routes if you still need them for inserting data
router.post('/insert-courses', insertCourses);
router.post('/insert-projects', insertProjects);

export default router;
