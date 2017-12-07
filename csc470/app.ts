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
import ejs = require('ejs');
import mongoose = require('mongoose');
import mongodb = require('mongodb');
import Global = require('./public/javascripts/Global');
var fs = require('fs');
var all_classes = JSON.parse(fs.readFileSync('cs_courses.json', 'utf8'));

/**
 * Database and Sessions
 */
var myUri = 'mongodb://localhost:27017';
var promise = mongoose.connect(myUri, {
    useMongoClient: true,
    /* other options */
});
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
//import User = require('./db/users');

//var User = mongoose.model('User', new mongoose.Schema({
//    userId: { type: Number, required: true, unique: true },
//    firstName: { type: String, required: true },
//    lastName: { type: String, required: true },
//    major: Number,
//    progLength: Number,
//    userName: { type: String, required: true, unique: true },
//    password: { type: String, required: true },
//    classesInProgress: [],
//    classesWaitlisted: [],
//    classesSignedUpfor: [],
//}));

/**
 * LIST OF ROUTS
 */
import routes from './routes/index';
import users from './routes/user';
import menu from './routes/menu';
import major from './routes/major';
import track from './routes/track';
import logout from './routes/logout';
import login from './routes/login';
import profile from './routes/profile';
import signup from './routes/signup';
import classes_current from './routes/classes_current';
import classes_left from './routes/classes_left';
import schedule from './routes/schedule';

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
app.use('/menu', signup);
app.use('/major', major);
app.use('/track', track);
app.use('/login', login);
app.use('/logout', logout);
app.use('/profile', profile);
app.use('/signup', signup);
app.use('/classes_current', classes_current);
app.use('/classes_left', classes_left);
app.use('/schedule', schedule);


/**
 * PAGE REQUESTS
 */
/////Index
app.get('/',
    function (req, res) {
        res.render('home', { user: req.user });
    });

/////HOME
app.get('/menu',
    function (req, res) {
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

    //promise.then(function (db) { mongoose.connection.openUri(myUri) });

    //var user = req.body;
    //console.log(req.body);
    //user["userId"] = Global.genUniqueId();

    //console.log(user.userId.toString());
    //console.log(user);

    //var newUser = new User(user);
    //console.log('User created successfully!');

    //User.save(function (err) {
    //    if (err) return res.redirect('/signup');
    //    console.log('User saved successfully!');
    //});

    //res.redirect('/login');
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