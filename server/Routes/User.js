const express = require('express');
const app = express();
const router = express.Router();

const { User } = require('../Models/User');

router.get('/', (req, res) => {
    User.find((err, results) => {
        if (err) return console.log(err);
        res.send(results);
    });
});

module.exports = router;