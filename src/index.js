require('dotenv').config();

const port = process.env.API_PORT || 3000;
const express = require('express');

const router = require('./routes');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use(router);

app.listen(port, () => console.log('ouvindo porta', port));

// ...
