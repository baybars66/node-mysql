var mysql = require('mysql');

var con = mysql.createConnection({
  host: "88.250.131.163",
  user: "bay66",
  password: "super66",
  database: "Mrts2020"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Travel_Budget_Detail (No INT AUTO_INCREMENT PRIMARY KEY, Name1 VARCHAR(255), Name2 VARCHAR(255),Name3 VARCHAR(255),Country VARCHAR(255),Start VARCHAR(255),Turn_Back VARCHAR(255),Days VARCHAR(255),Estimated_Budget VARCHAR(255), Realized_Budget VARCHAR(255))";
  //var sql = "CREATE TABLE gelenevrak (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});