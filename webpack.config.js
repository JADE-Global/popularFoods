const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
require("regenerator-runtime/runtime");

module.exports = {
  entry: {
    app: path.join(__dirname, "/client/src/index.jsx"),
    modalreview: path.join(
      __dirname,
      "/client/src/components/modal/modalReview/modalReview.jsx"
    ),
    carouselitem: path.join(
      __dirname,
      "/client/src/components/carouselItem/carouselItem.jsx"
    ),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Popular Dishes",
      template: "template.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/client/public"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$|\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, "/client/src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },
};
