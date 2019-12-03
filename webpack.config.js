const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/client/src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/client/public')
    },
    module: {
        rules: [
            {
                test: /\.m?js$|\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, '/client/src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // importLoaders: 1,
                            modules: true,
                        }
                    }

                ],
                include: /\.module\.css$/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /\.module\.css$/
            }
        ]
    }
}