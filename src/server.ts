import express from 'express';
import jokeRoutes from './routes/jokeRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/jokes', jokeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
