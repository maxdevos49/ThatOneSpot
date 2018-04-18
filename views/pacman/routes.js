
module.exports = function(app){
   
  app.get('/pacman.html', function (req, res) {
    res.render('./pacman/pacman');
  });

}
