const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
              // На какие файлы будет работать
              test: /\.js$/,
              // исключить папку
              exclude: /(node_modules)/,
              /*
                лоудеры - подпрограммы которые позволяют вебпаку обрабатывать
                не только js файлы но и другие.
                Так же расширают функцонал и добавляют специфичекую обработку для
                этого типа файлов
              */
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            {
              test: /\.html$/,
              use: ["html-loader"]
            },
            {
              test: /\.(svg|png|jpe?g|gif)$/,
              use: {
                loader: "file-loader",
                options: {
                  name: "[name].[hash].[ext]",
                  outputPath: "images"
                }
              }
            }
          ]
    }
}