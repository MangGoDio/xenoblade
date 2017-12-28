const webpack = require('webpack')

module.exports = {
    entry: [
        './src/app.js',
    ],
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'stage-0', 'react'] }
            }],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }
        ]
    }
}