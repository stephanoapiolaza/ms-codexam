
'use strict'

require('dotenv').config();
const app = require('./app')
const winston = require('./config/winston')

const port = process.env.PORT || 8080;

app.listen(port, () => {
    winston.debug('API running on port ' + port);
})
