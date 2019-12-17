const MQTT = process.env.MQTT || "queue";

const mqtt = require('mqtt');
const events = require('events');



const eventEmitter = new events.EventEmitter();
const TRENDS = [];
const client = mqtt.connect(`mqtt://${MQTT}`);
client.on('connect', () => client.subscribe('tweets'));
client.on('message', (topic, message) => {

    if (topic === "tweets") {
        const tweet = JSON.parse(message.toString());
        const hashTagIndex = tweet.tweetText.indexOf('#');
        if (process.env.DELAYED_MESSAGE === 'true') {
            setTimeout(() => {
                TRENDS.push(tweet.tweetText.substr(hashTagIndex));
                eventEmitter.emit('newTweet', tweet.tweetText);
            }, 3000);
        } else {
            if (hashTagIndex !== -1) {
                TRENDS.push(tweet.tweetText.substr(hashTagIndex));
                eventEmitter.emit('newTweet', tweet.tweetText);
            }
        }
    }
});

module.exports = {
    findTrends() {
        const latest = [...TRENDS].reverse();
        return latest.slice(0, 5);
    },
    onTweet: (listener) => {
        eventEmitter.addListener('newTweet', listener);
    },
    unregister: (listener) => {
        eventEmitter.removeListener(listener);
    }
};
