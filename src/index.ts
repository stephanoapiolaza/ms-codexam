import * as dotenv from 'dotenv';
import 'reflect-metadata';
import app from './interfaces/api/app';
import winston from './common/config/winston';

const environmentVariables = dotenv.config();

if (environmentVariables.error) {
  throw environmentVariables.error;
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
  winston.debug(`API running on port ${port}`);
});
