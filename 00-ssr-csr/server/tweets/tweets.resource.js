const express = require('express');
const router = express.Router();

const tweetsService = require('./tweets.service');

router.get('/', (req, res) => {
    res.send(tweetsService.findAll());
});

router.post('/', (req, res) => {
    const saved = tweetsService.save(req.body);
    res.status(201).send(saved);
});

module.exports = router;