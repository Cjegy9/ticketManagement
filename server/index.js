const express = require('express');
const app = express();
const port = 3002;
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');

const { User } = require('./Models/User');

dotenv.config();

const db = process.env.CONNECTION_URL;
console.log(process.env.CONNECTION_URL)
mongoose
  .connect(db)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));


app.use(express.json());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.get('/', (req, res) => {
  User.find((err, results) => {
    if (err) return console.log(err);
    res.send(results);
  })
});

app.post('')

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});