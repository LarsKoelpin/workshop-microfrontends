const MQTT = process.env.MQTT || "queue";

const express = require('express');
const router = express.Router();
const mqtt = require('mqtt');
const tweetService = require('./tweets.service');

const client = mqtt.connect(`mqtt://${MQTT}`, {
    keepalive: 0,
});


router.post('/tweets', (req, res) => {
    const tweet = tweetService.save(req.body);
    client.publish('tweets', JSON.stringify(tweet));
    res.send(tweet);
});

router.get('/tweets', (req, res) => {
    res.send(tweetService.findAll());
});

module.exports = router;
