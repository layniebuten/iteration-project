import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Token Imports
dotenv.config();
const MONGO_TOKEN = process.env.MONGO_URL as string;

// Server Setup
const app = express();
const PORT = 3000;

mongoose.connect(MONGO_TOKEN);
mongoose.connection.once('open', () => {
  console.log('Successfully connected to database!');
});

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  return res
    .status(200)
    .sendFile(path.resolve(import.meta.dirname, 'index.html'));
});

// 404 error handler
app.use((req: Request, res: Response) => {
  return res.sendStatus(404).send('Page not found.');
});

// global error handler 500
interface Error {
  log: string;
  status: number;
  message: { err: string };
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Initialization
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}...`);
});
