var express = require('express');
var router = express.Router();

// var questions = [
//   question1: {
//     title: "Question 1",
//     answers: [
//       {
//         title: "Answer 1",
//         value: "",
//         imageURL: "",
//       }
//     ]
//   },
//   question2: {}
//   ...
// ]

var questions = [{
    title: "Question 1"
    answers: [
      {
        title: "Answer 1",
        value: "",
        imageURL: "",
      },
      {
        title: "Answer 2",
        value: "",
        imageURL: "",
      },
      {
        title: "Answer 3",
        value: "",
        imageURL: "",
      }
    ]
  }
];

/* GET home page. */
router.get('/:questionId', function(req, res, next) {
  res.render('pages/question', {question: questions[req.params.questionId - 1]});
});


module.exports = router;
