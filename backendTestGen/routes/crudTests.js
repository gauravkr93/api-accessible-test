var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Rules = require('../models/test.js');

/*/* PUT users listing.
router.put('/add', function(req, res, next) {
console.log(req);
    

res.send('add question');


});
*/

/* SAVE Rules */
router.post('/add', function(req, res, next) {
    Rules.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


/* GET Rules listing. */
router.get('/all', function(req, res, next) {
  Rules.find(function (err, answersResult) {
            if (err) return next(err);
            res.json(answersResult);
          });  
    });


module.exports = router;
