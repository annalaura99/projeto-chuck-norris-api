import { Router } from 'express';
import { getRandomJokeHandler, searchJokeHandler, getLogsHandler, getLogsByTimeHandler } from '../controllers/jokeController';

const router = Router();

router.get('/random', getRandomJokeHandler);
router.get('/search', searchJokeHandler);
router.get('/logs', getLogsHandler);
router.get('/logs/:time', getLogsByTimeHandler);

export default router;
