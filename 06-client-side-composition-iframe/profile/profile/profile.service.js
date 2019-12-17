const MQTT = process.env.MQTT || "queue";
const mqtt = require('mqtt');

const USERS = [
  { name: '@Lars', tweetCount: 1 },
  { name: '@Sven', tweetCount: 1 },
  { name: '@Renke', tweetCount: 0 },
];


const client = mqtt.connect(`mqtt://${MQTT}`);
client.on('connect', () => client.subscribe('tweets'));
client.on('message', (topic, message) => {
  const msg = JSON.parse(message.toString());
  const user = findUser(msg.author);
  if (user) {
    user.tweetCount++;
  }
});

const findUser = user => {
  return USERS.find(e => e.name.toLowerCase() === user.toLowerCase());
};

module.exports = {
  findUser,
};