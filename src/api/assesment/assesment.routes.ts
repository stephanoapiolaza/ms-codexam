import express from 'express';
import doReassess from './assesment.controller';

const router = express.Router();

router.get('/assesments', doReassess);

export default router;
