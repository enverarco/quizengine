var express = require('express');
var router = express.Router();

let questions = require('./questions.json');

/* GET home page. */
router.get('/:questionId', function(req, res, next) {
  console.log("questions is ", questions);
  console.log("what are we sending ", questions[req.params.questionId - 1]);
  res.render('pages/question', {question: questions[req.params.questionId - 1], questions});
});

module.exports = router;
