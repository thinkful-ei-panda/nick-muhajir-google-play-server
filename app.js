const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const data = require('./data');

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/apps', (req, res) => {
  res.send(data);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});