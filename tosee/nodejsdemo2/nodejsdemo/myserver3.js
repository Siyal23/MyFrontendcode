var http = require("http");
var fs = require("fs");
var URL = require("url");

http
  .createServer(function (req, res) {
    userurl = req.url;
    console.log(userurl);

    abc = URL.parse(userurl,true);
    console.log(abc);
    console.log(abc.pathname);
    console.log(abc.query.userid);
    console.log();
    res.end();
  })
  .listen(1234, function () {
    console.log("Waiting for Clients");
  });
