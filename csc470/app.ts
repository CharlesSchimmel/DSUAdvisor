// set up ======================================================================
// get all the tools we need
import debug = require('debug');
import express = require('express');
import session = require('express-session');
import path = require('path');
import ejs = require('ejs');
import http = require('http'); // maybe not needed
import mongoose = require('mongoose');
import passport = require('passport');
import flash = require('connect-flash');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');

var app = express();
var port = process.env.PORT || 3000;

var configDB = require('./config/database');

// configuration ===============================================================
mongoose.connect(configDB.url, {
    useMongoClient: true,
}); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

//app configuration =====================================================================
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(require('cookie-parser')());

//set view engine to ejs
app.set('view engine', 'ejs');

// required for passport
app.use(session({ secret: 'csc470' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
require('./routes/routes')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
