// vue.config.js
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default {
  // ビルドされたファイルの出力先を指定
  outputDir: path.resolve(dirname, './public/js'),

  // 開発サーバーの設定をカスタマイズ
  devServer: {
    proxy: 'http://localhost:3000',  // Expressサーバーにプロキシする場合
  },

  // ビルド時のパブリックパスを指定
  publicPath: '/js'
};