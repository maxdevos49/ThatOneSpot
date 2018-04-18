
//start the server with express
const express = require('express');
const app = express();
const server = require('http').Server(app);



//use this to display the ip for connecting
const ip = require('ip');

//determine the port to listen too
const port = process.env.PORT || 8080;

//tell console the server is running
console.log(`ThatOneSpot is Running! IP is ${ip.address()}:${port}`);

//tell where to find page depended info. css/javascript/images/audio/and other stuff
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs')
require("./routes")(app);


//let the server listen on port 80
server.listen(port);
