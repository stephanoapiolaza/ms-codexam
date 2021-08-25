import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import winston from './config/winston';
import routes from './routes';
import errorHandler from './middlewares/error-handler.middleware';

const app = express();
const limit = '50mb';
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit }));
app.use(morgan('combined', { stream: winston.stream }));

app.get('/health', (req, res) => {
  res.send({ status: 'UP' });
});

// routes
routes(app);

// error handler
errorHandler(app);

export default app;
