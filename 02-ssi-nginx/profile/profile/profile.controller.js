const TWEETS_SERVER = process.env.TWEETS_SERVER || "localhost:4000";
const PROFILE_SERVER = process.env.PROFILE_SERVER || "localhost:4001";
const TRENDING_SERVER = process.env.TRENDING_SERVER || "localhost:4002";

const express = require('express');
const router = express.Router();
const profileService = require('./profile.service');


router.get('/', (req, res) => {
  const currentUser = profileService.findUser(req.query.id || '@Lars');
  res.render('profile', {
    currentUser,
    tweetsHost: TWEETS_SERVER,
    profileHost: PROFILE_SERVER,
    trendingHost: TRENDING_SERVER,
  });
});

router.get('/profile', (req, res) => {
  const currentUser = profileService.findUser(req.query.id || '@Lars');
  res.render('profile', {
    layout: false,
    currentUser,
  });
});

module.exports = router;