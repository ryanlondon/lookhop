require('dotenv').config();
const express = require('express');
const path = require('path');

const LOCAL_PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/login/instagram', (req, res) => res.send());

app.listen(process.env.PORT || LOCAL_PORT)