//import ORM 
var orm = require('../config/orm.js');

var burger = {
  findAll: function(cb) {
    orm.findAll('burgers', function(res) {
      cb(res);
    });
  },
  create: function(columnNames, columnValues, cb) {
    orm.create('burgers', columnNames, columnValues, function(res) {
      cb(res);
    });
  },
  update: function(objectColumnValues, condition, cb) {
    orm.update('burgers', objectColumnValues, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;