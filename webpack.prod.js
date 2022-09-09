const HtmlWebpackPlugin    = require('html-webpack-plugin'); // Cargamos webpack plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");
const CssMinimizerPlugin   = require("css-minimizer-webpack-plugin");
const TerserPlugin         = require("terser-webpack-plugin");

module.exports = {

    mode: 'production',

    output:{
        clean: true, // esto limpiara si se llega a crear uno o mas archivos. Index
        filename: '[name].[contenthash].js'
    },

    module: {
        rules: [
          {
            test: /\.html$/i, // escaneamos en el directorio en busca de archivos html
            loader: "html-loader", // Cargamos el plugin
            options: {
              // Disables attributes processing
              sources: false,
            },
          },
          {
            test: /\.css$/i,
            exclude: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader',
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ],
      },

    optimization: {
      minimize: true,
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },


    plugins: [ // todos los plugins que ocupamos en nuestro proyecto
        new HtmlWebpackPlugin({
            title: 'Mi webpack web',//titulo de la pagina
            template: './src/index.html',//carga una plantilla dev
            filename: './index.html',//el nombre del archivo html en dist
            inject: 'body' //coloca el tag script en el body
        }),
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
        new CopyPlugin({
          patterns: [
            { from: "./src/assets/img/", to: "assets/img" },
          ],
        }),
    ]
};