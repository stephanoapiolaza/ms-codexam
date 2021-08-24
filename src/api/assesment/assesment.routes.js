'use strict'

const express = require('express');
const router = express.Router();
const {doReassess} = require('./assesment.controller');

router.get('/assesments', doReassess);

module.exports = router;
