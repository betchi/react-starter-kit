module.exports = {
  entry: './src/client/index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
};