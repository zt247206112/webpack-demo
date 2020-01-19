var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: { //出口
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            { // 用于处理es6
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            { // 用于处理css
                test: /\.m?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        }
                    }
                ]
            },
            { // 用于处理less
                test: /\.m?less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            { // 用于处理html模板
                test: /\.m?html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            { // 用于处理图片
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30000, // url-loader比file-loader多出来这个属性，该值为图片的文件大小值，大于这个值压缩打包，小于这个值，转换成base64
                            esModule: false // 以前版本是默认false（默认情况下，file-loader生成使用ES模块语法的JS模块），新版本默认true
                        }
                    },
                    { // 压缩图片大小
                        loader: 'image-webpack-loader'
                    }
                ]
            },
        ]
    },
    plugins: [ // webpack插件
        new htmlWebpackPlugin({
           filename: 'index.html',
           template: 'index.html',
           inject: 'body'
        })
    ]
}