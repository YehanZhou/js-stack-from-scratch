export default {
  output: {
    filename: 'client-bundle.js', // 指定了打包后的文件名
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // 正则表达式，匹配的文件将会使用 babel-loader 处理
        loader: 'babel-loader',
        exclude: [/node_modules/], // node_modules 中的文件不需要编译
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'], // import 的时候可以省略扩展名
  },
};
