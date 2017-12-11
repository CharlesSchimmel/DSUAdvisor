"use strict";
exports.__esModule = true;
var express = require("express");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
var flash = require("connect-flash");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var app = express();
var port = process.env.PORT || 3000;
var configDB = require('./config/database');
// configuration ===============================================================
mongoose.connect(configDB.url, {
    useMongoClient: true
}); // connect to our database
require('./config/passport')(passport); // pass passport for configuration
//app configuration ============================================================
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
