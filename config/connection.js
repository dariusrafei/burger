// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if(err)throw err;
  console.log("connected as id: "+connection.threadid);
});

// Export connection for our ORM to use.
module.exports = connection;