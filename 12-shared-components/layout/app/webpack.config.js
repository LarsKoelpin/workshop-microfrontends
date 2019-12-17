const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const templates = require('./templates/templates');

const config = (env, {app}) => {
    return {
        entry: {
            [app]: `./index.${app}.js`,
        },
        output: {
            path: path.resolve(__dirname, '..', 'server', 'static'),
            filename: `${app}.[hash].js`,
        },
        module: {
            rules: [
                {parser: {system: false}},
                {
                    test: /\.svelte$/,
                    exclude: /node_modules/,
                    use: 'svelte-loader',
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Twttr',
                templateContent: templates(process.env.TWEETS_SERVICE, process.env.TRENDING_SERVICE)[app],
                minify: {
                    collapseWhitespace: true,
                },
            }),
        ],
        devServer: {
            contentBase: path.resolve(__dirname),
            port: 3000,
            historyApiFallback: true,
        },
    };
};

module.exports = config;
