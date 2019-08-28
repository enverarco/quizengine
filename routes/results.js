var express = require('express');
var router = express.Router();
var body = require('body-parser');
var nodemailer = require('nodemailer');

let questions = require('./questions.json');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webenquiries@mastered.ie',
    pass: 'Kaph33bean'
  }
});

router.post('', function(req, res, next) {
  console.log(req.body);
  var mailOptions = {
    from: 'webenquiries@mastered.ie',
    to: 'oisin@mastered.ie',
    subject: '😍 Contact - ' + req.body.fullname,
    html:'<h3>New Enquiry</h3><p><b>Name:</b> ' + req.body.fullname + '<br><b>Email:</b> ' + req.body.email + '<br><br><b>Description:</b> ' + req.body.message + '<br><br><b>Requirements:</b> ' + req.body.requirements  + '<br><br><b>Quote:</b> ' + req.body.quotePara + '<br></p>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.render('pages/success');
      return true;
    }
  });
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/results', {question: questions});
});

router.get('/:resultsId', function(req, res, next) {
  console.log("Results Id: ", req.params.resultsId);
  // Step1 : break out into questionid and answer id
  var myURL = req.params.resultsId;
  var answersRegex = /[A-Z]/gi;
  var answersFound = myURL.match(answersRegex);

  var questionRegex = /[1-99]/gi;
  var questionsFound = myURL.match(questionRegex);

  console.log("answers found is ", answersFound[1]);
  console.log("question found is ", questionsFound);
  //alert(myURL);


  

  /*
  var answers = [];
  var questions = [];

  for (var i = 0; i < answersFound.length; i++) {
    accounts[i] = answersFound[i];
    questions[i] = questionsFound[i];
  } */

  //console.log("answers found is ", answersFound[1]);


  var question1 = "";
  var question2 = "";
  var answer1 = "";
  var answer2 = "";

  //get pairs in the string
  //

  // Get the values for those ids (title, value)
  //question1 =

  // put them into the results array    results.push("Kiwi");


  // let results = [];


  let results = [{
        question: "Question 1",
        answer: "This is the anser for question 1",
        value: 450,
        imageURL: "../images/web/laptop.svg"
    },
    {
        question: "Question 2",
        answer: "This is the anser for question 2",
        value: 450,
        imageURL: "../images/web/laptop.svg"
    }];

  res.render('pages/results', {results: results});
});




module.exports = router;
