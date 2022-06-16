const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongo = require('./mongo.js');
const grocerieContoller = require('./controllers/grocerieContoller.js');

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(cookieParser());

app.use('/groceries', grocerieContoller);

mongo()
  .then(() => {
    app.listen(5001, () => console.log(`Server is listening on port ${5001}`));
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  });