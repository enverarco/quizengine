var express = require('express');
var router = express.Router();

let questions = require('./questions.json');

/* GET home page. */
router.get('/:questionId', function(req, res, next) {
//  console.log("questions is ", questions);
//  console.log("what are we sending ", questions[req.params.questionId - 1]);
let lastQuestion = false;
console.log("req.params.questionId" , req.params.questionId);
console.log("questions.length" , questions.length);

if(req.params.questionId == questions.length){
  lastQuestion = true;
  console.log("it equals the length");
}

else {
  console.log("it doesn't equal the length");
}

  res.render('pages/question', {question: questions[req.params.questionId - 1], questions, lastQuestion: lastQuestion});
});

module.exports = router;
