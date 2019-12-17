const PORT = process.env.PORT;

const express = require('express');
const profileResource = require('./profile/profile.resource');
const compression = require('compression');
const cors = require('cors');

const app = express();
app.use(compression());
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.static("./static"));
app.use('/', profileResource);
app.listen(PORT, () => console.log(`PROFILE on port ${PORT}`));
