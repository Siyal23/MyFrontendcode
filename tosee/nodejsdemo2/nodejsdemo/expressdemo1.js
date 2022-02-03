express = require("express");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
app = express();

app.use(express.static("public"));
app.use(express.static("jsfiles"));
app.use(bodyParser.urlencoded({ extended: true })); 

app.listen(4321, function () {
  console.log("Server Started");
});

app.get("/", function (req, res) {

    res.sendFile("index.html");

});

app.get("/timepass", function (req, res) {
 console.log("timepass")
  res.sendFile(__dirname+"/public/demopage.html");

});

app.get("/welcome",function(req,res){
   var userid;
 user =   req.query
 console.log(userid);
 res.send("WElcome " + user.userid);
});


app.post("/saveuser",function(req,res){
    var username = req.body.uname;
    var ucity = req.body.city;
    console.log(username + " " +ucity);
    res.end();
});
