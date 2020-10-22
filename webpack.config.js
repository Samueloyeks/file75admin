
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');



// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

process.env.NODE_ENV = 'development';

module.exports = {

    mode: 'development',

    entry: resolveAppPath('src'),

    output: {
        filename: 'static/js/bundle.js',
    },
    devServer: {
        contentBase: resolveAppPath('public'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        host,
        port: 3000,
        publicPath: '/',

    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveAppPath('public/index.html'),
            favicon: resolveAppPath('public/favicon.ico')
        }),
        new Dotenv()
    ],
}