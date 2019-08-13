var http = require('http');
var fs = require('fs');
var url = require('url');
// var db = require('./db');
var promise = new Promise(function(reslove, reject){
settimeout(function(){
// var server = http.createServer(function(req, res){
  
    
    var parUrl = url.parse(req.url, true);
    var pathname = '.';
    console.log('request was made: ' + req.url);
    
    if(parUrl.pathname === "/add") {
        // db.insertCaughtData(parUrl.query.email);
        console.log(parUrl.query.email);
    }
   
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var data = fs.readFileSync('./index.html');
        db.getInv().then(function(result){
        res.write(data.toString())
        res.end();
        }).catch(console.log);

    } else if (req.url === '/style.css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
        var data = fs.readFileSync('./style.css');
        res.end(data.toString()); 

    } else if (req.url === '/reset.css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
        var data = fs.readFileSync('./reset.css');
        res.end(data.toString()); 
    } 
    else if (req.url === '/fonts/LeagueGothic-Regular.otf'){
        res.writeHead(200, {'Content-Type': "font/opentype"});
        var data = fs.readFileSync('./fonts/LeagueGothic-Regular.otf');
        res.end(data); 
    }
    else if (req.url === '/theclubhouse.png'){
        res.writeHead(200, {'Content-Type': "image/png"});
        var data = fs.readFileSync('./theclubhouse.png');
        res.end(data); 
    }
    else if (req.url === '/AJAX.js'){
        res.writeHead(200, {'Content-Type': "text/plain"});
        var data = fs.readFileSync('./AJAX.js');
        res.end(data); 
        
    } else {
        res.end("victory is not mine");
    }
  
});
  
server.listen(8080, '127.0.0.1');
console.log('The server is listening on port ' + 8080);