const MQTT = process.env.MQTT || "queue";

const mqtt = require('mqtt');

const TRENDS = ['#react', '#angular', '#vue'];

const client = mqtt.connect(`mqtt://${MQTT}`);
client.on('connect', () => client.subscribe('tweets'));
client.on('message', (topic, message) => {
    if (topic === "tweets") {
        const tweet = JSON.parse(message.toString());
        const hashTagIndex = tweet.tweetText.indexOf('#');
        if (hashTagIndex !== -1) {
            TRENDS.push(tweet.tweetText.substr(hashTagIndex));
        }
    }
});

module.exports = {
    findTrends() {
        const latest = [...TRENDS].reverse();
        return latest.slice(0, 5);
    },
};
