const path = require('path');

module.exports = {
    entry: './client/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/client/public')
    },
    module: {
        rues: [
            {
                test: /\.m?js$|\.mjsx$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}