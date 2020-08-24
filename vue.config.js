const path = require("path");
module.exports = {
  publicPath: "./",
  lintOnSave: false,
  pages: {
    index: {
      entry: "test/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
  configureWebpack: {
    // 覆盖webpack默认配置的都在这里
    resolve: {
      // 配置解析别名
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@i": path.resolve(__dirname, "./src/assets/images"),
        vendor: path.resolve("src/vendor"),
      },
    },
    externals: {
      BMap: "BMap",
    },
  },
};
