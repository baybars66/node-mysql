var mysql = require('mysql');

var con = mysql.createConnection({
  host: "88.250.131.163",
  user: "bay66",
  password: "super66",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //var sql = "CREATE TABLE musteriler (isim VARCHAR(255), adres VARCHAR(255))";
  var sql = "CREATE TABLE gelenevrak (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});