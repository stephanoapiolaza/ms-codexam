'use strict'

const express = require('express')
const morgan = require('morgan');
const winston = require('./config/winston');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler.middleware');


const app = express()
const limit = '50mb';
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({limit}));
app.use(morgan('combined', { stream: winston.stream }));

app.get('/health', (req, res) => {
    res.send({status: 'UP'});
});

// routes
routes.setRoutes(app)

// error handler
errorHandler.setupErrorHandler(app)

module.exports = app
