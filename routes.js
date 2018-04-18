module.exports = function(app) {


    //print thre accessed page
    app.use(function(req,res,next){

      console.log(`Connection! - ${req.url}`);

      next();

    });
    //require pages routes
    require('./views/template/routes.js')(app);
    require('./views/index/routes.js')(app);
    require('./views/gallery/routes.js')(app);
    require('./views/resume/routes.js')(app);
    require('./views/projects/routes.js')(app);
    require('./views/pacman/routes.js')(app);
    require('./views/blockJumper/routes.js')(app);
    require('./views/tictactoe/routes.js')(app);
    require('./views/snake/routes.js')(app);
    require('./views/paint/routes.js')(app);


    //404 error because nothing else was found
    app.use(function(req, res, next){
        res.status(404);
      
        // respond with html page
        if (req.accepts('html')) {
          res.render('./404/404', { url: req.url });
          return;
        }
      
        // respond with json
        if (req.accepts('json')) {
          res.send({ error: 'Not found' });
          return;
        }
      
        // default to plain-text. send()
        res.type('txt').send('Not found');
      });



}