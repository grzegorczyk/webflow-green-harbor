const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true // Aktiviert Source-Maps für css-loader
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, // Aktiviert Source-Maps für postcss-loader
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer',
                                        {},
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true // Aktiviert Source-Maps für sass-loader
                        }
                    }
                ],
            },
        ],
    },
    devtool: 'source-map', // Fügt generelle Unterstützung für Source-Maps hinzu
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
};