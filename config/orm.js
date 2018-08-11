// Import MySQL connection.
var connection = require("./connection.js");

// creates an array of question marks - ["?", "?", "?"] to turn it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
 var printQuestionMarks = function(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

// convert object key/value pairs to SQL syntax
 var objToSql = function(object) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in object) {
    var value = object[key];
    
    if (Object.hasOwnProperty.call(object, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }

  return arr.toString();
};

// Object for SQL statement functions.
var orm = {
  selectAll: function(tableName, cb) {
   var queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: function(tableName, columnNames, columnValues, cb) {
    var columnNameString = columnNames.toString();
    var questionMarks = printQuestionMarks(columnValues.length);
    var queryString = `INSERT INTO ${tableName} (${columnNameString}) VALUES (${questionMarks});`;
    console.log(queryString);
    connection.query(queryString, columnValues, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(tableName, objectColumnValues, condition, cb) {
    var objectToSQL = objToSql(objectColumnValues);
    var queryString = `UPDATE ${tableName} SET ${objectToSQL} WHERE ${condition};`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  delete: function(tableName, condition, cb) {
    var queryString = `DELETE FROM ${tableName} WHERE ${condition};`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export the orm object 
module.exports = orm;
