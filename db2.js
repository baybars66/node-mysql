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
  console.log("Connected!");
  var sql = "INSERT INTO musteriler (isim, adres) VALUES ('BS Slotion', 'Sultanbeyli 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });*/

/*
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO gelenevrak (name, address) VALUES ?";
    var values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['William', 'Central st 954'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });

*/


/*
con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO gelenevrak (name, address) VALUES ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: " + result.insertId);
    });

*/

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (name, pass) VALUES ?";
  var values = [
    ['Baybars', 'Marduk66'],
    ['Suela', 'Ani0212'],
    ['Cihan', 'Chaina652'],
    ['Yaser', 'Morocco21'],
    ['Ozgur', 'Russan69']
    
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });








});