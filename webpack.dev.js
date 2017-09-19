const path = require('path')
const root = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const theme = {
  "primary-color": "#1DA57A",
};
module.exports = {
  entry: [
    'react-hot-loader/patch', // 激活HMR
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(root, 'src/examples/main.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },
  devtool: 'none',
  // loaders
  module: {
    rules: [
      {test: /(\.jsx|\.js)$/, use: ['babel-loader'], exclude: /node_modules/},
      {
        test(filePath) {
          return /\.css$/.test(filePath) && !/\.module\.css$/.test(filePath);
        },
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}` +
          `?sourceMap&-restructuring&-autoprefixer!${require.resolve('less-loader')}`
        )
      },
      {
        test: /\.module\.css$/,
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}` +
          `?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!` +
          `${require.resolve('less-loader')}`
        ),
      },
      {
        test(filePath) {
          return /\.less$/.test(filePath) && !/\.module\.less$/.test(filePath);
        },
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}?sourceMap&-autoprefixer!` +
          `${require.resolve('less-loader')}!` +
          `${require.resolve('less-loader')}?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
        ),
      },
      {
        test: /\.module\.less$/,
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}?` +
          `sourceMap&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!` +
          `${require.resolve('less-loader')}!` +
          `{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
        ),
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=application/font-woff`
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=application/font-woff`
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=application/octet-stream`
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
      `limit=10000&minetype=application/vnd.ms-fontobject`,
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: `${require.resolve('url-loader')}?` +
        `limit=10000&minetype=image/svg+xml`
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: `${require.resolve('url-loader')}?limit=10000`
      }
    ]
  },
  devServer: {
    hot: true, // 激活服务器的HMR
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(root, 'template.html')
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin(), // 执行热替换时打印模块名字
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("style.css"),
  ]
}