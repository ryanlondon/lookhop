require('dotenv').config();
const express = require('express');
const path = require('path');
const request = require('request');

const LOCAL_PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/login/callback', (req, res) => {
  console.log('received oauth callback', req.params());
  res.send();
});

app.listen(process.env.PORT || LOCAL_PORT)