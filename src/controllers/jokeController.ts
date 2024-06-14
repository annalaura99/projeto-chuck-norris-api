import { Request, Response } from 'express';
import { getRandomJoke, searchJoke } from '../services/jokeService';
import { logQuery, readLogs } from '../utils/logger';

export const getRandomJokeHandler = async (req: Request, res: Response) => {
    try {
        const joke = await getRandomJoke();
        await logQuery('random', '', joke.value);
        res.json(joke);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

export const searchJokeHandler = async (req: Request, res: Response) => {
    const query = req.query.q as string;
    try {
        const jokes = await searchJoke(query);
        let result = 'No jokes found';
        if (jokes.length > 0) {
            result = jokes.map((joke: any) => joke.value).join('\n');
            await logQuery('search', query, result);
        }
        res.json(jokes);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

export const getLogsHandler = async (req: Request, res: Response) => {
    const { startDate, endDate, startTime, endTime } = req.query;
    console.log('Query Params:', startDate, endDate, startTime, endTime); 
    try {
        const logs = await readLogs(startDate as string, endDate as string, startTime as string, endTime as string);
        console.log('Filtered Logs:', logs); 
        res.json(logs);
    } catch (error) {
        console.error('Error reading logs:', error); 
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getLogsByTimeHandler = async (req: Request, res: Response) => {
    const { time } = req.params;
    const [date, startTime, endTime] = time.split('-');
    try {
        const logs = await readLogs(date, date, startTime, endTime);
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
