const faker = require('faker');

const TRENDS = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => ({
    hashtag: "#" + faker.company.companyName(),
    count: faker.random.number()
}));

module.exports = {
    findTrends() {
        const shuffled = [...TRENDS].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
    },
    allHashTags(allTweets) {
        return allTweets
            .map((tweet) => tweet.tweetText)
            .filter(tweetText => tweetText.indexOf('#') !== -1)
    }
};