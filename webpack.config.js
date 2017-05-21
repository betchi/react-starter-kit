const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const plugins = [
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  name: 'client',
  entry: [
    './src/index.tsx',
    './src/main.css'
  ],
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
        use: ['react-hot-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            'react-hot-loader',
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true 
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx', 'css']
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