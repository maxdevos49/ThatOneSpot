
//start the server with express
const express = require('express');
const app = express();
const server = require('http').Server(app);

//use this to display the ip for connecting
const ip = require('ip');

//determine the port to listen too
const port = process.env.PORT || 8080;

//let the server listen on port 80
server.listen(port);

// set the view engine to ejs
app.set('view engine', 'ejs')

//tell where to find page depended info. css/javascript/images/audio/and other stuff
app.use(express.static('public'));

//tell console the server is running
console.log(`ThatOneSpot is Running! IP is ${ip.address()}:${port}`);

//do this on a connection from the client
app.get('/', (req, res) => {

  //respond with this for the client
  res.render('/index/index.ejs');
  console.log("Connection!");

});

app.get('/index.html', (req, res) => {

  //respond with this for the client
  res.render("index/index.ejs");
  console.log("Connection!");

});
