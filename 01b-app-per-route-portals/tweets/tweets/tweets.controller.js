const TWEETS_SERVER = process.env.TWEETS_SERVER || "localhost:4000";
const PROFILE_SERVER = process.env.PROFILE_SERVER || "localhost:4001";
const TRENDING_SERVER = process.env.TRENDING_SERVER || "localhost:4002";
const MQTT = process.env.MQTT || "queue";

const express = require('express');
const router = express.Router();
const mqtt = require('mqtt');
const tweetService = require('./tweets.service');

const client = mqtt.connect(`mqtt://${MQTT}`, {
  keepalive: 0,
});

router.post('/', (req, res) => {
  const {
    auth,
  } = req.cookies;

  const tweet = tweetService.save({ tweetText: req.body.tweettext, author: `@${auth || 'Lars'}` });
  client.publish('tweets', JSON.stringify(tweet));
  res.redirect('/');
});

router.get('/', (req, res) => {
  res.render('index', { layout: false, tweets: tweetService.findAll(), tweetsHost: TWEETS_SERVER, trendingHost: TRENDING_SERVER, profileHost: PROFILE_SERVER })
});

module.exports = router;