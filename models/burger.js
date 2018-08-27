var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(columnNames, columnValues, cb) {
    orm.insertOne('burgers', columnNames, columnValues, function(res) {
      cb(res);
    });
  },
  updateOne: function(objectColumnValues, condition, cb) {
    orm.updateOne('burgers', objectColumnValues, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;