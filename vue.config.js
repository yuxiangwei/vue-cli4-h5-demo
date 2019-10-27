module.exports = {
    //基本路径
    publicPath: './',//相对路径
    assetsDir: 'static', //生成静态文件存放位置
    productionSourceMap: false, // 设置上线后是否加载webpack文件
    // chainWebpack: config => { //加上双引号
    //     config.plugin("html").tap(args => {
    //         args[0].minify = false;
    //         return args;
    //     });
    // },
    chainWebpack: config => {
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          optipng: {
            enabled: false
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          webp: {
            quality: 75
          }
        });
        config.module
          .rule('scss')
          .oneOf('vue')
          .use('px2rem-loader')
          .loader('px2rem-loader')
          .before('postcss-loader') // this makes it work.
          .options({
            remUnit: 75,
            remPrecision: 8
          })
          .end();
    }
}