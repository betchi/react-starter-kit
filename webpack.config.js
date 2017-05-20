const webpack = require('webpack');
const plugins = [
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  name: 'client',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader', 'ts-loader'],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    contentBase: 'public',
    port: 3000,
    inline: true
  }
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },
};