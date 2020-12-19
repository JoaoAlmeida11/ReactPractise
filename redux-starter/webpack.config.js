const path = require("path");

module.exports = {
  entry: "./src/index.js", //where to start
  output: {
    filename: "app.js", //compiled file with all .js
    path: path.resolve(__dirname, "dist")//dist: distributable
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), //where to lunch from
    port: 9000
  },
  mode: "development"
};
