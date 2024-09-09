import express from 'express';
import apiRouter from './routes/api';

const app = express();

app.use('/api', apiRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
