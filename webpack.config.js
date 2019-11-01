const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './scripts/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },

                {
                    loader: 'eslint-loader',
                    options: {
                        presets: ['airbnb']
                    }
                }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'css-loader',
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            }

        ],


    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],

    mode: 'development'
}