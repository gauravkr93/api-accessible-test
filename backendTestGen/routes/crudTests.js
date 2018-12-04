var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tests = require('../models/tests.js');
var Rules = require('../models/rules.js');
var Question = require('../models/questions.js');

/*/* PUT users listing.
router.put('/add', function(req, res, next) {
console.log(req);
    

res.send('add question');


});
*/

/* SAVE test */
 router.post('/add', function(req, res, next) {
  Tests.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });


/* GET test listing. */
  router.get('/all', function(req, res, next) {
  Tests.find(function (err, answersResult) {
            if (err) return next(err);
            res.json(answersResult);
          });  
    });

    /* GET test listing. */
  router.get('/id/:_id', function(req, res, next) {
    var resultreturn=[];
    Tests.findById(req.params._id,function (err, answersResult) {
              if (err) return next(err);
              var list=[];
            //console.log(answersResult.rules);
        let   arrayNotMongo= answersResult.rules.map(function (d) { return d._id });
          // console.log(arrayNotMongo);
             var rulesArray={};
             rulesArray._id={$in:arrayNotMongo};
          //   console.log(rulesArray);
             Rules.find(rulesArray,function(err,mongoRspForRules){
              if (err) return next(err);
              var arrayofPromise=[];
              for (rls in mongoRspForRules) {
                let category=mongoRspForRules[rls].category;
                arrayofPromise.push( Question.aggregate([{ $sample: { size: mongoRspForRules[rls].number } },{$match:{category:category}}])
             .then(function(result){
            resultreturn.push(result);
             }));
            
                }
                Promise.all(arrayofPromise).then(function(){
                  console.log(resultreturn);
                 res.json(resultreturn);
                })
                
          //   console.log(mongoRspForRules);
          
         });
        
          
              
            });  
            

      });
  




    /* delete test listing. */
    router.delete('/', function(req, res, next) {
    
      Tests.remove(req.body,function (err, RemovedResult) {
          if (err) return next(err);
          res.json(RemovedResult);
        });
    
    //res.send('add question');
    
    
    });
    

     /* update test listing. */
     router.patch('/', function(req, res, next) {
    
      Tests.remove(req.body,function (err, RemovedResult) {
          if (err) return next(err);
          res.json(RemovedResult);
        });
    
    //res.send('add question');
    
    
    });



module.exports = router;
