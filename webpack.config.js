module.exports = {
    context: __dirname,
    entry: './assets/scripts/index',
    output: {
        path: __dirname + '/build',
        filename: "index.bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react'],
                plugins: ['rewire']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};
