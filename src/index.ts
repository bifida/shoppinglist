import express, { Request, Response } from 'express'
import dotenv from 'dotenv';

const apiRouter = require('./service/ApiRouter');
const config = require('../appsettings.json');
const app = express();

dotenv.config();

app.use(apiRouter);
app.get('/', async (req: Request, res: Response) => {
    res.status(200).send(config.Version).end()
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
  console.log('Press Ctrl+C to quit.')
});






