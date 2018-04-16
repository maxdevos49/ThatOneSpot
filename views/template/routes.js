
module.exports = function(app){
   
  app.get('/template.html', function (req, res) {
    res.render('./template/template');
  });

}
