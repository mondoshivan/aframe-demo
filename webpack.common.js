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
      template: 'src/index.html',
      favicon: "./static/favicon.ico",
      inject: 'head',
      scriptLoading: "blocking"
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
