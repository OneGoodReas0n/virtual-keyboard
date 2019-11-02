const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sass  = require('sass')

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
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            presets: ['airbnb-base']
                        }
                    },

                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },

                    {
                        loader: 'css-loader',
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass
                        }
                    }
                ]
            }

        ],


    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],

    mode: 'development'
}