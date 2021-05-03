
const path = require("path");
const mysql  = require('mysql');
const { rootCertificates } = require("tls");

const dbConnection = mysql.createConnection({
  host: 3006,//añadir host
  user: '33006',
  password: 'celia',

  database: 'turismo',
});
 
dbConnection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('DB connected as id ' + dbConnection.threadId);
});

module.exports = dbConnection;