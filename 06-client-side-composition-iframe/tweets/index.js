const PORT = process.env.PORT || 4000;

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const security = require('./security/security.middleware');
const tweetsController = require('./tweets/tweets.controller');
const cors = require('cors');


const app = express();
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.static("./static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(security);

app.use('/', tweetsController);
app.listen(PORT, () => console.log(`TWEETS on port ${PORT}`));
