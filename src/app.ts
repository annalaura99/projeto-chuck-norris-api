import express from 'express';
import jokeRoutes from './routes/jokeRoutes';

const app = express();
app.use(express.json());

app.use('/api/jokes', jokeRoutes);

export default app;
