const path = require ('path')

module.exports = {
  watch: true,
  mode: 'development',
  entry: path.resolve(__dirname, './client/src'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}