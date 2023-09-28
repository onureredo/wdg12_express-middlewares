import express from 'express';
import pool from './db/server.js';
import booksRouter from './routes/booksRouter.js';
import { getOnlyMiddleware } from './middlewares/getOnlyMiddleware.js';
import { errorHandler } from './middlewares/errorHandler.js';
import authRouter from './routes/authRouter.js';

const app = express();
const port = 8000;

app.use(express.json());
// app.use(getOnlyMiddleware);

app.use('/books', booksRouter);
app.use('/auth', authRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
