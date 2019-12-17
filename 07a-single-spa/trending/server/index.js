const PORT = process.env.PORT;

const express = require('express');
const trendsResource = require('./trends/trends.resource');
const compression = require('compression');
const cors = require('cors');

const app = express();
app.use(compression());
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.static("./static"));
app.use('/', trendsResource);
app.listen(PORT, () => console.log(`TRENDING on port ${PORT}`));
