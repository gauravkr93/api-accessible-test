var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Answers = require('../models/answers.js');

/*/* PUT users listing.
router.put('/add', function(req, res, next) {
console.log(req);
    

res.send('add question');


});
*/

/* SAVE BOOK */
router.post('/add', function(req, res, next) {
    console.log(req.body);
    Answers.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


/* GET users listing. */
router.get('/all', function(req, res, next) {
    
    Answers.find(function (err, answersResult) {
            if (err) return next(err);
            res.json(answersResult);
          });
    
    //res.send('add question');
    
    
    });


module.exports = router;
