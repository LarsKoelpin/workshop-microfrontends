const express = require('express');
const path = require('path');
const Tailor = require('node-tailor');


const {
    PORT,
} = process.env;


const TEMPLATES_PATH = path.resolve('./templates');
const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');

const app = express();
app.use(express.static("./static"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(PUBLIC_PATH));

console.log('USING TAILOR');
const tailor = new Tailor({
    templatesPath: TEMPLATES_PATH,
    maxAssetLinks: 100,
    filterRequestHeaders: (attributes, request) => {
        const ACCEPT_HEADERS = [
            'accept-language',
            'referer',
            'user-agent',
            'x-request-uri',
            'x-request-host',
            'Cookie'
        ];
        const { public: isPublic } = attributes;
        const { headers = {} } = request;
        // Headers are not forwarded to public fragment for security reasons
        return headers;
    }
});
app.get('/fallback', (req, res) => {
    res.send('<div style="background: black; width: 100%; height: 100%"> <img src="/wjax.png" /> </div>')
});
app.get('*', (req, res) => {
    tailor.requestHandler(req, res)
});

app.listen(PORT, () => console.log(`Twttr main app listening on port ${PORT}`));
