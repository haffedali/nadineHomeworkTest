// import MySQL connection
require('dotenv').config();
const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: '8525',
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("There was an error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
