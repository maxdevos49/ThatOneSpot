
module.exports = function(app){
   
  app.get('/gallery.html', function (req, res) {
    res.render('./gallery/gallery');
  });

}
