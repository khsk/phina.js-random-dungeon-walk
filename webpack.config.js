var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders:['style-loader', 'css-loader'],
            },
            // {
            //     test: /rot\.js$/,
            //     loader: 'exports-loader?ROT'
            // },
            // {
            //     test: /rotjs$/,
            //     loader: 'exports-loader?ROT'
            // },
        ]
    },

    // resolve: {
    //     alias: {
    //         rotjs$: path.resolve(__dirname, 'node_modules/rot-js/lib/rot.js'),
    //     }
    // },
};
