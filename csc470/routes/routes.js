// app/routes/routes.ts
module.exports = function (app, passport) {
    // ===================================================================================================================
    // MAIN SITE NAVIGATION ==============================================================================================
    // ===================================================================================================================
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        if (req.user) {
            res.render('menu/menu.ejs');
        }
        else {
            res.render('index.ejs', { user_isloggedin: req.isAuthenticated() }); // load the index.ejs file
        }
    });
    // =====================================
    // MENU ================================
    // =====================================
    app.get('/menu', isLoggedIn, function (req, res) {
        res.render('menu/menu.ejs', { user_isloggedin: req.isAuthenticated() });
    });
    /////MAJOR
    app.get('/major', isLoggedIn, function (req, res) {
        res.render('menu/major.ejs', { user_isloggedinoggedin: req.isAuthenticated() });
    });
    app.post('/majorSubmit', isLoggedIn, function (req, res) {
        console.log(req.body);
        return res.end;
    });
    /////CLASSES CURRENT
    app.get('/classes/current', isLoggedIn, function (req, res) {
        res.render('classes/current.ejs', { user_isloggedin: req.isAuthenticated(),
            user: req.user,
            all_classes: all_classes
        });
    });
    /////CLASSES TAKEN
    app.get('/classes/taken', isLoggedIn, function (req, res) {
        res.render('classes/taken.ejs', { user_isloggedin: req.isAuthenticated(),
            user: req.user,
            all_classes: all_classes
        });
    });
    /////TRACK
    app.get('/classes/track', isLoggedIn, function (req, res) {
        res.render('classes/track.ejs', { user_isloggedin: req.isAuthenticated(),
            user: req.user,
            credits_left: calcCreditsLeft(req.user),
        });
    });
    /////SCHEDULE
    app.get('/classes/schedule', isLoggedIn, function (req, res) {
        res.render('classes/schedule.ejs', { user_isloggedin: req.isAuthenticated(),
            user: req.user,
            all_classes: all_classes
        });
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
        successRedirect: '/menu',
        failureRedirect: '/login',
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
            user_isloggedin: req.isAuthenticated()
        });
    });
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true // allow flash messages
    }));
    // =====================================
    // PROFILE SECTION =========================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('account/profile.ejs', {
            user: req.user,
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
    //
    // app.post for /classes/take that takes the class and adds it to users finished classes
    // same for taking, registered, waitlist, and untaken
    // "In Progress"
    app.post('/classes/take', function (req, res) {
        req.user.classesInProgress.push(req.body.mark_taken);
        res.redirect('/classes/current');
    });
    // "Still Needed"
    app.post('/classes/untake', function (req, res) {
        untakeClass(req.user, req.body.mark_taken);
        res.redirect('/classes/current');
    });
    // "Completed"
    app.post('/classes/completed', function (req, res) {
        req.user.classesFinished.push(req.body.mark_taken);
        res.redirect('/classes/current');
    });
    // "Waitlisted"
    app.post('/classes/waitlist', function (req, res) {
        req.user.classesWaitlisted.push(req.body.mark_taken);
        res.redirect('/classes/current');
    });
    // "Registered"
    app.post('/classes/register', function (req, res) {
        req.user.classesSignedUpfor.push(req.body.mark_taken);
        res.redirect('/classes/current');
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
var fs = require('fs');
var all_classes = JSON.parse(fs.readFileSync('cs_courses.json', 'utf8'));
function calcCreditsLeft(user) {
    var count = 0;
    for (var i = 0; i < all_classes.length; i++) {
        if (user.classesFinished.indexOf(all_classes[i]) <= -1) {
            count += all_classes[i]._creditHours;
        }
    }
    return count;
}
function untakeClass(user, aClass) {
    var index = user.classesFinished.indexOf(aClass);
    if (index !== -1) {
        user.classesFinished.splice(index, 1);
    }
    index = user.classesInProgress.indexOf(aClass);
    if (index !== -1) {
        user.classesInProgress.splice(index, 1);
    }
    index = user.classesWaitlisted.indexOf(aClass);
    if (index !== -1) {
        user.classesWaitlisted.splice(index, 1);
    }
    index = user.classesSignedUpfor.indexOf(aClass);
    if (index !== -1) {
        user.classesSignedUpfor.splice(index, 1);
    }
}
//# sourceMappingURL=routes.js.map