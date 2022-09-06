const express = require('express');
const app = express();
const port = 3002;

// cluster pass mr4vwsoMn1ZnXtEs
// mongodb+srv://ceyster:mr4vwsoMn1ZnXtEs@eytracker-cluser0.0cra9qj.mongodb.net/test

app.use(express.json());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.get('/', (req, res) => {
  res.json({ "foo": "bar"})
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});