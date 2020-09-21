const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  entry:'./entry.js',
  output:{
    path: path.resolve(__dirname,'./dist'),
    filename: './my-bundle.js'
  },
  module:{
    rules:[
      { test:/\.jsx?$/, use:'babel-loader'}
    ]
  },
  plugins:[ new HtmlWebpackPlugin({template:'./template.html'})]
}