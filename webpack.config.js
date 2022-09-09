const HtmlWebpackPlugin    = require('html-webpack-plugin'); // Cargamos webpack plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");




module.exports = {

    mode: 'development',

    output:{
        clean: true // esto limpiara si se llega a crear uno o mas archivos. Index
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
        ],
      },

    optimization: {},


    plugins: [ // todos los plugins que ocupamos en nuestro proyecto
        new HtmlWebpackPlugin({
            title: 'Mi webpack web',//titulo de la pagina
            template: './src/index.html',//carga una plantilla dev
            filename: './index.html',//el nombre del archivo html en dist
            inject: 'body' //coloca el tag script en el body
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
        new CopyPlugin({
          patterns: [
            { from: "./src/assets/img/", to: "assets/img" },
          ],
        }),
    ]
};