const {resolve} = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // 打包模式
    mode:"development",
    // 入口 执行构建的入口 项目入口
    entry:"./src/index.js",//默认也是如此
    // 出口
    output:{
        // 构建的文件资源，必须绝对路径
        path:resolve(__dirname,"./dist"),
        // 构建的文件资源的名称
        filename:"main.js",
        clean:true,
    },
    // 模块配置
    module: {
        rules: [
            // 指定多个配置规则
            {
                test: /\.(s[ac]|c)ss$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
            },
            {
                test: /.\js$/,
                exclude: /node_modules/,
                include: resolve(__dirname,"./src"),
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    // 开发服务器
    devServer: {
        // 指定加载内容的路径
        static: resolve(__dirname,'dist'),
        // 启动gzip
        compress: true,
        // 端口号
        port: 9200,
        // 热更新
        liveReload: true
    },
    // 配置目标
    target: 'web',
    // 插件配置
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "hello React"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}