var http=require('http');
var fs=require('fs');
//dt=require('./datemodule');
http.createServer(function(req,res){
    fs.readFile('htmlpage.html',function(err,data){
    res.writeHead(200,{'content-Type':'text/html'});
     res.write(data);
    res.end();
    });
}).listen(8082);