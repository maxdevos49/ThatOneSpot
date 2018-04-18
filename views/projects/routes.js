
module.exports = function(app){
  
  app.get('/projects.html', function (req, res) {
    res.render('./projects/projects');
  });

}
