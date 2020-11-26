var mysql = require('mysql');

var con = mysql.createConnection({
  host: "88.250.131.163",
  user: "bay66",
  password: "super66",
  database: "mydb"
});

/*

con.connect(function(err) {
    if (err) throw err;
    //con.query("SELECT * FROM gelenevrak", function (err, result, fields) {
    con.query("SELECT name, address FROM gelenevrak", function (err, result, fields) {  
    //  con.query("SELECT name FROM gelenevrak", function (err, result, fields) {    
       if (err) throw err;
         console.log(result);
         //console.log(result[3].name);
    });
*/
/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM gelenevrak WHERE address = 'Sancaktepe 37'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  
*/


con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM gelenevrak WHERE name LIKE 'M%'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });




});

