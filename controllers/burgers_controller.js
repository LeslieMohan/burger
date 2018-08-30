var express = require('express');

var router = express.Router();

//import model burgers.js - use it's database
var burger = require('../models/burger.js');


//create routes
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data 
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post('/api/new-burger', function(req, res) {
  burger.insertOne([
    'burger_name', 'devoured'
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put('/api/update-burger/:id', function(req, res) {
  var condition = `id = ${req.params.id}`;
  console.log('condition', condition);

  burger.updateOne(
    "devoured  =  true"
  , condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



router.delete("/api/delete-burger/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;


  burger.delete(condition, function(result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;