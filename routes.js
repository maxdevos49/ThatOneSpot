module.exports = function(app) {

    //require pages routes
    const template = require('./views/template/routes.js')(app);
    const index = require('./views/index/routes.js')(app);



}