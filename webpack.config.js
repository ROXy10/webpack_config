global.Promise = require('bluebird');

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var publicPath = '/public/assets';
// var cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
var cssName = 'css/styles.css';
// var jsName = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';
var jsName = 'js/bundle.js';

var plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    new ExtractTextPlugin(cssName, {allChunks: true, disable: process.env.NODE_ENV=='development'}),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new CleanWebpackPlugin(['public/assets/'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    );
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports = {
    // context: __dirname + '/src',

    entry: ['babel-polyfill', 'webpack-dev-server/client', './src/app.js'],

    debug: process.env.NODE_ENV !== 'production',

    resolve: {
        root: path.join(__dirname, 'src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins,

    output: {
        path: `${__dirname}/public/assets/`,
        filename: jsName,
        publicPath
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
            },
            {test: /\.gif$/, loader: 'file?name=img/[name].[ext]?[hash]'},
            {test: /\.jpg$/, loader: 'file?name=img/[name].[ext]?[hash]'},
            {test: /\.png$/, loader: 'file?name=img/[name].[ext]?[hash]'},
            {test: /\.svg/, loader: 'file?name=fonts/[name].[ext]?[hash]'},
            {test: /\.(woff|woff2|ttf|eot)/, loader: 'file?name=fonts/[name].[ext]?[hash]'},

            {test: /\.jsx?$/, loader: process.env.NODE_ENV !== 'production' ? 'react-hot!babel!eslint-loader' : 'babel', exclude: [/node_modules/, /public/] },
            {test: /\.json$/, loader: 'json-loader'},
        ]
    },

    eslint: { configFile: '.eslintrc' },

    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : null,

    devServer: {
        hot: true
    }
};