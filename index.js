/*global require:true, console:true */
"use strict";

//require http module componets
var http = require('http');
//require url module components
var url = require('url');
//require file system components
var fs = require('fs');
//require chalk module
var chalk = require('chalk');

var serverVersion = 0.1;

const error = chalk.keyword('red');
//const warning = chalk.keyword('yellow');
const info = chalk.keyword('white');


fs.readFile('consoleLog.txt', function(err, data) {
  if (err){
    fs.appendFile('consoleLog.txt', getTime() + "Server Log Created!"+ "\n" + getTime() + "SERVER STARTED. Version: " + serverVersion + "\n", function(err) {
      if (err) throw err;
      console.log(getTime() + info("Server Log Created!" + "\n" + getTime() + "SERVER STARTED. Version: " +serverVersion + "\n"));
    });
  }else{
    fs.appendFile('consoleLog.txt', getTime() + "SERVER STARTED. Version: " + serverVersion+ "\n", function(err) {
      if (err) throw err;
      console.log(getTime() + info("Server Started Version: " + serverVersion));
    });

  }
});


//create a http server
http.createServer(function (req, res) {


  var q = url.parse(req.url, true);
  //print q
  fs.appendFile('consoleLog.txt', getTime() + "New connection to " + q.pathname + "\n", function(err){
    if (err) throw err;
      console.log(getTime() + info("New connection to " + q.pathname));
  })
  

  var filename = "." + q.pathname;

  if (filename == "./"){//do this if its the homepage


    fs.readFile("./index.html", function(err, data) {

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      //end response here 
      return res.end();
    });

  }else{
    //do this if its a normal page or 404

    fs.readFile(filename, function(err, data) {

      if (err) {

        console.log(getTime() + error("404 " + err));
        res.writeHead(404, {'Content-Type': 'text/html'});
        //end response here with 404
        return res.end("404 Not Found");

      }  

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      //end response here 
      return res.end();
    });
  }

}).listen(8080);


function getTime(){

  var date = new Date();

  var hours = date.getHours();

  var minutes = date.getMinutes();

  var seconds = date.getSeconds();

  return hours + ":" + minutes + ":" + seconds + "-->";

}