require('dotenv').config();
require('express-async-errors');

const port = process.env.API_PORT || 3000;
const express = require('express');

const router = require('./routes');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(port, () => console.log('ouvindo porta', port));

// ...
