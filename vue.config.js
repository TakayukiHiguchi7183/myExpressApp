// vue.config.js
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = fileURLToPath(import.meta.url);
const dirname = path.dirname(filePath);

export default {
  // ビルドされたファイルの出力先を `dist` に設定
  outputDir: path.resolve(dirname, './dist'),

  // 本番環境ではルートにパスを設定
  publicPath: '/',

  // 開発サーバーの設定
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Expressサーバーにプロキシ
        changeOrigin: true
      }
    }
  }
};