// 必要モジュールのインポート
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

//ルータのインポート（routes配下にある）
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

// Expressインスタンス作成。ここに必要情報を格納していく
const app = express();

// ファイルパス情報を作成
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const viewsPath = path.join(dirname, 'views');
const publicPath = path.join(dirname, 'public');

// viewsフォルダ内ファイルのエンジン情報を格納（ejs）
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// ミドルウェアをセットアップ
app.use(logger('dev')); //ログ出力ミドルウェア
app.use(express.json()); //json利用ミドルウェア
app.use(express.urlencoded({ extended: false })); //URLエンコードミドルウェア
app.use(cookieParser()); // cookie利用ミドルウェア
app.use(express.static(publicPath)); // 静的ファイル提供用ミドルウェア

// ルーティング（/がきたらindex.jsに遷移、など）
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.ejs');
});

export default app;