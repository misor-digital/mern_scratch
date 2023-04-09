const HtmlWebPackPlugin = require('html-webpack-plugin');
const path              = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template : './public/index.html',
  filename : './index.html'
});

module.exports = {

  mode   : 'development',
  target : 'web',
  entry  : './src/index.js',
  module : {
    rules : [
      {
        test    : /\.js$/,
        exclude : /node_modules/,
        exclude : /server/,
        use     : {
          loader : 'babel-loader'
        }
      },
      {
        test : /\.css$/,
        use  : ['style-loader', 'css-loader']
      }
    ],
  },
  plugins : [ htmlPlugin ],  
  output: {
    path: path.resolve(`${__dirname}/../static/dist`),
  }
};