var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    console.log("Hi Buddy");

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
    
    console.log("end");
  })
  .listen(1234, function () {
    console.log("Waiting for Clients");
  });
