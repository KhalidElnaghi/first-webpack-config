
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');   
const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: ['file-loader'],
                
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin(),new CleanWebpackPlugin(),],
    devServer: {
        port: 9090,
        open: true,
    }
    
}