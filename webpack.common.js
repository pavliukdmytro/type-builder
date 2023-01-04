const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function getAllHbsRootFiles() {
  const files = fs.readdirSync('./src/views/').filter(file => file.match(/.hbs$/));

  return files.map(file => {
    return new HtmlWebpackPlugin({
      template: `./src/views/${file}`,
      filename: `./${ file.replace('.hbs', '.html') }`,
      // templateParameters: require('./src/data/index.json'),
      minify: false,
      inject: false,
    })
  })
}

module.exports = {
  entry: {
    /** точка входа **/
    app: './src/index.ts',
  },
  output: {
    /** вывод **/
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      /** обработка scss и css файлов **/
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          // Compiles Sass to CSS
          { loader: "sass-loader", },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: './src/scss/core/wanted.scss'
            }
          },
        ],
      },
      /** typescript loader **/
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      /** babel **/
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      /** handlebars loader **/
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          partialDirs: [
            path.join(__dirname, 'src/views/partials')
          ],
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    /** выносим все стили с js в css файл **/
    new MiniCssExtractPlugin(),
    /** собераем html files **/
    ...getAllHbsRootFiles(),
    // new CleanWebpackPlugin(),
  ],
  // output: {
  //   filename: '[name].bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  //   clean: true,
  // },
};