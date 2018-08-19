import webpack from 'webpack';
import PropTypes from 'prop-types';


export default {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: process.argv.indexOf('-p') === -1 ? null : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
  ],
};
