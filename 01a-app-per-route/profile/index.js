const PORT = process.env.PORT;

const express = require('express');
const exphbs = require('express-handlebars');
const profileController = require('./profile/profile.controller');
const security = require('./security/security.middleware');
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.static("./static"));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(security);

app.use('/', profileController);
app.listen(PORT, () => console.log(`PROFILE on port ${PORT}`));
