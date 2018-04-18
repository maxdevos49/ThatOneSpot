
module.exports = function(app){
   
  app.get('/snake.html', function (req, res) {
    res.render('./snake/snake');
  });

}
