const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseDir = path.resolve(__dirname, 'src');

module.exports = {
    context: baseDir,
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'uikit',
        libraryTarget: 'commonjs2'
    },
    externals: [
        'react',
        'classnames',
        'antd',
        function (context, request, callback) {
            if (/.less$/.test(request) && context.includes(baseDir)) {
                /* This is one of our less files
                we are going to mark it external so that webpack does not process it and leaves 
                the import in the resulting index.js

                When we copy the less files we copy them with their full path relative to 
                source, so we need to make sure the import preserves that path.
                */ 
                const rel = path.relative(baseDir, context);
                const fullImport = `./${path.join(rel, request)}`;
                callback(null, 'commonjs ' + fullImport);
                return;
            }
            callback();
        }
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: '**/*.less'
            }
        ])
    ]
}