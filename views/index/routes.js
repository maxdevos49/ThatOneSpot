
module.exports = function(app){
  // define the home page route
  app.get('/', function (req, res) {
    res.render('./index/index');
  });

  app.get('/index.html', function (req, res) {
      res.render('./index/index');
  });
  
}