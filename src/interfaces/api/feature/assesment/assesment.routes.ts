import express from 'express';
import validateRequest from '../../helper/validation.helper';
import Assessment from '../../dto/Assessment';
import doReassess from './assesment.controller';

const router = express.Router();

router.post('/assessments', validateRequest(Assessment), doReassess);

export default router;
