const express = require('express');
const router = express.Router();

const trendsService = require('./trends.service');

router.get('/', (req, res) => {
    res.send(trendsService.findTrends());
});


module.exports = router;