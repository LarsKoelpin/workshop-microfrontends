const PORT = process.env.PORT;

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const authController = require('./auth/auth.controller');

const app = express();
app.use(express.static("./static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/', authController);

app.listen(PORT, () => console.log(`AUTH on port ${PORT}`));
