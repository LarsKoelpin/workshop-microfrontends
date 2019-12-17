const PORT = process.env.PORT;

const express = require('express');
const exphbs = require('express-handlebars');
const trendsController = require('./trends/trends.controller');
const security = require('./security/security.middleware');
const cookieParser = require("cookie-parser");
const cors = require('cors');


const app = express();
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser());
app.use(express.static("./static"));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(security);

app.use('/', trendsController);
app.listen(PORT, () => console.log(`TRENDING on port ${PORT}`));
