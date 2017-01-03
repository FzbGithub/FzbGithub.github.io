/**
 * Created by sks on 2017/1/3.
 */
require("webpack");
module.exports= {
    devtool:"eval-source-map",
    entry:"./input/init.js",
    output: {
        path: "./output",
        filename:'bundle.js'
    },
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {test:/\.jsx?$/,loader:'babel',exclude:/node_modules/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.json/, loader: 'json'},
            {test:/\.vue/,loader:'vue'}
        ]
    }
}