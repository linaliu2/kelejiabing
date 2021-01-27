module.exports = {
  // ...省略
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{
          loader: 'babel-loader',
        }, {
          loader: 'eslint-loader', // 指定启用eslint-loader
          options: {
            formatter: require('eslint-friendly-formatter'),
            emitWarning: false
          }
        }]
      },
    ]
  }