var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = require('../models/questions.js');
var Answers = require('../models/answers.js');



/* SAVE Question */
router.post('/add', function(req, res, next) {
  let indexOfCorrect=req.body.correct;
  
    Question.create(req.body.questionBlock, function (err, post) {
      if (err) return next(err);
       
        var answersJson=new Object();
        answersJson._id=post._id;
        var indexOfCorrect=req.body.answerBlock;
        console.log(indexOfCorrect);
        answersJson.optionId=post.options[indexOfCorrect-1]._id;
        
      Answers.create(answersJson, function (errA, ansreply) {
        if (errA) return next(errA);
        console.log(ansreply);
        res.json(post);
       // res.redirect('/answers/add');
      });


      //res.json(post);
     // res.redirect('/answers/add');
    });
  });


/* GET question listing. */
router.get('/all', function(req, res, next) {
    
        Question.find(function (err, questionsResult) {
            if (err) return next(err);
            res.json(questionsResult);
          });
    
    //res.send('add question');
    
    
    });


    /* delete question listing. */
router.delete('/', function(req, res, next) {
    
  Question.remove(req.body,function (err, RemovedResult) {
      if (err) return next(err);
      res.json(RemovedResult);
    });

//res.send('add question');


});


module.exports = router;
