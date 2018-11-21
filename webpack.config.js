var path = require('path');

module.exports = {
    mode: "production",
    entry: "./app/app.jsx", // input point source file
    output: {
        path: path.resolve(__dirname, "./public"), // path to catalog output files
        publicPath: "/public/",
        filename: "bundle.js" // name of the file being created
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules:[  //downloader jsx
            {
                test: /\.jsx$/,  // determine the type of files
                exclude: /(node_modules)/,
                loader: "babel-loader", // define loader
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"] // used plugins
                }
            }
        ]
    }
}