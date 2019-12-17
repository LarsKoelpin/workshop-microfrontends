const {
    PORT
} = process.env;

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');
const tweetsResource = require('./tweets/tweets.resource');
const tweetsController = require('./tweets/tweets.controller');
const trendsResource = require('./trends/trends.resource');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', tweetsController);
app.use('/api/tweets', tweetsResource);
app.use('/api/trends', trendsResource);


app.listen(PORT || 80, () => console.log(`Server up at ${PORT || 80}`));