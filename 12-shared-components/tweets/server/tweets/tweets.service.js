const TWEETS = [
    {id: 1, tweetText: "Hello World!!!", author: "@Sven"},
    {id: 2, tweetText: "Hello Welt", author: "@Lars"},
];

module.exports = {
    findAll() {
        return [...TWEETS].reverse();
    },
    save(tweet) {
        const newTweet = {...tweet, id: TWEETS.length + 1};
        TWEETS.push(newTweet);
        return newTweet;
    }
};



