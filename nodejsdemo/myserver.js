
/**
 *1. how to create our own server
 *2.use res.end always
 *3.how to input whole htmlfile
 */
var fs = require('fs');
var http=require('http')

http.createServer(function(req,res){
    console.log("Hi Buddy using server")
    if(err){
        res.write(404,{Content:type})
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile("index.html",function(err,data){
            res.write(data);
            res.end();
    });
    console.log("end");
}).listen(1234,function(){
    console.log("Waiting for clients")
});


