/**
 * IMPORTED MODULES
 */
import debug = require('debug');
import express = require('express');
import path = require('path');
import http = require('http');
import session = require('express-session');
import bodyParser = require('body-parser');
import errorHandler = require('errorhandler');
import cookieParser = require('cookie-parser');
import { Request } from "express";
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');

/**
 * LIST OF ROUTS
 */
import routes from './routes/index';
import users from './routes/user';
import major from './routes/major';
import track from './routes/track';
import logout from './routes/logout';
import login from './routes/login';
import profile from './routes/profile';

var app = express();

/**
 * SET UP VIEW ENGINE
 */
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/**
 * APP USE
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(require('stylus').middleware({ src: __dirname + './public' }));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

/**
 * LOGIN SERVER
 */

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
    function (username, password, cb) {
        db.users.findByUsername(username, function (err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false); }
            if (user.password != password) { return cb(null, false); }
            return cb(null, user);
        });
    }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    db.users.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

/**
 * LIST OF PAGES
 */
app.use('/', routes);
app.use('/users', users);
app.use('/major', major);
app.use('/track', track);
app.use('/login', login);
app.use('/logout', logout);
app.use('/profile', profile);

/**
 * PAGE REQUESTS
 */
/////HOME
app.get('/',
    function (req, res) {
        res.render('home', { user: req.user });
    });

/////MAJOR
app.get('/major', function (req, res) {
    //console.log(req.body);
    //console.log(res.json.toString());
    return res.render('major');
});

app.post('/majorSubmit', function (req, res) {
    console.log(req.body);
    return res.end;
});


/////TRACK
app.get('/track', function (req, res) {
    //console.log(req.body);
    return res.render('track');
});

/////LOGIN
app.get('/login',
    function (req, res) {
        res.render('login');
    });

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });


/////LOGOUT
app.get('/logout',
    function (req, res) {
        res.render('logout')
    });


/////PROFILE
app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
        res.render('profile', { user: req.user });
    });


/**
 * ERROR HANDLERS
 */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req, res, next) => {
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
