"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IMPORTED MODULES
 */
var debug = require("debug");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var Global = require("./public/javascripts/Global");
var fs = require('fs');
var all_classes = JSON.parse(fs.readFileSync('cs_courses.json', 'utf8'));
/**
 * Database and Sessions
 */
var myUri = 'mongodb://csc470';
var promise = mongoose.connect(myUri, {
    useMongoClient: true,
});
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
//var db = require('./db');
var AdvisorUser = require("./db/users");
var User = User = mongoose.model('User', AdvisorUser.User.userSchema);
/**
 * LIST OF ROUTS
 */
var index_1 = require("./routes/index");
var user_1 = require("./routes/user");
var major_1 = require("./routes/major");
var track_1 = require("./routes/track");
var logout_1 = require("./routes/logout");
var login_1 = require("./routes/login");
var profile_1 = require("./routes/profile");
var signup_1 = require("./routes/signup");
var classes_current_1 = require("./routes/classes_current");
var classes_left_1 = require("./routes/classes_left");
var schedule_1 = require("./routes/schedule");
var app = express();
/**
 * SET UP VIEW ENGINE
 */
//app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
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
passport.use(new Strategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
        if (err) {
            return cb(err);
        }
        if (!user) {
            return cb(null, false);
        }
        if (user.password != password) {
            return cb(null, false);
        }
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
        if (err) {
            return cb(err);
        }
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
app.use('/', index_1.default);
app.use('/users', user_1.default);
app.use('/menu', signup_1.default);
app.use('/major', major_1.default);
app.use('/track', track_1.default);
app.use('/login', login_1.default);
app.use('/logout', logout_1.default);
app.use('/profile', profile_1.default);
app.use('/signup', signup_1.default);
app.use('/classes_current', classes_current_1.default);
app.use('/classes_left', classes_left_1.default);
app.use('/schedule', schedule_1.default);
/**
 * PAGE REQUESTS
 */
/////Index
app.get('/', function (req, res) {
    res.render('home', { user: req.user });
});
/////HOME
app.get('/menu', function (req, res) {
    res.render('menu');
});
/////PROFILE
app.get('/profile', function (req, res) {
    require('connect-ensure-login').ensureLoggedIn();
    return res.render('profile', {
        tile: "Accout Information",
        user: req.user
    });
});
/////classes_current
app.get('/classes_current', function (req, res) {
    return res.render('classes_current');
});
/////SIGNUP
app.get('/signup', function (req, res) {
    return res.render('signup');
});
app.post('/createAccount', function (req, res) {
    promise.then(function (db) { mongoose.connection.openUri(myUri); });
    var user = req.body;
    console.log(req.body);
    user["userId"] = Global.genUniqueId();
    console.log(user.userId.toString());
    console.log(user);
    var newUser = new User(user);
    console.log('User created successfully!');
    User.save(function (err) {
        if (err)
            return res.redirect('/signup');
        console.log('User saved successfully!');
    });
    res.redirect('/login');
    return res.end;
});
app.get('/classes_left', function (req, res) {
    var classes_taken = []; // setting up test data
    var classes_registered = []; // setting up test data
    for (var i = 0; i < 5; i++) {
        classes_taken.push(all_classes[i]);
    }
    for (var i = 0; i < 10; i++) {
        classes_registered.push(all_classes[i]);
    }
    return res.render('classes_left', { all_classes: all_classes, classes_taken: classes_taken, classes_registered: classes_registered });
});
/////schedule
app.get('/schedule', function (req, res) {
    var c1 = { name: "Engish 101" };
    var c2 = { name: "CSC 100" };
    var courseobj = {
        english101: c1,
        csc100: c2,
    };
    return res.render('schedule', { courses: courseobj });
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
    return res.render('track', { credits_needed: 66, });
});
/////LOGIN
app.get('/login', function (req, res) {
    res.render('login');
});
app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
    res.redirect('/');
});
/////LOGOUT
app.get('/logout', function (req, res) {
    res.render('logout');
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