const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const config = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '..', 'server', 'static'),
        filename: 'trending-service.js',
        libraryTarget: 'umd',
        library: 'users-app',
        publicPath: 'http://localhost:4002/',
    },
    module: {
        rules: [
            {parser: {system: false}},
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'single-spa'),
        port: 4002,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
        },
    },
};

module.exports = config;
