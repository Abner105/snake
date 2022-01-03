const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包后的目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle.js',
    // 不使用箭头函数
    environment:{
      arrowFunction:false
    }
  },
  // 指定loader
  module: {
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        use: [{
          loader: "babel-loader",
          options: {
            // 设置预定环境
            presets: [[
              '@babel/preset-env',
              // 配置信息
              {
                // 要兼任的目标浏览器
                targets: {
                  "chrome": "88",
                  "ie": "11"
                },
                "corejs": "3",
                // 设置corejs的加载方式，按需加载
                "useBuiltIns": "usage"
              }
            ]]
          }
        }, 'ts-loader'],
        exclude: /node-modules/
      },
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:"last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          
          "less-loader"
        ]
      }
    ]
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // 设置扩展名
  resolve: {
    extensions: ['.ts', '.js']
  }
}