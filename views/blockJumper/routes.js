
module.exports = function(app){
  
  app.get('/blockjumper.html', function (req, res) {
    res.render('./blockJumper/blockjumper');
  });

}
