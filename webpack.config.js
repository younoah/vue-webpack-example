const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    // 확장자 생략
    extensions: ['.vue', '.js'], // 생략하고 싶은 확장자명 명시
    alias: {
      // 경로 별칭
      '~': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname: node.js의 전역변수로써 현재 루트경로 정보를 갖는다. dist: 번들된 결과를 담을 폴더명
    // filename: 'main.js', // 생략가능, 생략한다면 entry의 파일명으로 생성
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      // template: './src/index.html', // HtmlPlugin은 path.resolve메서드를 자체적으로 실행하기 때문에 이렇게 작성해도 무관하다.
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }, // to속성으로 경로를 지정할 수 있다.
      ],
    }),
  ],
  devServer: {
    port: 1234, // webpack-dev-server 포트번호 지정, 기본값은 8080
  },
};
