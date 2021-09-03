import express from 'express';
import validateRequest from '../../helper/validation.helper';
import Assessment from '../../dto/Assessment';
import { doReassess, startTest } from './assesment.controller';

const router = express.Router();

router.post('/assessments/start', validateRequest(Assessment), startTest);
router.post('/assessments/verify', validateRequest(Assessment, ['verify']), doReassess);
router.post('/assessments/submit', validateRequest(Assessment, ['submit']), doReassess);

export default router;
