const express = require('express');
const app = express();
const router = express.Router();

const { Ticket } = require('../Models/Ticket');

router.get('/', (req, res) => {
    Ticket.find((err, results) => {
        if (err) return console.log(err);
        res.send(results);
    });
});

router.post('/create-ticket', (req, res) => {
  Ticket.create(req.body);
  res.send("success");
})

module.exports = router;