
module.exports = function(app){
   
  app.get('/tictactoe.html', function (req, res) {
    res.render('./tictactoe/tictactoe');
  });

}
