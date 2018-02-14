require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/login/instagram', (req, res) => res.send());

app.listen(PORT, () => console.log(`Listening on ${PORT}`))