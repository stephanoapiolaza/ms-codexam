import * as dotenv from 'dotenv';
import app from './app';
import winston from './config/winston';

const environmentVariables = dotenv.config();

if (environmentVariables.error) {
  throw environmentVariables.error;
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
  winston.debug(`API running on port ${port}`);
});
