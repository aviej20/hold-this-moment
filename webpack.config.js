const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',  // Where Webpack starts bundling
  output: {
    filename: 'bundle.js',  // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before emit (Webpack 5+)
  },
  module: {
    rules: [
      {
        test: /\.scss$/,  // Regex to target .scss files
        use: [
          'style-loader', // 3. Injects CSS into the DOM
          'css-loader',   // 2. Turns CSS into JS modules
          'sass-loader'   // 1. Compiles SCSS to CSS
        ],
      },
    ],
  },
  devServer: {
    static: './',     // Serve from the project root
    open: true,       // Automatically open in browser
    hot: true,        // Enable hot reloading
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
    }),
  ],
  mode: 'development', // Can be 'production' for minified output
  devtool: 'source-map', // Helps debug in browser dev tools
};
