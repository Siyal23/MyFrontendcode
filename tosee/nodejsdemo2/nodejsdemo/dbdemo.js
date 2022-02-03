var mysql = require('mysql2');

var con = mysql.createConnection({
    
    host: "localhost",
    port: 3306,
    user: "naushad",
    password: "naushad",
    database : "naushad"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });