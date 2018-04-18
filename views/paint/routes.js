
module.exports = function(app){
   
  app.get('/paint.html', function (req, res) {
    res.render('./paint/paint');
  });

}
