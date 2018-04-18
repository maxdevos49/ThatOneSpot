
module.exports = function(app){
   
  app.get('/resume.html', function (req, res) {
    res.render('./resume/resume');
  });

}
