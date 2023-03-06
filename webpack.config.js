const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js'

    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
}; 
