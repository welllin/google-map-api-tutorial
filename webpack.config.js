module.exports = {
  devtool: "cheap-module-source-map",
  entry: "./app/index.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:
         {
           presets:['es2015']
         }
      }
    ]
  }
};
