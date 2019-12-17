const express = require('express');
const router = express.Router();
const tweetsService = require('./tweets.service');
const trendsService = require('../trends/trends.service');

router.get('/', (req, res) => {
    res.render('tweets', {tweets: tweetsService.findAll(), trends: trendsService.findTrends()});
});

router.post('/', (req, res) => {
    tweetsService.save(req.body);
    res.render('tweets', {layout: false, tweets: tweetsService.findAll()});
});

module.exports = router;