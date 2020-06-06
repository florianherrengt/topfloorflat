const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals:
        environment === 'development'
            ? {
                  react: 'React',
                  'react-dom': 'ReactDOM',
              }
            : {},
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.hbs$/, loader: 'handlebars-loader' },
            {
                test: [/\.ts$/, /\.tsx$/],
                use: 'ts-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
        watchContentBase: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.hbs',
            title: 'Top Floor Flat',
            hash: true,
            templateParameters: {
                isDevelopment: environment === 'development',
                isProduction: environment === 'production',
            },
        }),
    ],
};
