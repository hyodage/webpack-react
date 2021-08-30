const {resolve} = require("path")
module.exports = {
    // 打包模式
    mode:"production",
    // 入口 执行构建的入口 项目入口
    entry:"./src/index.js",//默认也是如此
    // 出口
    output:{
        // 构建的文件资源，必须绝对路径
        path:resolve(__dirname,"./dist"),
        // 构建的文件资源的名称
        filename:"main.js"
    },
    // 模块配置
    module: {
        rules: [
            // 指定多个配置规则
        ]
    },
    // 开发服务器
    devServer: {},
    // 插件配置
    plugins: []
}