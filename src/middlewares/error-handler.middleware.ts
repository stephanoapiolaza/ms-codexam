import * as core from 'express-serve-static-core';
import logger from '../logger/logger';

export default (app: core.Express) => {
  const logErrors = (err: any, req: any, res: any, next: any) => {
    logger.log({
      level: 'error',
      label: `origen: ${res.req.originalUrl} , method: ${res.req.method}`,
      message: err.stack,
    });
    next(err);
  };

  const clientErrorHandler = (err: any, req: any, res: any, next: any) => {
    if (req.xhr) {
      logger.log({
        level: 'error',
        label: `origen: ${res.req.originalUrl} , method: ${res.req.method}`,
        message: err,
      });
      res.status(500).send({ error: err });
    } else {
      logger.log({
        level: 'error',
        label: `origen: ${res.req.originalUrl} , method: ${res.req.method}`,
        message: err,
      });
      next(err);
    }
  };

  app.use(logErrors);
  app.use(clientErrorHandler);
};
