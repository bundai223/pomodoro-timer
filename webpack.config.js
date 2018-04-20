module.exports = {
  entry: './app/src/index.js',
  output: {
    filename: 'renderer.js',
    path: __dirname + '/app/dist'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
