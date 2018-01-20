var http=require('http');
http.createServer(function(req,res){
    console.log("hello called");
    res.end("hello kec");
}).listen(5000);
