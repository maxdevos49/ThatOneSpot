module.exports = function(app) {

    //require pages routes
    require('./views/template/routes.js')(app);
    require('./views/index/routes.js')(app);
    require('./views/gallery/routes.js')(app);
    require('./views/resume/routes.js')(app);
    require('./views/projects/routes.js')(app);



}