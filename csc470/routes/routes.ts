//setup
import func = require('./../public/javascripts/requestFunctions');

//module
module.exports = function (app, passport) {
    // ===================================================================================================================
    // MAIN SITE NAVIGATION ==============================================================================================
    // ===================================================================================================================

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        if (req.user){
            res.render('menu/menu.ejs',
                {
                    user_isloggedin: req.isAuthenticated(),
                    user: req.user,
                });
        } else {
            res.render('index.ejs',
                {
                    user_isloggedin: req.isAuthenticated(),
                    user: req.user,
                } );
        }
    });

    // =====================================
    // MENU ================================
    // =====================================

    app.get('/menu', isLoggedIn, function (req, res) {
        if (req.user) {
            res.render('menu/menu.ejs',
                {
                    user_isloggedin: req.isAuthenticated(),
                    user: req.user,
                });
        } else {
            res.render('index.ejs',
                {
                    user_isloggedin: req.isAuthenticated(),
                    user: req.user,
                });
        }
    });

    /////MAJOR
    app.get('/major', isLoggedIn, function (req, res) {
        res.render('menu/major.ejs',
            {
                user_isloggedin: req.isAuthenticated(),
                user: req.user,
            }
        );
    });

    app.post('/majorSubmit', isLoggedIn, function (req, res) {
        //console.log(req.body.toString());
        req.user.major = req.body.major;
        req.user.save(function (err) {
            if (err)
                console.log('Accout update failed');
            return
        });
        res.redirect('/profile');
    });

    app.post('/lengthSubmit', isLoggedIn, function (req, res) {
        //console.log(req.body.toString());
        req.user.progLength = req.body.progLength;
        req.user.save(function (err) {
            if (err)
                console.log('Accout update failed');
            return
        });
        res.redirect('/profile');
    });

    /////CLASSES CURRENT
    app.get('/classes/current', isLoggedIn, function (req, res) {
        res.render('classes/current.ejs', 
            { user_isloggedin: req.isAuthenticated(),
                user: req.user,
                all_classes: func.all_classes,
                classes_needed: func.calcClassesNeeded(req.user),
            }
        );
    });

    /////CLASSES CURRENT POSTS
    // app.post for /classes/take that takes the class and adds it to users finished classes
    // same for taking, registered, waitlist, and untaken

    // "In Progress"
    app.post('/classes/take', function(req,res){
        req.user.classesInProgress.push(JSON.parse(req.body.mark_taken));

        req.user.save(function (err) {
            if (err)
                console.log('Accout update failed');
            return
        });

        res.redirect('/classes/current');
    });

    // "Still Needed"
    app.post('/classes/untake', function (req,res){
        func.untakeClass(req.user, JSON.parse(req.body.mark_taken));

        req.user.save(function (err) {
            if (err)
                console.log('Accout update failed');
            return
        });

        res.redirect('/classes/current');
    });

    // "Completed"
    app.post('/classes/completed', function(req,res){
        req.user.classesFinished.push(JSON.parse(req.body.mark_taken));

        req.user.save(function (err) {
            if (err)
                console.log('Accout update failed');
            return
        });

        res.redirect('/classes/current');
    });

    // "Waitlisted"
    app.post('/classes/waitlist', function(req,res){
        req.user.classesWaitlisted.push(JSON.parse(req.body.mark_taken));

        req.user.save(function (err) {
            if (err)
                console.log('Accout update failed');
            return
        });

        res.redirect('/classes/current');
    });

    // "Registered"
    app.post('/classes/register', function(req,res){
        req.user.classesSignedUpfor.push(JSON.parse(req.body.mark_taken));

        req.user.save(function (err) {
            if (err)
                console.log('Accout update failed');
            return
        });

        res.redirect('/classes/current');
    });
    /////CLASSES TAKEN
    app.get('/classes/taken', isLoggedIn, function (req, res) {
        res.render('classes/taken.ejs', 
            { user_isloggedin: req.isAuthenticated(),
                user: req.user,
                all_classes: req.user.classesFinished,
            }
        );
    });

    /////TRACK
    app.get('/classes/track', isLoggedIn, function (req, res) {
        res.render('classes/track.ejs', 
            { user_isloggedin: req.isAuthenticated(),
                user: req.user,
                credits_left: func.calcCreditsLeft(req.user),
            }
        );
    });

    /////SCHEDULE
    app.get('/classes/schedule', isLoggedIn, function (req, res) {
        res.render('classes/schedule.ejs', 
            { user_isloggedin: req.isAuthenticated(),
                user: req.user,
            }
        );
    });


    // ===================================================================================================================
    // ACCOUNT MANAGMENT =================================================================================================
    // ===================================================================================================================

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function (req, res) {
        // render the page and pass in any flash data if it exists
        res.render('account/login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/menu', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('account/signup.ejs', { 
            message: req.flash('signupMessage'),
            user_isloggedin: req.isAuthenticated() })
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/signup2',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/signup2', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('account/signup2.ejs', {
            message: req.flash('signupMessage'),
            user_isloggedin: req.isAuthenticated()
        })
    });

    app.post('/signup2', function (req, res) {
        if (req.user.firstName != '' && req.user.lastName != '' && req.user.major != '' && req.user.progLength != '') {
            req.user.firstName = req.body.firstName;
            req.user.lastName = req.body.lastName;
            req.user.major = req.body.major;
            req.user.progLength = req.body.progLength;
            req.user.save(function (err) {
                if (err)
                    console.log('Accout update failed');
                return
            });
            res.redirect('/profile');
        } else {

            res.redirect('/signup2');
            req.flash('signupMessage', 'Sorry you\'re missing some information');
        }
    });

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('account/profile.ejs', {
            user: req.user, // get the user out of session and pass to template
            user_isloggedin: req.isAuthenticated()
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // ===================================================================================================================
    // ERROR =============================================================================================================
    // ===================================================================================================================

    app.get('/logout', function (req, res) {
        res.render('error.ejs');
    });
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}
