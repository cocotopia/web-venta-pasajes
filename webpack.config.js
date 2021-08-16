const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    app: ["@babel/polyfill", "./src/main.js"],
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
  },
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
    hints: "warning",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App",
      template: "./src/index.pug",
      filename: "index.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "Home",
      template: "./src/home.pug",
      filename: "home.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "Lista",
      template: "./src/lista.pug",
      filename: "lista.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "Detalle",
      template: "./src/detalle.pug",
      filename: "detalle.html",
      minify: false,
    }),
    new HtmlWebpackPlugin({
      title: "Contacto",
      template: "./src/contacto.pug",
      filename: "contacto.html",
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.(sa|sc|c)ss$/,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
      canPrint: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /^(?!.*\.{test,min}\.js$).*\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                postcssPresetEnv({
                  browsers: "last 2 versions",
                  autoprefixer: {
                    grid: true,
                    cascade: false,
                  },
                  stage: 3,
                  features: {
                    "nesting-rules": true,
                  },
                }),
              ],
            },
          },
        ],
      },
      // {
      //   test: /\.pug$/,
      //   use: {
      //     loader: "pug-loader",
      //   },
      // },
      // se reemplaza el loader del pug por otro
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
    ],
  },
};
