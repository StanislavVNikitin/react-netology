const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
       app: "./src/index.jsx",
    },
    output: {
	    path: path.resolve(__dirname, "build"),
	    filename: "[name].[contenthash:6].js",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
            test: /\.js(x)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                targets: "defaults",
                presets: [
                    "@babel/preset-env", 
                    "@babel/preset-react"
                ]
                }
            }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'app'),
          },      
    },
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})],
};