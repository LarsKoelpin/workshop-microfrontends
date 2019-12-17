const express = require('express');
const router = express.Router();
const trendService = require('./trends.service');


router.get('/trending', (req, res) => {
    res.send(trendService.findTrends());
});


module.exports = router;
