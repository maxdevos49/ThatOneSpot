
//require server components
const express = require('express');
const app = express();
const server = require('http').Server(app);
const ip = require('ip');
const port = process.env.PORT || 8080;

//let the server listen on port 80
server.listen(port);

//tell console the server is running
console.log(`ThatOneSpot is Running! IP is ${ip.address()}:${port}`);

//tell where to find page depended info. css/javascript/images/audio/and other stuff
app.use(express.static('public'));

//do this on a connection from the client
app.get('/', (req, res) => {

  //respond with this for the client
  res.sendFile(__dirname + '/index.html');
  console.log("Connection!");

});

app.get('/index.html', (req, res) => {

  //respond with this for the client
  res.sendFile(__dirname + '/index.html');
  console.log("Connection!");

});
