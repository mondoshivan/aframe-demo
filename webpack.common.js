const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@assets": path.resolve(__dirname, "assets"),
      "@src": path.resolve(__dirname, "src")
    }
  },
  entry: {
    index: "./src/index.ts"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AFRAME Typescript Demo",
      favicon: "./static/favicon.ico",
      meta: {
        charset: "utf-8",
        description: "AFRAME Typescript Demo",
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(glb|gltf)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/models/'
        },
      }
    ]
  }
}
