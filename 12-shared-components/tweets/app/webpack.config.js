const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const {readFileSync} = require('fs');

module.exports = (env, {mode, startEntry, devEnv, standalone}) => {
    const devEnvFile = devEnv ? readFileSync(path.resolve(__dirname, devEnv)).toString() : null;
    const plugins = [
        new webpack.DefinePlugin({
            __DEVELOPMENT__: mode !== 'production',
            __DEV_ENV_FILE__: devEnvFile,
            'process.env.NODE_ENV': JSON.stringify(mode),
        }),
        new HtmlWebpackPlugin({
            templateContent: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
        <title>Tweet-Service</title></head>
        <body><main></main>
        </body>
     </html>`,
            minify: {
                collapseWhitespace: true,
            },
        }),
    ];
    if (mode === 'production') {
        if (!standalone) {
            plugins.push(new CleanWebpackPlugin());
        }
        plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: path.resolve(__dirname, 'report', `report_${startEntry}.html`),
        }));
        plugins.push(new CompressionPlugin());

    }
    return ({
        entry: {
            app: path.resolve(__dirname, 'src', startEntry),
        },
        output: {
            filename: standalone ? 'tweet-service-standalone.js' : 'tweet-service.js',
            chunkFilename: '[name].[hash].js',
            path: path.resolve(__dirname, '..', 'server', 'static'),
            publicPath: '/',
            libraryTarget: standalone ? 'var' : 'umd',
            library: standalone ? undefined : 'tweet-service',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {parser: {system: false}},
                {
                    test: /\.(ts|tsx)$/,
                    use: [{
                        loader: 'babel-loader',
                    }],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1000,
                            },
                        },
                    ],
                },
            ],
        },
        devtool: mode === 'production' ? false : 'eval-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'src'),
            historyApiFallback: {
                index: '/',
            },
            port: 3001,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            },
        },
        plugins,
        optimization: {
            minimizer: mode === 'production' ? [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    extractComments: true,
                }),
            ] : [],
        },
    });
};