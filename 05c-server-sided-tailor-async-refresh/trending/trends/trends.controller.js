const TWEETS_SERVER = process.env.TWEETS_SERVER || "localhost:4000";
const PROFILE_SERVER = process.env.PROFILE_SERVER || "localhost:4001";
const TRENDING_SERVER = process.env.TRENDING_SERVER || "localhost:4002";

const express = require('express');
const router = express.Router();
const trendService = require('./trends.service');

router.ws('/tweets', ws => {
    console.log("Connection established");
    const tweetListener = (tweet) => {
        console.log("Emitting Tweet to Client");
        ws.send(JSON.stringify(tweet));
    };
    trendService.onTweet(tweetListener);
    ws.on('close', () => trendService.unregister(tweetListener));
});

router.get('/', (req, res) => {
    const {
        auth,
    } = req.cookies;

    res.render('trending', {
        currentUser: `@${auth || 'Lars'}`,
        trends: trendService.findTrends(),
        tweetsHost: TWEETS_SERVER,
        profileHost: PROFILE_SERVER,
        trendingHost: TRENDING_SERVER,
    });
});

router.get('/trending', (req, res) => {
    const {
        auth,
    } = req.cookies;
    if (process.env.DELAY_FRAGMENT === 'true') {
        setTimeout(() => {
            res.render('trending', {
                layout: false,
                currentUser: `@${auth || 'Lars'}`,
                trends: trendService.findTrends(),
            });
        }, 3000)
    } else {
        res.render('trending', {
            layout: false,
            currentUser: `@${auth || 'Lars'}`,
            trends: trendService.findTrends(),
        });
    }
});

module.exports = router;
