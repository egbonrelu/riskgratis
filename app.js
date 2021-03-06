var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require("nunjucks");

var index = require('./routes/index');
var doc = require('./routes/doc');
var design = require('./routes/design-goals');
var request_demo = require('./routes/request-demo');
var features = require('./routes/features');
var blog = require('./routes/blog');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunj');
nunjucks.configure('views', {autoescape: true, express: app});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// define routes
app.use('/', index);
app.use('/platform', doc);
app.use('/design-goals', design);
app.use('/request', request_demo);
app.use('/features', features);
app.use('/blog', blog);
// Api
app.use('/api/:id', function (req, res) {
    "use strict";
    switch (req.params['id']) {
        case "newsletter":
            res.redirect("/");
            break;
        case "request-demo":
            res.redirect("/");
            break;
    }
    res.redirect("/");
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
