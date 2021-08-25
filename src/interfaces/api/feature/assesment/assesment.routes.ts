import express from 'express';
import validationHelper from '../../helper/validation.helper';
import Assessment from '../../dto/Assessment';
import doReassess from './assesment.controller';

const router = express.Router();

router.post('/assessments', validationHelper(Assessment), doReassess);

export default router;
