var http = require("http");
var fs = require("fs");
var URL = require("url");

http
  .createServer(function (req, res) {
    var userurl = req.url;

    userpath = URL.parse(userurl, true);
    path = userpath.pathname;

   q = userpath.query;
    

//----------------
    // userurl = req.url;
    // console.log(userurl);

    // abc = URL.parse(userurl,true);
    // console.log(abc);
    // console.log(abc.pathname);

    // console.log(abc.query.userid);


    if (path == "/") {
      fs.readFile("index.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>Sorry, Site under construction</h1>");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
    if (path == "/demopage") {
      fs.readFile("demopage.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>Sorry, Site under construction</h1>");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    }
    if (path == "/welcome") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`Welcome ${q.userid}`);
      res.end();
    }

    // q = URL.parse(path, true).query;
    // username = q.username;
    // console.log(username);
    // res.end(`<h1>Welcome ${username}</h1>`);
  })
  .listen(1234, function () {
    console.log("Waiting for Clients");
  });
