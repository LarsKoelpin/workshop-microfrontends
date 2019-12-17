const PORT = process.env.PORT;

const express = require('express');
const compression = require('compression');
const cors = require('cors');

const app = express();
app.use(compression());
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(express.static("./static"));
app.listen(PORT, () => console.log(`LAYOUT on port ${PORT}`));
