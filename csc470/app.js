"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IMPORTED MODULES
 */
var debug = require("debug");
var express = require("express");
var path = require("path");
var session = require("express-session");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var MongoStore = require('connect-mongo')(session);
var index_1 = require("./routes/index");
var user_1 = require("./routes/user");
var app = express();
/**
 * SET UP VIEW ENGINE
 */
var engines = require('consolidate');
app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname + '/app/server/views');
//app.engine('jade', engines.jade);
//app.engine('pug', engines.pug);
//app.engine('html', engines.ejs);
/**set view engine pug*/
//app.set('view engine', 'pug');
/**set view engine jade*/
//app.set('views', __dirname + '\\views');
app.set('view engine', 'jade');
/**set view engine html*/
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
/**
 * APP USE
 */
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(__dirname + '/app/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('stylus').middleware({ src: __dirname + './public' }));
app.use('/', index_1.default);
app.use('/users', user_1.default);
/**
 * Set database hosts
 */
var dbHost = process.env.DB_HOST || 'localhost';
var dbPort = process.env.DB_PORT || 27017;
var dbName = process.env.DB_NAME || 'node-login';
var dbURL = 'mongodb://' + dbHost + ':' + dbPort + '/' + dbName;
if (app.get('env') == 'live') {
    // prepend url with authentication credentials // 
    dbURL = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + dbHost + ':' + dbPort + '/' + dbName;
}
/**
 * APP SESSION
 */
app.use(session({
    secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: dbURL })
}));
//require('./app/server/routes')(app);
/**
 * PAGE REQUESTS
 */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
/**
 * ERROR HANDLERS
 */
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
/**
 * SET UP SERVER LISTENING
 */
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
//# sourceMappingURL=app.js.map