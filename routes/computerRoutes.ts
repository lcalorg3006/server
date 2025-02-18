import { Router } from 'express';
import { addComputer, removeComputer, searchComputer, getComputersByClassroom } from '../controllers/computerController';

const router = Router();

router.post('/', addComputer);
router.delete('/', removeComputer);
router.get('/search', searchComputer);
router.get('/:classroomId', getComputersByClassroom);

export default router;
