
var mysql = require('mysql');

var con = mysql.createConnection({
  //host: "http://
  //host:"88.250.131.163",
 host: "88.250.131.163",
  user: "bay66",
  password: "super66"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 // con.query("CREATE DATABASE mydb", function (err, result) {
   // if (err) throw err;
   // console.log("Database created");
  //});
});





