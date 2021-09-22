const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'bundlle.js',
        path: path.resolve(__dirname,'build')
    },
    mode: 'production',
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
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    }),new CleanWebpackPlugin(),],
    // devServer: {
    //     port: 8080,
    //     open: true,
    // }
    
}