var http=require("http")
var fs=require("fs")
var URL=require("url")
http.createServer(function(req,res){
        var path=req.url
        console.log(path)
        q=URL.parse(path,true).query
        username=q.username;
        console.log(username)
        res.end(`<h1>Welcome ${username}</h1>`);
    })
    .listen(1234,function(){
        console.log("Waiting for clients")
    })