const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const plugins = [
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  name: 'client',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/',
  },
  devtool: debug ? 'inline-sourcemap' : null,
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
    extensions: ['.tsx', '.ts', '.js', 'jsx']
  },
  devServer: {
    contentBase: 'public',
    port: 8000,
    inline: true
  },
  node: {
    fs: "empty",
    net: "empty"
  }
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },
};