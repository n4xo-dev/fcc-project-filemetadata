import express from 'express';
import fileRouter from './fileRouter.js';

function apiRouter(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/fileanalyse', fileRouter)
}

export default apiRouter;