import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import * as httpErrors from 'http-errors';
const { createError } = httpErrors;
import { router as indexRouter } from './routes/index.js';
import { fileURLToPath } from 'url';
import http from 'http';
import { router as newPostRouter } from './routes/new.js';

// get and store __dirname and __filename vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newPostRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('port', 3000);
const server = http.createServer(app);

server.listen(3000);
export default app;