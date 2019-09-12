const
    path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    targetPath = 'dist',
    app = {
        entry: './assets/js/app.js',
        output: {
            path: path.resolve(__dirname, targetPath),
            filename: 'app.js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: '[path][name].[ext]'
                        }
                    }]
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    },
    style = {
        entry: './assets/js/style.js',
        output: {
            path: path.resolve(__dirname, targetPath),
            filename: 'style.js',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },
                {
                    test: /\.(png|jp(e*)g)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },
            ]
        }
    };

module.exports = [app, style];