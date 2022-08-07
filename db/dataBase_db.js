var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "ChadHuntsmanRules1"  
});  
con.connect(function(err) {  
if (err) throw err;  
console.log("Connected!");  
con.query("CREATE DATABASE dataBase_db", function (err, result) {  
if (err) throw err;  
console.log("Database created");  
});  
});  