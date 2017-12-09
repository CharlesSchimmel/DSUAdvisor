// app/routes/routes.ts
module.exports = function (app, passport) {
    // ===================================================================================================================
    // MAIN SITE NAVIGATION ==============================================================================================
    // ===================================================================================================================

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // MENU ================================
    // =====================================

    app.get('/menu', function (req, res) {
        res.render('menu/menu.ejs');
    });

    /////MAJOR
    app.get('/major', function (req, res) {
        res.render('menu/major.ejs');
    });
    app.post('/majorSubmit', function (req, res) {
        console.log(req.body);
        return res.end;
    });

    /////CLASSES CURRENT
    app.get('/classes_current', function (req, res) {
        res.render('menu/classes_current.ejs');
    });

    /////CLASSES TAKEN
    app.get('/classes_taken', function (req, res) {
        res.render('menu/classes_taken.ejs');
    });

    /////TRACK
    app.get('/track', function (req, res) {
        res.render('menu/track.ejs', { credits_needed: 66, });
    });

    /////SCHEDULE
    app.get('/schedule', function (req, res) {
        res.render('menu/schedule.ejs');
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
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('account/signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('account/profile.ejs', {
            user: req.user // get the user out of session and pass to template
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
    res.redirect('/');
}