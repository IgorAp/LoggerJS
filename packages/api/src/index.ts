import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import pinoHttp from 'pino-http';

const pino = pinoHttp();
const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(pino);

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen(process.env.PORT || 3000);