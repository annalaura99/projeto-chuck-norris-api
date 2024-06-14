import axios from 'axios';

const API_URL = 'https://api.chucknorris.io/jokes';

export const getRandomJoke = async () => {
    const response = await axios.get(`${API_URL}/random`);
    return response.data;
};

export const searchJoke = async (query: string) => {
    const response = await axios.get(`${API_URL}/search`, { params: { query } });
    return response.data.result;
};
