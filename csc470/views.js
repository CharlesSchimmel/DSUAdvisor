"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SET UP VIEW ENGINE
 */
function setViews(app, path, view) {
    //var engines = require('consolidate');
    //app.set('views', path.join(__dirname, 'views'));
    //app.set('views', __dirname + '/app/server/views');
    //app.engine('jade', engines.jade);
    //app.engine('pug', engines.pug);
    //app.engine('html', engines.ejs);
    if (view == "pug") {
        /**set view engine pug*/
        app.set('view engine', 'pug');
    }
    else if (view == "jade") {
        /**set view engine jade*/
        app.set('views', __dirname + '\\views');
        app.set('view engine', 'jade');
    }
    else if (view == "html") {
        /**set view engine html*/
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
    }
}
exports.setViews = setViews;
///**
// * SET UP VIEW ENGINE
// */
//var engines = require('consolidate');
//app.set('views', path.join(__dirname, 'views'));
////app.set('views', __dirname + '/app/server/views');
////app.engine('jade', engines.jade);
////app.engine('pug', engines.pug);
////app.engine('html', engines.ejs);
///**set view engine pug*/
////app.set('view engine', 'pug');
///**set view engine jade*/
////app.set('views', __dirname + '\\views');
////app.set('view engine', 'jade');
///**set view engine html*/
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html'); 
//# sourceMappingURL=views.js.map