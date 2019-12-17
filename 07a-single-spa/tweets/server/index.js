const PORT = process.env.PORT || 4000;

const express = require('express');
const bodyParser = require('body-parser');
const tweetsResource = require('./tweets/tweets.resource');
const cors = require('cors');
const compression = require('compression');


const app = express();
app.use(compression());
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.static("./static"));
app.use(bodyParser.json());
app.use('/', tweetsResource);
app.listen(PORT, () => console.log(`TWEETS on port ${PORT}`));
