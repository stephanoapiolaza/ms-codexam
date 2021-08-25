import * as core from 'express-serve-static-core';
import assessmentRoutes from './api/assesment/assesment.routes';

const routing = (app: core.Express) => {
  // controllers
  app.use('/api/v1/', assessmentRoutes);
  // All undefined asset or api routes should return a 404
  app.route('/:url(config|controllers|middlewares|models|node_modules|routes|services)/*').get((req, res) => res.status(404).send());
  app.route('/*').get((req, res) => res.status(404).send());
};

export default routing;
