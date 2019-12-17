const PORT = process.env.PORT;

const express = require('express');
const compression = require('compression');
const cors = require('cors');
const OClient = require('oc-client');

const app = express();
app.use(compression());
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use('static', express.static('./static'));


const client = new OClient({
  registries: {
    serverRendering: 'http://localhost:3000/',
    clientRendering: 'http://localhost:3000/',
  },
  components: {
    tweets: '1.0.0',
  },
  templates: [
    require('oc-template-es6'),
  ],
});


app.use('/', (req, res) => {
  client.renderComponent('tweets', {
    parameters: {
      user: '@Lars',
    },
    timeout: 5,
  }, (err, html) => {
    res.send(`
<html>
    <header>
        <title>Twitter</title>
    </header>
    <body>
        <div>
            ${html}
        </div>
        <div>
            <oc-component href="http://localhost:3000/trending/1.0.0/"></oc-component>
        </div>
        <script>var oc = { conf: { templates: [{"type": "oc-template-react","externals": []}] }};</script>
        <script src="http://localhost:3000/oc-client/client.js"></script>
    </body>
</html>
`);
  });
});
app.listen(PORT, () => console.log(`LAYOUT on port ${PORT}`));
